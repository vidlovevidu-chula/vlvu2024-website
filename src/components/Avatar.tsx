import { useStore } from "@nanostores/react";
import {
  backhair,
  body,
  chop,
  clothes,
  eye,
  glasses,
  hair,
  mounth,
  pants,
  shoes,
} from "../store";
import { useEffect, useState } from "react";

const Avatar = () => {
  const $body = useStore(body);
  const $backhair = useStore(backhair);
  const $chop = useStore(chop);
  const $clothes = useStore(clothes);
  const $eye = useStore(eye);
  const $glasses = useStore(glasses);
  const $hair = useStore(hair);
  const $mounth = useStore(mounth);
  const $pants = useStore(pants);
  const $shoes = useStore(shoes);
  const [pant, setPant] = useState('z-10');
  const [clothe, setClothe] = useState('z-0');
  const [shoe, setShoe] = useState('left-[50%]');


  useEffect(() => {
    if ($pants === 'pants2' || $pants==='pants4' || $pants === 'pants5' || $pants === 'pants7') {
      setPant('z-0');
      setClothe('z-10');
    }
    else {
      setPant('z-10');
      setClothe('z-0')
    }
    if ($shoes === 'shoes4' || $shoes === 'shoes5') {
      setShoe('left-[52%]')
    }
    else {
      setShoe('left-[50%]')
    }
  }, [$pants, $shoes])
  
  


  return (
    <div className="relative">
      {$backhair === "" && (
        <img
          src={`/assets/body/${$body}.png`}
          className="w-[450px] h-[450px] justify-center"
          alt="body"
        />
      )}
      {$backhair !== "" && (
        <>
          <img
            src={`/assets/body/${$body}.png`}
            className="absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
            alt="body"
          />
          <img
            src={`/assets/backhair/${$backhair}.png`}
            className="w-[450px] h-[450px] justify-center"
            alt="backhair"
          />
        </>
      )}
      {$eye !== "" && (
        <img
          src={`/assets/eye/${$eye}.png`}
          className="absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="eye"
        />
      )}
      {$glasses !== "" && (
        <img
          src={`/assets/glasses/${$glasses}.png`}
          className="absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="mounth"
        />
      )}
      {$hair !== "" && (
        <img
          src={`/assets/hair/${$hair}.png`}
          className="absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="hair"
        />
      )}
      {$mounth !== "" && (
        <img
          src={`/assets/mounth/${$mounth}.png`}
          className="absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"
          alt="mounth"
        />
      )}
      {$clothes !== "" && (
        <img
          src={`/assets/clothes/${$clothes}.png`}
          className={`absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2 ${clothe}`}
          alt="clothes"
        />
      )}
      {$pants !== "" && (
        <img
          src={`/assets/pants/${$pants}.png`}
          className={`absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2 ${pant}`}
          alt="pants"
        />
      )}
      {$chop !== "" && (
        <img
          src={`/assets/chop/${$chop}.png`}
          className="absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2 z-20"
          alt="chop"
        />
      )}
      {$shoes !== "" && (
        <img
          src={`/assets/shoes/${$shoes}.png`}
          className={`absolute w-[450px] h-[450px] bottom-0 transform -translate-x-1/2 ${shoe}`}
          alt="shoes"
        />
      )}
    </div>
  );
};

export default Avatar;
