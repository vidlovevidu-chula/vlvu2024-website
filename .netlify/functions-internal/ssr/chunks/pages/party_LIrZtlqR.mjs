/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_SZKTg0q5.mjs';
import { $ as $$Layout } from './event_AltUL-Te.mjs';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://main--vlvu2024-me.netlify.app/");
const prerender = false;
const $$Party = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Party;
  return renderTemplate(_a || (_a = __template(["", '  <script>\n  function setCookie(cname, cvalue, exdays) {\n    const d = new Date();\n    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);\n    let expires = "expires=" + d.toUTCString();\n    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";\n  }\n\n  function getCookie(cname) {\n    let name = cname + "=";\n    let decodedCookie = decodeURIComponent(document.cookie);\n    let ca = decodedCookie.split(";");\n    for (let i = 0; i < ca.length; i++) {\n      let c = ca[i];\n      while (c.charAt(0) == " ") {\n        c = c.substring(1);\n      }\n      if (c.indexOf(name) == 0) {\n        return c.substring(name.length, c.length);\n      }\n    }\n    return "";\n  }\n\n  const button = document.getElementById("enter");\n  button?.addEventListener("click", async () => {\n    const party_name = document.getElementById("party").value;\n    const id = getCookie("id");\n    document.getElementById("party").value =\n      `https://main--vlvu2024-me.netlify.app/party/${party_name}/${id}`;\n    const copyText = document.getElementById("party");\n\n    // Select the text field\n    copyText.select();\n    copyText.setSelectionRange(0, 99999); // For mobile devices\n\n    // Copy the text inside the text field\n    navigator.clipboard.writeText(copyText.value);\n\n\n    const data = new FormData();\n    data.append("create_by", id);\n    data.append("party_name", party_name);\n\n    const response = await fetch("/api/party", {\n      method: "POST",\n      mode: "no-cors",\n      body: data,\n    });\n\n    const res = await response.json();\n\n    // Display "hello" text after successful submission\n  });\n<\/script>'], ["", '  <script>\n  function setCookie(cname, cvalue, exdays) {\n    const d = new Date();\n    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);\n    let expires = "expires=" + d.toUTCString();\n    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";\n  }\n\n  function getCookie(cname) {\n    let name = cname + "=";\n    let decodedCookie = decodeURIComponent(document.cookie);\n    let ca = decodedCookie.split(";");\n    for (let i = 0; i < ca.length; i++) {\n      let c = ca[i];\n      while (c.charAt(0) == " ") {\n        c = c.substring(1);\n      }\n      if (c.indexOf(name) == 0) {\n        return c.substring(name.length, c.length);\n      }\n    }\n    return "";\n  }\n\n  const button = document.getElementById("enter");\n  button?.addEventListener("click", async () => {\n    const party_name = document.getElementById("party").value;\n    const id = getCookie("id");\n    document.getElementById("party").value =\n      \\`https://main--vlvu2024-me.netlify.app/party/\\${party_name}/\\${id}\\`;\n    const copyText = document.getElementById("party");\n\n    // Select the text field\n    copyText.select();\n    copyText.setSelectionRange(0, 99999); // For mobile devices\n\n    // Copy the text inside the text field\n    navigator.clipboard.writeText(copyText.value);\n\n\n    const data = new FormData();\n    data.append("create_by", id);\n    data.append("party_name", party_name);\n\n    const response = await fetch("/api/party", {\n      method: "POST",\n      mode: "no-cors",\n      body: data,\n    });\n\n    const res = await response.json();\n\n    // Display "hello" text after successful submission\n  });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-d35dwljr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col self-center items-center w-full font-line mx-auto max-w-screen-sm bg-web-bg pt-4 pb-16" data-astro-cid-d35dwljr> <div class="bg-web-bg min-h-screen flex justify-center items-center font-line" data-astro-cid-d35dwljr> <form action="" class="p-8 bg-white rounded-lg shadow-lg" data-astro-cid-d35dwljr> <h1 class="text-2xl font-bold text-center mb-6" data-astro-cid-d35dwljr>Create a Party and Invite Friends!</h1> <h3 class="text-sm text-center font-line mb-6" data-astro-cid-d35dwljr>*หมายเหตุ สร้างและอยู่ได้เพียง 1 ปาร์ตี้เท่านั้น ไม่สามารถออกจากปาร์ตี้ได้ กรุณาตัดสินใจให้ดีก่อนเข้าร่วมปาร์ตี้ใด ๆ</h3> <div class="w-full flex flex-col gap-4" data-astro-cid-d35dwljr> <label for="party" class="text-lg font-semibold text-gray-700" data-astro-cid-d35dwljr>Party Name:</label> <input id="party" type="text" placeholder="Enter party name (English)" class="input-field" data-astro-cid-d35dwljr> <button type="button" id="enter" class="btn font-bold" data-astro-cid-d35dwljr>Copy Party Link</button> </div> </form> </div> </main> ` }));
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/party.astro", void 0);

const $$file = "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/party.astro";
const $$url = "/party";

export { $$Party as default, $$file as file, prerender, $$url as url };