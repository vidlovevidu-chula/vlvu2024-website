import { s as supabase } from './_id__m9dLpwAO.mjs';

const POST = async ({ request, redirect }) => {
  const datas = await request.formData();
  console.log(datas);
  const create_by = datas.get("create_by");
  const party_name = datas.get("party_name");
  const { error } = await supabase.from("party").insert([
    {
      create_by,
      party_name,
      children: []
    }
  ]).select();
  if (error) {
    console.log(error.message);
    return new Response(error.message);
  } else {
    await supabase.from("users").update({ partyname: party_name }).eq("user_name", create_by);
    return redirect("/main");
  }
};

export { POST };
