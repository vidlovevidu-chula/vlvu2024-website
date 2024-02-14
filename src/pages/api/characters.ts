import type { APIRoute } from "astro";
import { supabase } from "../../utils/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const datas = await request.formData();

  const user_name = datas.get("user_name");
  const body = datas.get('body');
  const eye = datas.get('eye');
  const hair = datas.get('hair');
  const back_hair = datas.get('back_hair');
  const pants = datas.get('pants');
  const clothes = datas.get('clothes');
  const chop = datas.get('chop');
  const shoes = datas.get('shoes');
  const glasses = datas.get('glasses');
  const mounth = datas.get('mounth');

  const { error } = await supabase
    .from("character")
    .update([
      {
        body: body,
        eye: eye,
        hair: hair,
        back_hair: back_hair,
        pants: pants,
        clothes: clothes,
        chop: chop,
        shoes: shoes,
        glasses: glasses,
        mounth: mounth
      },
    ]).eq('user_name', user_name)
    .select();
  if (error) {
    console.log(error.message);
    return new Response(error.message);
  } else {
    console.log("API success")
    return redirect('/main')
  }
};

export const GET: APIRoute = async ({ request }) => {
    const urlSearchParams = new URL(request.url);
    const param = urlSearchParams.searchParams.get('username')
    let { data: character, error } = await supabase
        .from('character')
        .select('*').eq('user_name', param)

    if (error) {
        console.log(error);
        return new Response(error.message);
    }
    else {
        return new Response(JSON.stringify(character));
    }
}
