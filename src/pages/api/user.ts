import type { APIRoute } from "astro";
import { supabase } from "../../utils/supabase";

export const POST: APIRoute = async ({ request }) => {
    const datas = await request.formData();

    const user_name = datas.get('user_name');
    console.log("USER_NAME ", user_name)
    const name = datas.get('name');
    const student_id = datas.get('student_id');
    const role = datas.get('role');
    const { error } = await supabase
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
        console.log(error.message);
        
        return new Response(error.message);
    }
    else {
        const { error } = await supabase
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
            console.log(error.message);
            
            return new Response(error.message);
        }
        return new Response("Success");
    }
}


export const GET: APIRoute = async ({ request }) => {
    const urlSearchParams = new URL(request.url);
    const param = urlSearchParams.searchParams.get('username')
    let { data: users, error } = await supabase
        .from('users')
        .select('*').eq('user_name', param)

    if (error) {
        console.log(error);
        return new Response(error.message);
    }
    else {
        return new Response(JSON.stringify(users));
    }
}