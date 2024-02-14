/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate } from '../astro_SZKTg0q5.mjs';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://main--vlvu2024-me.netlify.app/", "ASSETS_PREFIX": undefined}.SUPABASE_URL,
  {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://main--vlvu2024-me.netlify.app/", "ASSETS_PREFIX": undefined}.SUPABASE_KEY,
  {
    auth: {
      flowType: "pkce"
    }
  }
);

const $$Astro = createAstro("https://main--vlvu2024-me.netlify.app/");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const user_name = Astro2.cookies.get("id");
  if (typeof user_name === "undefined") {
    return Astro2.redirect("/");
  }
  const { party_name, id } = Astro2.params;
  console.log(id);
  if (typeof id !== "undefined" && typeof party_name !== "undefined") {
    Astro2.cookies.set("party_name", party_name);
  }
  const { data: party, error } = await supabase.from("party").select("*").eq("create_by", id);
  if (party?.length !== 0 && party != null) {
    console.log(party);
    let users = party[0].children;
    if (users.length >= 3) {
      return Astro2.redirect("/main");
    }
    if (users == null) {
      users = [];
    }
    users.push(user_name?.value || "");
    const { data, error: error2 } = await supabase.from("party").update({ children: users }).eq("party_name", party_name).select();
    if (!error2) {
      console.log("ID", id);
      const { data: user, error: error3 } = await supabase.from("users").update({ party: party_name }).eq("user_name", user_name.value).select();
      console.log("USER", user);
      console.log("NAME", user_name);
      if (error3) {
        console.log(error3.message);
      }
      Astro2.cookies.set("party_name", party_name || "");
      return Astro2.redirect("/main");
    } else {
      return new Response("Hell");
    }
  }
  return renderTemplate``;
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/party/[party_name]/[id].astro", void 0);

const $$file = "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/party/[party_name]/[id].astro";
const $$url = "/party/[party_name]/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, supabase as s };
