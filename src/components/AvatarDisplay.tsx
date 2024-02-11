import { useEffect, useState } from "react";

const AvatarDisplay = () => {
  const [loaded, setLoaded] = useState(false); // State to track whether data is loaded or not
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
  function getCookie(cname: string) {
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

  async function initLoading() {
    const username = getCookie("id");
    const res = await fetch(`/api/characters?username=${username}`);
    const result = await res.json();
    const data = result[0];    
    console.log(data);
    
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

  return (
    <div className="flex relative items-center justify-center">

      {backhair === "" && (
        <img
          src={`/assets/body/${body}.png`}
          className=" max-h-[387px] max-w-[387px] w-full h-full"
          alt="body"
        />
      )}
      {backhair !== "" && (
        <>
          <img
            src={`/assets/body/${body}.png`}
            className="absolute max-h-[387px] w-full h-full  max-w-[387px]"
            alt="body"
          />
          <img
            src={`/assets/backhair/${backhair}.png`}
            className="max-w-[387px] max-h-[387px] bottom-0 w-full h-full "
            alt="backhair"
          />
        </>
      )}
      {eye !== "" && (
        <img
          src={`/assets/eye/${eye}.png`}
          className="absolute max-w-[387px] max-h-[387px] w-full h-full "
          alt="eye"
        />
      )}
      {glasses !== "" && (
        <img
          src={`/assets/glasses/${glasses}.png`}
          className="absolute max-w-[387px] max-h-[387px] w-full h-full "
          alt="mounth"
        />
      )}
      {hair !== "" && (
        <img
          src={`/assets/hair/${hair}.png`}
          className="absolute max-w-[387px] max-h-[387px] w-full h-full "
          alt="hair"
        />
      )}
      {mounth !== "" && (
        <img
          src={`/assets/mounth/${mounth}.png`}
          className="absolute max-w-[387px] max-h-[387px] w-full h-full "
          alt="mounth"
        />
      )}
      {clothes !== "" && (
        <img
          src={`/assets/clothes/${clothes}.png`}
          className="absolute max-w-[387px] max-h-[387px] w-full h-full "
          alt="clothes"
        />
      )}
      {pants !== "" && (
        <img
          src={`/assets/pants/${pants}.png`}
          className="absolute max-w-[387px] max-h-[387px] w-full h-full "
          alt="pants"
        />
      )}
      {chop !== "" && (
        <img
          src={`/assets/chop/${chop}.png`}
          className="absolute max-w-[387px] max-h-[387px] w-full h-full "
          alt="chop"
        />
      )}
      {shoes !== "" && (
        <img
          src={`/assets/shoes/${shoes}.png`}
          className="absolute max-w-[387px] max-h-[387px] w-full h-full "
          alt="shoes"
        />
      )}
    </div>
  );
};


export default AvatarDisplay;
