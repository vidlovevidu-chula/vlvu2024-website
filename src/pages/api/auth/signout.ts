import  type {APIRoute } from "astro";
import { supabase } from "../../../utils/supabase";

export const GET: APIRoute = async ({ params, cookies }) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return new Response("Error")
  }
  cookies.delete('id');
  cookies.delete('name');
  cookies.delete('sb-access-token')
  cookies.delete('sb-refresh-token')
  
  return Response.redirect('http://localhost:4321/');
};
