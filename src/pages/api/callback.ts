import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import type { APIRoute } from "astro";
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;
export const prerender = true;

export const GET: APIRoute = async ({ request, redirect, cookies, url }) => {
  const authCode = url.searchParams.get("code");
  console.log("Auth code", authCode);

  if (!authCode) {
    return new Response("No code provided ", { status: 400 });
  }

  const supabase = createRouteHandlerClient(
    { cookies: () => cookies },
    { supabaseKey: supabaseKey, supabaseUrl: supabaseUrl }
  );
  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (data.session) {
    const { access_token, refresh_token } = data.session;
    cookies.set("sb-access-token", access_token, {
      path: "/",
    });
    cookies.set("sb-refresh-token", refresh_token, {
      path: "/",
    });

    const {
      data: { user },
    } = await supabase.auth.getUser(access_token);
    const id = user?.id;
    if (id) {
      cookies.set("id", id, {
        path: "/",
      });

      const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("user_name", id);

      if (user?.length !== 0) {
        const name = user || [];
        const _name = name[0].name;
        cookies.set("name", _name);

        return redirect("/main");
      } else {
        const { error } = await supabase
          .from("users")
          .insert([{ user_name: id }])
          .select();

        if (error) {
          console.error(error);
          return new Response(JSON.stringify({message : 'error'}))
        } else {
          return redirect("/register");
        }
      }
    }
    return redirect('/')
  }
  return redirect('/')
};
