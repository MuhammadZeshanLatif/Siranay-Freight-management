-- Run in the Supabase SQL Editor. Safe to rerun.
create table if not exists public.admin_users (user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.admin_users enable row level security;
revoke all on public.admin_users from anon, authenticated;
create or replace function public.is_siranay_admin() returns boolean language sql stable security definer set search_path = '' as $$ select exists(select 1 from public.admin_users where user_id = (select auth.uid())); $$;
revoke all on function public.is_siranay_admin() from public;
grant execute on function public.is_siranay_admin() to authenticated;
create table if not exists public.carrier_inquiries (
 id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
 full_name text not null check(length(trim(full_name)) between 1 and 200), company_name text,
 phone text not null check(length(phone) between 3 and 50), email text not null check(email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
 operation_type text not null check(operation_type in ('Owner-Operator','Small Fleet','New Carrier','Cross-Border Carrier')),
 equipment text[] not null check(cardinality(equipment) between 1 and 6 and equipment <@ array['Dry Van','Reefer','Flatbed','Step Deck','Power Only','Other']::text[]),
 preferred_lanes text not null check(length(trim(preferred_lanes)) between 1 and 2000), needs text not null check(length(trim(needs)) between 1 and 10000),
 consent boolean not null check(consent), status text not null default 'new' check(status in ('new','reviewing','contacted','closed')),
 admin_notes text not null default ''
);
create table if not exists public.contact_messages (
 id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
 full_name text not null check(length(trim(full_name)) between 1 and 200), email text not null check(email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'), phone text,
 subject text not null check(length(trim(subject)) between 1 and 500), message text not null check(length(trim(message)) between 1 and 10000),
 status text not null default 'new' check(status in ('new','reviewing','contacted','closed')), admin_notes text not null default ''
);
alter table public.carrier_inquiries enable row level security;
alter table public.contact_messages enable row level security;
revoke all on public.carrier_inquiries,public.contact_messages from anon,authenticated;
grant insert(full_name,company_name,phone,email,operation_type,equipment,preferred_lanes,needs,consent) on public.carrier_inquiries to anon,authenticated;
grant insert(full_name,email,phone,subject,message) on public.contact_messages to anon,authenticated;
grant select on public.carrier_inquiries,public.contact_messages to authenticated;
grant update(status,admin_notes) on public.carrier_inquiries,public.contact_messages to authenticated;
drop policy if exists carrier_submit on public.carrier_inquiries;
create policy carrier_submit on public.carrier_inquiries for insert to anon,authenticated with check(status='new' and admin_notes='');
drop policy if exists contact_submit on public.contact_messages;
create policy contact_submit on public.contact_messages for insert to anon,authenticated with check(status='new' and admin_notes='');
drop policy if exists carrier_admin_read on public.carrier_inquiries;
create policy carrier_admin_read on public.carrier_inquiries for select to authenticated using(public.is_siranay_admin());
drop policy if exists carrier_admin_update on public.carrier_inquiries;
create policy carrier_admin_update on public.carrier_inquiries for update to authenticated using(public.is_siranay_admin()) with check(public.is_siranay_admin());
drop policy if exists contact_admin_read on public.contact_messages;
create policy contact_admin_read on public.contact_messages for select to authenticated using(public.is_siranay_admin());
drop policy if exists contact_admin_update on public.contact_messages;
create policy contact_admin_update on public.contact_messages for update to authenticated using(public.is_siranay_admin()) with check(public.is_siranay_admin());
create index if not exists carrier_created_idx on public.carrier_inquiries(created_at desc);
create index if not exists contact_created_idx on public.contact_messages(created_at desc);
-- After creating the admin in Authentication > Users, run:
-- insert into public.admin_users(user_id) select id from auth.users where email='admin@siranayfreight.com' on conflict do nothing;
