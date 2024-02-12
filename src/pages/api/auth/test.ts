import type { APIRoute } from "astro";
import type { Provider } from "@supabase/supabase-js";
import { supabase } from "../../../utils/supabase";

export const GET: APIRoute = async ({ params, request }) => {
    return new Response("Hello work");
}