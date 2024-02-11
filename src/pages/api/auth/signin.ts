import type { APIRoute } from "astro";
import type { Provider } from "@supabase/supabase-js";
import { supabase } from "../../../utils/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: "https://vlvu2024-website.vercel.app/api/auth/callback"
      },
    });

    if (error) {
      return new Response(error.message, { status: 500 });
    }
    return redirect(data.url);
  }