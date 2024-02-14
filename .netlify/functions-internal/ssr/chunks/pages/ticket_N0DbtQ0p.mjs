/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_SZKTg0q5.mjs';
import { A as AvatarDisplay } from './relation_yu-H-3Q2.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$Layout } from './event_AltUL-Te.mjs';
/* empty css                           */

const NameTicket = (prop) => {
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
  return /* @__PURE__ */ jsx("p", { className: "font-tomyam font-medium text-lg", children: name });
};

const $$Astro = createAstro("https://main--vlvu2024-me.netlify.app/");
const prerender = false;
const $$Ticket = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ticket;
  Astro2.cookies.get("name");
  const id = Astro2.cookies.get("id")?.value || "";
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-snhq6zmy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex justify-center items-center flex-col" data-astro-cid-snhq6zmy> <div class="container" id="ticket-card" data-astro-cid-snhq6zmy> <div class="card" data-astro-cid-snhq6zmy> <div class="username-box" data-astro-cid-snhq6zmy> ${renderComponent($$result2, "NameTicket", NameTicket, { "id": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/components/NameTicket", "client:component-export": "default", "data-astro-cid-snhq6zmy": true })} </div> <img src="ดาวน์โหลด-03 5.svg" alt="" data-astro-cid-snhq6zmy> <div class="mbti-box" data-astro-cid-snhq6zmy> <p class="text-template" data-astro-cid-snhq6zmy><br data-astro-cid-snhq6zmy>VIDYA <br data-astro-cid-snhq6zmy>X<br data-astro-cid-snhq6zmy> VIDVA</p> </div> <div class="character-box" data-astro-cid-snhq6zmy> ${renderComponent($$result2, "AvatarDisplay", AvatarDisplay, { "id": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/components/AvatarDisplay", "client:component-export": "default", "data-astro-cid-snhq6zmy": true })} </div> </div> <!-- <a class="download-box" id="down-ticket">
        <i class="gg-software-download"></i>
        <p class="text-down">Download</p>
      </a> --> </div> <div class="items-center left-1/2" data-astro-cid-snhq6zmy></div> </main> ` })} `;
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/ticket.astro", void 0);

const $$file = "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/ticket.astro";
const $$url = "/ticket";

export { $$Ticket as default, $$file as file, prerender, $$url as url };
