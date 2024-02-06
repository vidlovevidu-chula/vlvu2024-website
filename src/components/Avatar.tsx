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
  //        className="absolute w-[450px] h-[450px] bottom-0 left-1/2 transform -translate-x-1/2"

  return (
    <div className="flex w-full mx-auto max-h-full items-center object-cover">
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

export default Avatar;
