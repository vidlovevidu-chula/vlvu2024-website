/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_SZKTg0q5.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$Navbar } from './main_wVdnVkmK.mjs';
import { $ as $$Layout } from './event_AltUL-Te.mjs';
import { s as supabase } from './_id__m9dLpwAO.mjs';

const AvatarDisplay = (prop) => {
  useState(false);
  const [body, setBody] = useState();
  const [backhair, setBackhair] = useState();
  const [chop, setChop] = useState();
  const [clothes, setClothes] = useState();
  const [eye, setEye] = useState();
  const [glasses, setGlasses] = useState();
  const [hair, setHair] = useState();
  const [mounth, setMounth] = useState();
  const [pants, setPants] = useState();
  const [shoes, setShoes] = useState();
  async function initLoading() {
    const username = prop.id;
    const res = await fetch(`/api/characters?username=${username}`);
    const result = await res.json();
    const data = result[0];
    setBody(data.body);
    setBackhair(data.back_hair);
    setChop(data.chop);
    setClothes(data.clothes);
    setEye(data.eye);
    setGlasses(data.glasses);
    setHair(data.hair);
    setMounth(data.mounth);
    setPants(data.pants);
    setShoes(data.shoes);
  }
  useEffect(() => {
    initLoading();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex relative items-center justify-center", children: [
    backhair === "" && /* @__PURE__ */ jsx(
      "img",
      {
        src: `/assets/body/${body}.png`,
        className: " max-h-[387px] max-w-[387px] w-full h-full",
        alt: "body"
      }
    ),
    backhair !== "" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: `/assets/body/${body}.png`,
          className: "absolute max-h-[387px] w-full h-full  max-w-[387px]",
          alt: "body"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: `/assets/backhair/${backhair}.png`,
          className: "max-w-[387px] max-h-[387px] bottom-0 w-full h-full ",
          alt: "backhair"
        }
      )
    ] }),
    eye !== "" && /* @__PURE__ */ jsx(
      "img",
      {
        src: `/assets/eye/${eye}.png`,
        className: "absolute max-w-[387px] max-h-[387px] w-full h-full ",
        alt: "eye"
      }
    ),
    glasses !== "" && /* @__PURE__ */ jsx(
      "img",
      {
        src: `/assets/glasses/${glasses}.png`,
        className: "absolute max-w-[387px] max-h-[387px] w-full h-full ",
        alt: "mounth"
      }
    ),
    hair !== "" && /* @__PURE__ */ jsx(
      "img",
      {
        src: `/assets/hair/${hair}.png`,
        className: "absolute max-w-[387px] max-h-[387px] w-full h-full ",
        alt: "hair"
      }
    ),
    mounth !== "" && /* @__PURE__ */ jsx(
      "img",
      {
        src: `/assets/mounth/${mounth}.png`,
        className: "absolute max-w-[387px] max-h-[387px] w-full h-full ",
        alt: "mounth"
      }
    ),
    clothes !== "" && /* @__PURE__ */ jsx(
      "img",
      {
        src: `/assets/clothes/${clothes}.png`,
        className: "absolute max-w-[387px] max-h-[387px] w-full h-full ",
        alt: "clothes"
      }
    ),
    pants !== "" && /* @__PURE__ */ jsx(
      "img",
      {
        src: `/assets/pants/${pants}.png`,
        className: "absolute max-w-[387px] max-h-[387px] w-full h-full ",
        alt: "pants"
      }
    ),
    chop !== "" && /* @__PURE__ */ jsx(
      "img",
      {
        src: `/assets/chop/${chop}.png`,
        className: "absolute max-w-[387px] max-h-[387px] w-full h-full ",
        alt: "chop"
      }
    ),
    shoes !== "" && /* @__PURE__ */ jsx(
      "img",
      {
        src: `/assets/shoes/${shoes}.png`,
        className: "absolute max-w-[387px] max-h-[387px] w-full h-full ",
        alt: "shoes"
      }
    )
  ] });
};

const NameRelation = (prop) => {
  const [name, setName] = useState(false);
  async function initLoading() {
    const username = prop.id;
    const res = await fetch(`/api/user?username=${username}`);
    const result = await res.json();
    const data = result[0];
    const _name = data.nickname;
    setName(_name);
  }
  useEffect(() => {
    initLoading();
  }, []);
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: "font-tomyam font-normal text-center text-white text-xl mt-2 mb-12",
      children: name
    }
  );
};

const $$Astro = createAstro("https://main--vlvu2024-me.netlify.app/");
const $$Relation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Relation;
  const { cookies, redirect } = Astro2;
  const cook = cookies.get("id");
  const id = cook?.value;
  console.log("ID : ", id);
  let all_id = [];
  if (id) {
    console.log(">>>", id);
    const { data: user, error } = await supabase.from("users").select("*").eq("user_name", id);
    if (user?.length !== 0 && user != null) {
      console.log(user);
      const party_name = user[0].party;
      console.log(party_name);
      const { data: party, error: error2 } = await supabase.from("party").select("*").eq("party_name", party_name);
      if (party?.length !== 0 && party != null) {
        console.log(">>>");
        const owner = party[0].create_by;
        all_id = party[0].children;
        all_id.push(owner);
        console.log(all_id);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Main | Vid Lovd Vid U 2024" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-b from-[#FBAEB4] to-[#FEDFC2]"> <div class="max-w-screen-mobile mx-auto relative px-8"> <!-- top navbar --> ${renderComponent($$result2, "Navbar", $$Navbar, {})} <!-- top navbar --> <!-- avatar --> <div class="grid grid-cols-2 grid-rows-2 grid-flow-row"> ${all_id.map((value, index) => renderTemplate`<div class="place-content-center"> ${renderComponent($$result2, "AvatarDisplay", AvatarDisplay, { "id": value, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/components/AvatarDisplay", "client:component-export": "default" })} ${renderComponent($$result2, "NameRelation", NameRelation, { "id": value, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/components/NameRelation", "client:component-export": "default" })} </div>`)} </div> <!-- avatar --> <!-- Bottom div --> <div class="grid grid-cols-3 place-items-center"> <a href="/event" class="flex flex-col justify-center items-center gap-2"> <img src="assets/icon/mail.svg" alt="event" class="w-[67px]"> <p class="font-line font-semibold text-center text-white text-lg">
Event
</p> </a> <a href="/profile" class="flex flex-col justify-center items-center gap-2"> <img src="assets/icon/shirt.svg" alt="customize" class="w-[67px]"> <p class="font-line font-semibold text-center text-white text-lg">
Customize
</p> </a> <a href="/relation" class="flex flex-col justify-center items-center gap-2"> <img src="assets/icon/heart.svg" alt="relation" class="w-[67px]"> <p class="font-line font-semibold text-center text-white text-lg">
Relation
</p> </a> </div> <!-- Bottom div --> </div> </main> ` })}`;
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/relation.astro", void 0);

const $$file = "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/relation.astro";
const $$url = "/relation";

const relation = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Relation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { AvatarDisplay as A, relation as r };
