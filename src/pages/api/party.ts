import type { APIRoute } from "astro";
import { supabase } from "../../utils/supabase";

export const POST: APIRoute = async ({ request }) => {
    const datas = await request.formData();
    console.log(datas);

    const create_by = datas.get('create_by');
    const party_name = datas.get('party_name');
    const { error } = await supabase
        .from("party")
        .insert([
            {
                create_by: create_by,
                party_name: party_name,
            },
        ])
        .select();
    if (error) {
        console.log(error.message);
        
        return new Response(error.message);
    }
    else {
        return new Response("New");
    }
}
