import type { APIRoute } from "astro";
import type { Provider } from "@supabase/supabase-js";
import { supabase } from "../../../utils/supabase";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
    return new Response("Hello work");
}