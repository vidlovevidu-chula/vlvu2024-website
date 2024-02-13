import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";

const CallBack2 = (prop: { supabaseKey: string }) => {
  const supabaseUrl = "https://nratvbrsbqhnqhsyzrqo.supabase.co";

  const supabase = createClientComponentClient({
    supabaseKey: prop.supabaseKey,
    supabaseUrl: supabaseUrl,
  });

  const setCookie = (cname: string, cvalue: string, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  const init = async () => {
    const authCode = new URL(window.location.href);
    const code = authCode.searchParams.get("code");
    if (code) {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      let page = "";
      if (data.session) {
        const { access_token, refresh_token } = data.session;
        setCookie("sb-access-token", access_token, 30);
        setCookie("sb-refresh-token", refresh_token, 30);

        const {
          data: { user },
        } = await supabase.auth.getUser(access_token);
        const id = user?.id;
        if (id) {
          setCookie("id", id, 30);
          const { data: user } = await supabase
            .from("users")
            .select("*")
            .eq("user_name", id);
          if (user?.length !== 0) {
            const name = user || [];
            const _name = name[0].name;
            setCookie("name", _name, 30);

            window.location.href = "https://vlvu-test.vercel.app/main";
          } else {
            const { error } = await supabase
              .from("users")
              .insert([{ user_name: id }])
              .select();
            if (error) {
              console.log(error);

              return Response.json(error.message);
            } else {
              window.location.href = "https://vlvu-test.vercel.app/register";
            }
          }
          window.location.href = "https://vlvu-test.vercel.app/register";
        }
      }
    }
  };

  useEffect(() => {
    init();
  }, []);
};

export default CallBack2;
