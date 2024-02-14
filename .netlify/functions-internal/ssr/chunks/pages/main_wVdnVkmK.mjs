/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent } from '../astro_SZKTg0q5.mjs';
import { $ as $$Layout } from './event_AltUL-Te.mjs';

const $$Astro$1 = createAstro("https://main--vlvu2024-me.netlify.app/");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-center mx-10 pt-12 justify-center sticky top-0 mb-12 z-50"> <div class="font-tomyam font-normal text-center text-white text-2xl">
VLVU2024
</div> <div class="flex absolute right-0 bottom-0 m-auto"> <div id="collapseMenu" class="mt-5 hidden absolute right-0 w-max top-5 bg-white bg-opacity-80 text-black rounded pt-1"> <ul class="text-right grid grid-cols-1 divide-y *:py-3 *:mx-3 rounded-lg"> <li> <a href="" class="font-tomyam font-normal text-xl">MBTI test</a> </li> <li> <a href="" class="font-tomyam font-normal text-xl">Announcement</a> </li> <li> <a href="" class="font-tomyam font-normal text-xl">Your Ticket</a> </li> </ul> </div> </div> </div> `;
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/components/Navbar.astro", void 0);

const $$Astro = createAstro("https://main--vlvu2024-me.netlify.app/");
const prerender = false;
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const id = Astro2.cookies.get("id")?.value || "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Main | Vid Lovd Vid U 2024" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-b from-[#FBAEB4] to-[#FEDFC2] flex flex-col justify-between"> <div class="max-w-screen-mobile mx-auto relative px-8 flex flex-col items-center"> <!-- top navbar --> ${renderComponent($$result2, "Navbar", $$Navbar, {})} <!-- top navbar --> ${renderComponent($$result2, "AvatarDisplay", null, { "id": id, "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/components/AvatarDisplay", "client:component-export": "default" })} ${renderComponent($$result2, "Name", null, { "id": id, "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/components/Name", "client:component-export": "default" })} <!-- avatar --> </div> <!-- Bottom div --> <div class="grid grid-cols-3 place-items-center"> <a href="/commingsoon" class="flex flex-col justify-center items-center gap-2"> <img src="assets/icon/mail.svg" alt="event" class="w-[67px]"> <p class="font-line font-semibold text-center text-white text-lg">
Event
</p> </a> <a href="/profile" class="flex flex-col justify-center items-center gap-2"> <img src="assets/icon/shirt.svg" alt="customize" class="w-[67px]"> <p class="font-line font-semibold text-center text-white text-lg">
Customize
</p> </a> <a href="/relation" class="flex flex-col justify-center items-center gap-2"> <img src="assets/icon/heart.svg" alt="relation" class="w-[67px]"> <p class="font-line font-semibold text-center text-white text-lg">
Relation
</p> </a> </div> <div class="flex justify-center mb-20"> <a href="/ticket" class="bg-white px-6 py-6 text-center mr-6 w-auto h-8 font-line text-md font-bold rounded-2xl flex items-center justify-center">View your ticket</a> <a href="/party" class="bg-white px-6 py-6 text-center mr-6 w-auto h-8 font-line text-md font-bold rounded-2xl flex items-center justify-center">Create party</a> </div> </main> ` })}`;
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/main.astro", void 0);

const $$file = "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/main.astro";
const $$url = "/main";

const main = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Main,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Navbar as $, main as m };
