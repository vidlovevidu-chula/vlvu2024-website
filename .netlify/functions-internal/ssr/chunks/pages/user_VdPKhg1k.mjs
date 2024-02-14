import { s as supabase } from './_id__m9dLpwAO.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const datas = await request.formData();
  const user_name = cookies.get("id");
  const name = datas.get("name");
  const student_id = datas.get("student_id");
  const role = datas.get("role");
  const nickname = datas.get("nickname");
  const { error } = await supabase.from("users").insert([
    {
      user_name: user_name?.value,
      student_id,
      name,
      role,
      nickname
    }
  ]).select();
  if (error) {
    if (error.message === `duplicate key value violates unique constraint "test_pkey`) {
      return redirect("/main");
    }
    console.log(error.message);
    return redirect("/main");
  } else {
    const { error: error2 } = await supabase.from("character").insert([
      {
        user_name: user_name?.value,
        body: "body1",
        eye: "",
        hair: "",
        back_hair: "",
        pants: "",
        clothes: "",
        chop: "",
        shoes: "",
        glasses: "",
        mounth: ""
      }
    ]).select();
    if (error2) {
      console.log("ERROR", error2.message);
      return new Response(error2.message + "CHAR");
    }
    return redirect("/main");
  }
};
const GET = async ({ request }) => {
  const urlSearchParams = new URL(request.url);
  const param = urlSearchParams.searchParams.get("username");
  let { data: users, error } = await supabase.from("users").select("*").eq("user_name", param);
  if (error) {
    console.log(error);
    return new Response(error.message);
  } else {
    return new Response(JSON.stringify(users));
  }
};

export { GET, POST };
