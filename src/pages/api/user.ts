import type { APIRoute } from "astro";
import { supabase } from "../../utils/supabase";

export const POST: APIRoute = async ({ params, request }) => {
    const datas = await request.formData();
    console.log(datas);

    const user_name = datas.get('user_name');
    const name = datas.get('name');
    const student_id = datas.get('student_id');
    const role = datas.get('role');
    const { data, error } = await supabase
        .from("users")
        .insert([
            {
                user_name: user_name,
                student_id: student_id,
                name: name,
                role: role,
            },
        ])
        .select();
    if (error) {
        return new Response(error.message);
    }
    else {
        const { data, error } = await supabase
        .from("character")
        .insert([
          {
            user_name: user_name,
            body: 'body1',
            eye: '',
            hair: '',
            back_hair: '',
            pants: '',
            clothes: '',
            chop: '',
            shoes: '',
            glasses: '',
            mounth: ''
          },
        ])
        .select();
        if (error) {
            return new Response(error.message);
        }
        return new Response("Success");
    }
}