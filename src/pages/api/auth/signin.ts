import type { APIRoute } from "astro";
import { supabase } from "../../../utils/supabase";
export const prerender = false;


export const POST: APIRoute = async ({request}) => {

  console.log("Enter post");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: "https://vlvu2024-website.vercel.app/api/auth/callback"
      },
    });

    if (error) {
      console.log(error.message)

      return new Response(error.message, { status: 500 });
    }
    return Response.redirect(data.url);
  }