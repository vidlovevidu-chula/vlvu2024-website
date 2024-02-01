import { useStore } from "@nanostores/react";
import React from "react";
import { backhair, body, chop, clothes, eye, glasses, hair, mounth, pants, shoes } from "../store";

interface ImageCustomProps {
  src: string;
  alt: string;
  type: string;
}

const ImageCustom: React.FC<ImageCustomProps> = ({ src, alt, type }) => {

  const $body = useStore(body);
  const $backhair = useStore(backhair);
  const $hair = useStore(hair);
  const $eye = useStore(eye);
  const $glasses = useStore(glasses);
  const $mounth = useStore(mounth);
  const $clothes = useStore(clothes);
  const $pants = useStore(pants);
  const $chop = useStore(chop);
  const $shoes = useStore(shoes);

  const changeItem = (item_name: string, alt: string) => {
    switch (item_name) {
      case "body":
        body.set(alt);
        break;
      case "backhair":
        if ($backhair === alt) {
          backhair.set("");
          break;
        }
        backhair.set(alt);
        break;
      case "hair":
        if ($hair === alt) {
          hair.set("");
          break;
        }
        hair.set(alt);
        break;
      case "eye":
        if ($eye === alt) {
          eye.set("");
          break;
        }
        eye.set(alt);
        break;
      case "glasses":
        if ($glasses === alt) {
          glasses.set("")
        }
        glasses.set(alt);
        break;
      case "mounth":
        if ($mounth === alt) {
          mounth.set("");
          break;
        }  
        mounth.set(alt);
        break;
      case "clothes":
        if ($clothes === alt) {
          clothes.set("");
          break;
        }
        clothes.set(alt);
        break
      case "pants":
        if ($pants === alt) {
          pants.set("");
          break;
        }
        pants.set(alt);
        break;
      case "chop":
        if ($chop === alt) {
          chop.set("");
          break;
        }
        chop.set(alt);
        break;
      case "shoes":
        if ($shoes === alt) {
          shoes.set("");
          break;
        }
        shoes.set(alt);
        break;
      default:
        break;
    }
  };
  return (
    <img
      src={src}
      alt={alt}
      className="w-[200px] h-[200px] cursor-pointer transition duration-300 transform hover:scale-105"
      onClick={() => changeItem(type, alt)}
    />
  );
};

export default ImageCustom;
