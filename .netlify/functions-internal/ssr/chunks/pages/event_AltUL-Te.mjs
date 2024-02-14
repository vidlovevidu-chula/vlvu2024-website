/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as addAttribute, h as renderComponent, m as maybeRenderHead } from '../astro_SZKTg0q5.mjs';
/* empty css                          */
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://main--vlvu2024-me.netlify.app/");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head> <body> <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script> <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script> ', ' <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-8L36ESDVVE"><\/script> <script>\n      // @ts-expect-error google tag\n      window.dataLayer = window.dataLayer || [];\n      // @ts-expect-error google tag\n      function gtag() {\n        window.dataLayer.push(arguments);\n      }\n      // @ts-expect-error google tag\n      gtag("js", new Date());\n      // @ts-expect-error google tag\n      gtag("config", "G-8L36ESDVVE");\n    <\/script> </body> </html> '])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro("https://main--vlvu2024-me.netlify.app/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title ?? "Vid Love Vid U 2024" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://main--vlvu2024-me.netlify.app/");
const $$Event = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Event;
  await {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://main--vlvu2024-me.netlify.app/", "ASSETS_PREFIX": undefined}.SUPABASE_KEY;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-x3hpkgaj": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="mem" style="margin-left:0px" class="container" data-astro-cid-x3hpkgaj> <font size="6" face="MN Tomyam" color="black"> <h1 data-astro-cid-x3hpkgaj>ลองเขียนจดหมายให้คุณในปีหน้าสิ</h1> </font></div><font size="6" face="MN Tomyam" color="black"></font> <div id="mem" style="margin-left:-50px margin-top:50px" class="container" data-astro-cid-x3hpkgaj> <h1 data-astro-cid-x3hpkgaj>ตอนนี้มีมุมมองต่อความรักของตัวคุณเป็นยังไง<br data-astro-cid-x3hpkgaj>
มองภาพชีวิตรักของตัวเองในอนาคตไว้แบบไหน<br data-astro-cid-x3hpkgaj>
จะไล่ตามหาคนที่เหมาะสม <br data-astro-cid-x3hpkgaj>
จะทุ่มเทให้ใครสักคนอย่างสุดหัวใจ <br data-astro-cid-x3hpkgaj>
หรือคุณที่จะกลับมารักตัวเองมากขึ้น<br data-astro-cid-x3hpkgaj>
คุณในวาเลนไทน์ปีหน้าจะเป็นยังไงนะ</h1> </div> <form method="POST" id="Form" data-astro-cid-x3hpkgaj> <div id="mem" style="margin-left:0px; margin-top:50px" class="container" data-astro-cid-x3hpkgaj>
ถึงตัวคุณ(อีเมล/IG):
</div> <div class="container" data-astro-cid-x3hpkgaj> <input name="email" id="email" required data-astro-cid-x3hpkgaj> </div> <div id="mem" style="margin-left:0px; margin-top:50px" class="container" data-astro-cid-x3hpkgaj> <label data-astro-cid-x3hpkgaj>
ข้อความถึงตัวคุณ :
</label></div> <div class="container" data-astro-cid-x3hpkgaj> <textarea rows="2" cols="25" class="message" name="message" id="message" required maxlength="500" data-astro-cid-x3hpkgaj></textarea> </div> <div id="mem" style="margin-left:0px; margin-top:300px" class="container" data-astro-cid-x3hpkgaj> <button type="submit" data-astro-cid-x3hpkgaj>
ส่งจดหมาย
</button> </div> </form> ` })}`;
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/event.astro", void 0);
const $$file = "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/event.astro";
const $$url = "/event";

const event = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Event,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, event as e };
