import type { APIRoute } from "astro";
import type { Provider } from "@supabase/supabase-js";
import { supabase } from "../../../utils/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const provider = formData.get("provider")?.toString();

  if (provider) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: import.meta.env.DEV
          ? "http://localhost:4321/api/auth/callback"
          : "https://astro-supabase-auth.vercel.app/api/auth/callback",
      },
    });

    if (error) {
      return new Response(error.message, { status: 500 });
    }
    console.log(data.provider);
    return redirect(data.url);
  }
  else return new Response("");
};