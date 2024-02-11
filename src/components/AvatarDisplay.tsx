const AvatarDisplay = () => {
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
  let _data = getCookie("characters");

  if (_data === "") {
    _data = JSON.stringify({
      body: "body1",
      backhair: "",
      chop: "",
      clothes: "",
      eye: "",
      glasses: "",
      hair: "",
      mounth: "",
      pants: "",
      shoes: "",
    });
  }

  const data = JSON.parse(_data);
  const $body = data.body;
  const $backhair = data.backhair;
  const $chop = data.chop;
  const $clothes = data.clothes;
  const $eye = data.eye;
  const $glasses = data.glasses;
  const $hair = data.hair;
  const $mounth = data.mounth;
  const $pants = data.pants;
  const $shoes = data.shoes;

  return (
    <div className="relative">
      {$backhair === "" && (
        <img
          src={`/assets/body/${$body}.png`}
          className="object-scale-down w-[450px] h-[450px] justify-center"
          alt="body"
        />
      )}
      {$backhair !== "" && (
        <>
          <img
            src={`/assets/body/${$body}.png`}
            className="object-scale-down absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2 "
            alt="body"
          />
          <img
            src={`/assets/backhair/${$backhair}.png`}
            className="object-scale-down w-[450px] h-[450px] justify-center"
            alt="backhair"
          />
        </>
      )}
      {$eye !== "" && (
        <img
          src={`/assets/eye/${$eye}.png`}
          className="object-scale-down absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="eye"
        />
      )}
      {$glasses !== "" && (
        <img
          src={`/assets/glasses/${$glasses}.png`}
          className="object-scale-down absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="mounth"
        />
      )}
      {$hair !== "" && (
        <img
          src={`/assets/hair/${$hair}.png`}
          className="object-scale-down absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="hair"
        />
      )}
      {$mounth !== "" && (
        <img
          src={`/assets/mounth/${$mounth}.png`}
          className="object-scale-down absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="mounth"
        />
      )}
      {$clothes !== "" && (
        <img
          src={`/assets/clothes/${$clothes}.png`}
          className="object-scale-down absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="clothes"
        />
      )}
      {$pants !== "" && (
        <img
          src={`/assets/pants/${$pants}.png`}
          className="object-scale-down absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="pants"
        />
      )}
      {$chop !== "" && (
        <img
          src={`/assets/chop/${$chop}.png`}
          className="object-scale-down absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="chop"
        />
      )}
      {$shoes !== "" && (
        <img
          src={`/assets/shoes/${$shoes}.png`}
          className="object-scale-down absolute w-[450px] h-[450px] bottom-0 left-[238px] transform -translate-x-1/2"
          alt="shoes"
        />
      )}
    </div>
  );
};

export default AvatarDisplay;
