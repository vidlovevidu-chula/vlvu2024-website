import type { APIRoute } from "astro";
import { supabase } from "../../../utils/supabase";
export const prerender = false;

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  
  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (error) {
    return new Response(error.message, { status: 500 });
  }

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
      const name = user || []
      const _name = name[0].name;
      cookies.set('name', _name);
      
      return redirect("/main");
    } else {
      const { error } = await supabase
        .from("users")
        .insert([{ user_name: id }])
        .select();
      if (error) {
        console.log(error);
        
        return Response.json(error.message);
      } else {
        return redirect("/register");
      }
    }
  }

  if (error) {
    return new Response("Error");
  }

  return redirect("/register");
};
