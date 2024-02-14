/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_SZKTg0q5.mjs';
import { $ as $$Layout } from './event_AltUL-Te.mjs';
import { s as supabase } from './_id__m9dLpwAO.mjs';
/* empty css                             */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://main--vlvu2024-me.netlify.app/");
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  const { data: { user } } = await supabase.auth.getUser(accessToken?.value);
  const id = user?.id;
  if (id) {
    cookies.set("id", id);
    const { data: user2, error: error2 } = await supabase.from("users").select("*").eq("user_name", id);
    if (!error2 && user2.length > 0) {
      return redirect("/main");
    }
  }
  if (!accessToken || !refreshToken) {
    return redirect("/");
  }
  await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  return renderTemplate(_a || (_a = __template(["", '  <script>\n  const studentIdInput = document.getElementById("\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E34\u0E2A\u0E34\u0E15");\n  const statusSelect = document.getElementById("status");\n  function setCookie(cname, cvalue, exdays) {\n    const d = new Date();\n    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);\n    let expires = "expires=" + d.toUTCString();\n    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";\n  }\n\n  function getCookie(cname) {\n    let name = cname + "=";\n    let decodedCookie = decodeURIComponent(document.cookie);\n    let ca = decodedCookie.split(";");\n    for (let i = 0; i < ca.length; i++) {\n      let c = ca[i];\n      while (c.charAt(0) == " ") {\n        c = c.substring(1);\n      }\n      if (c.indexOf(name) == 0) {\n        return c.substring(name.length, c.length);\n      }\n    }\n    return "";\n  }\n\n  const button = document.getElementById("\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19");\n  button?.addEventListener("click", async () => {\n    const name = document.getElementById("\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25").value;\n    const student_id = document.getElementById("\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E34\u0E2A\u0E34\u0E15").value;\n    const role = document.getElementById("status").value;\n    const nickname = document.getElementById("nickname").value;\n    const data = new FormData();\n    data.append("name", name);\n    data.append("student_id", student_id);\n    data.append("role", role);\n    data.append("nickname", nickname);\n\n    const response = await fetch("/api/user", {\n      method: "POST",\n      mode: "no-cors",\n      body: data,\n    });\n    const res = await response.json();\n\n  });\n\n    // Add event listener for select change\n    statusSelect.addEventListener("change", function() {\n    if (this.value === "Custudent") {\n      // Enable input field\n      studentIdInput.disabled = false;\n    } else {\n      // Disable input field\n      studentIdInput.disabled = true;\n      // Clear input value\n      studentIdInput.value = "";\n    }\n  });\n\n  // Disable input field initially if the default selected option is not "Custudent"\n  if (statusSelect.value !== "Custudent") {\n    studentIdInput.disabled = true;\n  }\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-qraosrxq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col self-center items-center w-full font-line mx-auto max-w-screen-sm bg-web-bg pt-4 pb-16" data-astro-cid-qraosrxq> <div class="flex items-center" data-astro-cid-qraosrxq> <img src="/assets/regis/logo_thai_white1 1.png" alt="logovidva" class="h-15" data-astro-cid-qraosrxq> <img src="/assets/regis/สโมขาว 1.png" alt="สโมขาว" class="h-12 mb-2" data-astro-cid-qraosrxq> </div> <div class="box" data-astro-cid-qraosrxq> <form id="form" action="/api/user" method="post" data-astro-cid-qraosrxq> <img src="/assets/regis/just lego.png" alt="justlogo" class="center" data-astro-cid-qraosrxq> <div data-astro-cid-qraosrxq> <h1 data-astro-cid-qraosrxq>Register</h1> <h1 data-astro-cid-qraosrxq>ลงทะเบียนเข้างาน</h1> </div> <div data-astro-cid-qraosrxq> <label for="ชื่อจริง-นามสกุล" data-astro-cid-qraosrxq>ชื่อจริง-นามสกุล<br data-astro-cid-qraosrxq> <input accept-charset="UTF-8" id="ชื่อจริง-นามสกุล" name="name" type="text" placeholder="ชื่อจริง-นามสกุล" class="center" required data-astro-cid-qraosrxq> </label> </div> <div data-astro-cid-qraosrxq> <label for="ชื่อจริง-นามสกุล" data-astro-cid-qraosrxq>เรียกคุณว่าอะไรดีนะ<br data-astro-cid-qraosrxq> <input accept-charset="UTF-8" id="nickname" name="name" type="text" placeholder="username" class="center" required data-astro-cid-qraosrxq> </label> </div> <div data-astro-cid-qraosrxq> <label for="status" data-astro-cid-qraosrxq>สถานภาพ<br data-astro-cid-qraosrxq> <select name="status" id="status" class="center" data-astro-cid-qraosrxq> <option value="Custudent" data-astro-cid-qraosrxq>นิสิตจุฬา</option> <option value="teacher" data-astro-cid-qraosrxq>อาจารย์และบุคลากรจุฬา</option> <option value="student" data-astro-cid-qraosrxq>นักเรียน/นักศึกษา</option> <option value="anthoer" data-astro-cid-qraosrxq>ประชาชนทั่วไป</option> </select> </label> </div> <div data-astro-cid-qraosrxq> <label for="รหัสนิสิต" data-astro-cid-qraosrxq>รหัสนิสิต<br data-astro-cid-qraosrxq> <input id="รหัสนิสิต" name="student_id" type="text" placeholder="รหัสนิสิต" class="center" data-astro-cid-qraosrxq> <br data-astro-cid-qraosrxq> <button id="ลงทะเบียน" name="ลงทะเบียน" value="ลงทะเบียน" class="center text-sm shadow-md" data-astro-cid-qraosrxq>ลงทะเบียน</button> </label> </div> <br data-astro-cid-qraosrxq> </form> </div> </main> ` }));
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/register.astro", void 0);

const $$file = "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
