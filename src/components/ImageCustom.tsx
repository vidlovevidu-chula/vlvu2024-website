import { useStore } from "@nanostores/react";
import React from "react";
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

  const setCookie = (cname: string, cvalue: string, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  const data = {
    body: $body,
    backhair: $backhair,
    chop: $chop,
    clothes: $clothes,
    eye: $eye,
    glasses: $glasses,
    hair: $hair,
    mounth: $mounth,
    pants: $pants,
    shoes: $shoes,
  };


  const changeItem = (item_name: string, alt: string) => {
    switch (item_name) {
      case "body":
        body.set(alt);
        data.body = alt;
        break;
      case "backhair":
        if ($backhair === alt) {
          backhair.set("");
          data.backhair = "";
          break;
        }
        backhair.set(alt);
        data.backhair = alt;
        break;
      case "hair":
        if ($hair === alt) {
          hair.set("");
          data.hair = "";
          break;
        }
        hair.set(alt);
        data.hair = "";
        break;
      case "eye":
        if ($eye === alt) {
          eye.set("");
          data.eye = "";
          break;
        }
        eye.set(alt);
        data.eye = alt
        break;
      case "glasses":
        if ($glasses === alt) {
          glasses.set("");
          data.glasses = "";
        }
        glasses.set(alt);
        data.glasses = alt
        break;
      case "mounth":
        if ($mounth === alt) {
          mounth.set("");
          data.mounth = ""
          break;
        }
        mounth.set(alt);
        data.mounth = alt;
        break;
      case "clothes":
        if ($clothes === alt) {
          clothes.set("");
          data.clothes = "";
          break;
        }
        clothes.set(alt);
        data.clothes = alt
        break;
      case "pants":
        if ($pants === alt) {
          pants.set("");
          data.pants = "";
          break;
        }
        pants.set(alt);
        data.pants = alt;
        break;
      case "chop":
        if ($chop === alt) {
          chop.set("");
          data.chop = "";
          break;
        }
        chop.set(alt);
        data.chop = alt
        break;
      case "shoes":
        if ($shoes === alt) {
          shoes.set("");
          data.shoes = "";
          break;
        }
        shoes.set(alt);
        data.shoes = alt;
        break;
      default:
        break;
    }
    setCookie('characters', JSON.stringify(data), 30);
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
