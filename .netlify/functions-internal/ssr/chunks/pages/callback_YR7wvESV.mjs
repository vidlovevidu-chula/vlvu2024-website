import { s as supabase } from './_id__m9dLpwAO.mjs';

const GET = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  console.log("AUTH", authCode);
  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }
  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
  if (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  console.log("Get token");
  return redirect("/register");
};

export { GET };
