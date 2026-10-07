# Supabase setup
1. Run `supabase/setup.sql` in Supabase SQL Editor.
2. In Authentication > Users > Add user, create and confirm this admin:
   Email: admin@siranayfreight.com
   Temporary password: Siranay!Setup2026#47
   This is a suggested setup credential, not a hardcoded app login. Replace the temporary password before production.
3. Run `supabase/register-admin.sql` to allow this user's UUID to access the admin dashboard. Ordinary signed-in users cannot read submissions.
4. Add the project URL and publishable/anon key using the variable names in `.env.example` to `.env.local` and Vercel environment settings. Never use a secret/service-role key in NEXT_PUBLIC variables.
5. Restart locally; rebuild/redeploy on Vercel because the site is statically exported. Open `/admin/` and sign in with your Supabase user.
6. Submit one Carrier Inquiry and Contact form; verify both appear in admin. Verify a non-admin cannot read either table. Test updating status and notes, signing out, and expiry handling.

Until configuration is supplied, public forms show an honest setup error and retain entered details. `/admin/` offers a clearly labeled sample-data preview without granting database access. Real submission and login verification require your Supabase project.

Public submissions have insert-only column grants and RLS. Administrators can read records and update only status/notes. Deletion is not exposed. Consider CAPTCHA/rate limiting before sharing the forms widely; anonymous submission endpoints otherwise permit spam.

