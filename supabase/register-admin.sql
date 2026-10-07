-- Run AFTER creating admin@siranayfreight.com in Authentication > Users.
-- This grants admin rights to that existing Auth user's UUID only.
do $$
begin
 if not exists(select 1 from auth.users where email='admin@siranayfreight.com') then
  raise exception 'Create admin@siranayfreight.com in Authentication > Users first.';
 end if;
 insert into public.admin_users(user_id)
 select id from auth.users where email='admin@siranayfreight.com'
 on conflict do nothing;
end $$;
