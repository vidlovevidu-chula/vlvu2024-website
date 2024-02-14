/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_SZKTg0q5.mjs';
import { $ as $$Layout } from './event_AltUL-Te.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://main--vlvu2024-me.netlify.app/");
const prerender = false;
const $$Mbti = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mbti;
  Astro2.props;
  return renderTemplate(_a || (_a = __template(["", ` <script>
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  const button = document.getElementById("submit");
  button.addEventListener("click", async () => {
    const name = getCookie("name");
    const role = getCookie("role");
    const student_id = getCookie("student_id");
    const user_name = document.getElementById("username").value;

    const data = new FormData();
    data.append("name", name);
    data.append("student_id", student_id);
    data.append("user_name", user_name);
    data.append("role", role);
    setCookie('user_name', user_name, 30);
    const response = await fetch("/api/user", {
      method: "POST",
      mode: "no-cors",
      body: data,
    });
    const res = await response.json();
  });
<\/script>`])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form id="form" action="/main" method="post"> <img src="../../public/assets/regis/just lego.png" alt="justlogo" class="center"> <div> <h1>Register</h1> <h1>ลงทะเบียนเข้างาน</h1> </div> <div> <label for="ชื่อจริง-นามสกุล">name<br> <input id="username" name="name" type="text" placeholder="user name" class="center" required> </label> <button id="submit" name="ลงทะเบียน" value="ลงทะเบียน" class="center text-sm shadow-md">ลงทะเบียน</button> </div> </form> <br> ` }));
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/mbti.astro", void 0);

const $$file = "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/mbti.astro";
const $$url = "/mbti";

export { $$Mbti as default, $$file as file, prerender, $$url as url };
