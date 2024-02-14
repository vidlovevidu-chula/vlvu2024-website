import { s as supabase } from './_id__m9dLpwAO.mjs';

const prerender = false;
const GET = async ({ request, cookies, redirect }) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://main--vlvu2024-me.netlify.app/api/auth/callback"
    }
  });
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return redirect(data.url);
};

export { GET, prerender };
