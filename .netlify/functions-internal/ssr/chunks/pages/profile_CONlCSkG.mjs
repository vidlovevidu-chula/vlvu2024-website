/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_SZKTg0q5.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useState, useEffect } from 'react';
import { $ as $$Layout } from './event_AltUL-Te.mjs';

const pageName = atom("Body");
const body = atom("body1");
const backhair = atom("");
const chop = atom("");
const clothes = atom("");
const eye = atom("");
const glasses = atom("");
const hair = atom("");
const mounth = atom("");
const pants = atom("");
const shoes = atom("");
atom([
  { name: "Body", icon: "home-outline", dis: "translate-x-0" },
  { name: "Hair", icon: "person-outline", dis: "translate-x-36" },
  { name: "BackHair", icon: "chatbubble-outline", dis: "translate-x-72" }
]);

const ImageCustom = ({ src, alt, type }) => {
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
  const data = {
    body: $body,
    back_hair: $backhair,
    chop: $chop,
    clothes: $clothes,
    eye: $eye,
    glasses: $glasses,
    hair: $hair,
    mounth: $mounth,
    pants: $pants,
    shoes: $shoes
  };
  const changeItem = (item_name, alt2) => {
    switch (item_name) {
      case "body":
        body.set(alt2);
        data.body = alt2;
        break;
      case "backhair":
        if ($backhair === alt2) {
          backhair.set("");
          data.back_hair = "";
          break;
        }
        backhair.set(alt2);
        data.back_hair = alt2;
        break;
      case "hair":
        if ($hair === alt2) {
          hair.set("");
          data.hair = "";
          break;
        }
        hair.set(alt2);
        data.hair = alt2;
        break;
      case "eye":
        if ($eye === alt2) {
          eye.set("");
          data.eye = "";
          break;
        }
        eye.set(alt2);
        data.eye = alt2;
        break;
      case "glasses":
        if ($glasses === alt2) {
          glasses.set("");
          data.glasses = "";
        }
        glasses.set(alt2);
        data.glasses = alt2;
        break;
      case "mounth":
        if ($mounth === alt2) {
          mounth.set("");
          data.mounth = "";
          break;
        }
        mounth.set(alt2);
        data.mounth = alt2;
        break;
      case "clothes":
        if ($clothes === alt2) {
          clothes.set("");
          data.clothes = "";
          break;
        }
        clothes.set(alt2);
        data.clothes = alt2;
        break;
      case "pants":
        if ($pants === alt2) {
          pants.set("");
          data.pants = "";
          break;
        }
        pants.set(alt2);
        data.pants = alt2;
        break;
      case "chop":
        if ($chop === alt2) {
          chop.set("");
          data.chop = "";
          break;
        }
        chop.set(alt2);
        data.chop = alt2;
        break;
      case "shoes":
        if ($shoes === alt2) {
          shoes.set("");
          data.shoes = "";
          break;
        }
        shoes.set(alt2);
        data.shoes = alt2;
        break;
    }
    localStorage.setItem("chars", JSON.stringify(data));
    console.log("Test", data);
  };
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt,
      className: "w-[200px] h-[200px] cursor-pointer transition duration-300 transform hover:scale-105",
      onClick: () => changeItem(type, alt)
    }
  );
};

const Body = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap w-auto justify-center", children: [
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/body/body1.png", alt: "body1", type: "body" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/body/body2.png", alt: "body2", type: "body" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/body/body3.png", alt: "body3", type: "body" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/body/body4.png", alt: "body4", type: "body" })
  ] });
};

const BackHair = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap w-auto justify-center", children: [
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/backhair/backhair1.png", alt: "backhair1", type: "backhair" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/backhair/backhair2.png", alt: "backhair2", type: "backhair" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/backhair/backhair3.png", alt: "backhair3", type: "backhair" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/backhair/backhair4.png", alt: "backhair4", type: "backhair" })
  ] });
};

const Hair = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap w-auto justify-center", children: [
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/hair/hair1.png", alt: "hair1", type: "hair" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/hair/hair2.png", alt: "hair2", type: "hair" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/hair/hair3.png", alt: "hair3", type: "hair" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/hair/hair4.png", alt: "hair4", type: "hair" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/hair/hair5.png", alt: "hair5", type: "hair" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/hair/hair6.png", alt: "hair6", type: "hair" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/hair/hair7.png", alt: "hair7", type: "hair" })
  ] });
};

const Eye = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap w-auto justify-center", children: [
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/eye/eye1.png", alt: "eye1", type: "eye" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/eye/eye2.png", alt: "eye2", type: "eye" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/eye/eye3.png", alt: "eye3", type: "eye" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/eye/eye4.png", alt: "eye4", type: "eye" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/eye/eye5.png", alt: "eye5", type: "eye" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/eye/eye6.png", alt: "eye6", type: "eye" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/eye/eye7.png", alt: "eye7", type: "eye" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/eye/eye8.png", alt: "eye8", type: "eye" })
  ] });
};

const Glasses = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap w-auto justify-center", children: [
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/glasses/glasses1.png", alt: "glasses1", type: "glasses" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/glasses/glasses2.png", alt: "glasses2", type: "glasses" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/glasses/glasses3.png", alt: "glasses3", type: "glasses" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/glasses/glasses4.png", alt: "glasses4", type: "glasses" })
  ] });
};

const Mounth = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap w-auto justify-center", children: [
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/mounth/mounth1.png", alt: "mounth1", type: "mounth" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/mounth/mounth2.png", alt: "mounth2", type: "mounth" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/mounth/mounth3.png", alt: "mounth3", type: "mounth" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/mounth/mounth4.png", alt: "mounth4", type: "mounth" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/mounth/mounth5.png", alt: "mounth5", type: "mounth" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/mounth/mounth6.png", alt: "mounth6", type: "mounth" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/mounth/mounth7.png", alt: "mounth7", type: "mounth" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/mounth/mounth8.png", alt: "mounth8", type: "mounth" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/mounth/mounth9.png", alt: "mounth9", type: "mounth" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/mounth/mounth10.png", alt: "mounth10", type: "mounth" })
  ] });
};

const Clothes = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap w-auto justify-center", children: [
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/clothes/clothes1.png", alt: "clothes1", type: "clothes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/clothes/clothes2.png", alt: "clothes2", type: "clothes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/clothes/clothes3.png", alt: "clothes3", type: "clothes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/clothes/clothes4.png", alt: "clothes4", type: "clothes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/clothes/clothes5.png", alt: "clothes5", type: "clothes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/clothes/clothes6.png", alt: "clothes6", type: "clothes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/clothes/clothes7.png", alt: "clothes7", type: "clothes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/clothes/clothes8.png", alt: "clothes8", type: "clothes" })
  ] });
};

const Pants = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap w-auto justify-center", children: [
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/pants/pants1.png", alt: "pants1", type: "pants" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/pants/pants2.png", alt: "pants2", type: "pants" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/pants/pants3.png", alt: "pants3", type: "pants" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/pants/pants4.png", alt: "pants4", type: "pants" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/pants/pants5.png", alt: "pants5", type: "pants" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/pants/pants6.png", alt: "pants6", type: "pants" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/pants/pants7.png", alt: "pants7", type: "pants" })
  ] });
};

const Chop = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap w-auto justify-center", children: [
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop1.png", alt: "chop1", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop2.png", alt: "chop2", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop3.png", alt: "chop3", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop4.png", alt: "chop4", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop5.png", alt: "chop5", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop6.png", alt: "chop6", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop7.png", alt: "chop7", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop8.png", alt: "chop8", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop9.png", alt: "chop9", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop10.png", alt: "chop10", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop11.png", alt: "chop11", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop12.png", alt: "chop12", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop13.png", alt: "chop13", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop14.png", alt: "chop14", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop15.png", alt: "chop15", type: "chop" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/chop/chop16.png", alt: "chop16", type: "chop" })
  ] });
};

const Shoes = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap w-auto justify-center", children: [
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/shoes/shoes1.png", alt: "shoes1", type: "shoes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/shoes/shoes2.png", alt: "shoes2", type: "shoes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/shoes/shoes3.png", alt: "shoes3", type: "shoes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/shoes/shoes4.png", alt: "shoes4", type: "shoes" }),
    /* @__PURE__ */ jsx(ImageCustom, { src: "/assets/shoes/shoes5.png", alt: "shoes5", type: "shoes" })
  ] });
};

const Page = () => {
  const $pageName = useStore(pageName) || "Body";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    $pageName === "Body" ? /* @__PURE__ */ jsx(Body, {}) : null,
    $pageName === "Hair" ? /* @__PURE__ */ jsx(Hair, {}) : null,
    $pageName === "BackHair" ? /* @__PURE__ */ jsx(BackHair, {}) : null,
    $pageName === "Eye" ? /* @__PURE__ */ jsx(Eye, {}) : null,
    $pageName === "Glasses" ? /* @__PURE__ */ jsx(Glasses, {}) : null,
    $pageName === "Mounth" ? /* @__PURE__ */ jsx(Mounth, {}) : null,
    $pageName === "Clothes" ? /* @__PURE__ */ jsx(Clothes, {}) : null,
    $pageName === "Pants" ? /* @__PURE__ */ jsx(Pants, {}) : null,
    $pageName === "Chop" ? /* @__PURE__ */ jsx(Chop, {}) : null,
    $pageName === "Shoes" ? /* @__PURE__ */ jsx(Shoes, {}) : null
  ] });
};

function TwemojiBoyLightSkinTone(props) {
  const { isSelected, ...rest } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 36,
      viewBox: "0 0 36 36",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: isSelected ? "white" : "#ff6b84",
            d: "M6 20c0 2.209-1.119 4-2.5 4S1 22.209 1 20s1.119-4 2.5-4S6 17.791 6 20m29 0c0 2.209-1.119 4-2.5 4S30 22.209 30 20s1.119-4 2.5-4s2.5 1.791 2.5 4"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: isSelected ? "white" : "#ff6b84",
            d: "M4 20.562c0-8.526 6.268-15.438 14-15.438s14 6.912 14 15.438S25.732 35 18 35S4 29.088 4 20.562"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: isSelected ? "#ff6b84" : "white",
            d: "M12 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1m12 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: isSelected ? "#ff6b84" : "white",
            d: "M18 30c-4.188 0-6.357-1.06-6.447-1.105a1 1 0 0 1 .89-1.791c.051.024 1.925.896 5.557.896c3.665 0 5.54-.888 5.559-.897a1.003 1.003 0 0 1 1.336.457a.997.997 0 0 1-.447 1.335C24.356 28.94 22.188 30 18 30m1-5h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: isSelected ? "white" : "#ff6b84",
            d: "M18 .354C8.77.354 3 6.816 3 12.2c0 5.385 1.154 7.539 2.308 5.385l2.308-4.308s3.791-.124 6.099-2.278c0 0-1.071 4 6.594.124c0 0-.166 3.876 5.191-.124c0 0 4.039 1.201 5.191 6.586c.32 1.494 2.309 0 2.309-5.385C33 6.816 28.385.354 18 .354"
          }
        )
      ]
    }
  );
}

function MdiEye(props) {
  const { isSelected, ...rest } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 36,
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: isSelected ? "white" : "#ff6b84",
          d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
        }
      )
    }
  );
}

function MingcuteHair2Fill(props) {
  const { isSelected, ...rest } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 36,
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs("g", { fill: "none", children: [
        /* @__PURE__ */ jsx("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: isSelected ? "white" : "#ff6b84",
            d: "M18.8 6.4c-1.884-2.512-4.28-3.9-6.8-3.9c-2.52 0-4.916 1.388-6.8 3.9c-1.417 1.889-3.126 4.44-3.362 7.124c-.121 1.384.147 2.801 1.019 4.15c.861 1.332 2.268 2.531 4.315 3.58c1.259.645 2.63-.22 2.809-1.483a6.48 6.48 0 0 1-1.162-1.001c-1.013-1.105-1.82-2.723-1.82-4.77c0-3.428 1.77-5.735 3.9-6.344c.282-.08.6.132.634.424a5 5 0 0 0 4.917 4.42c.674.006.55 1.06.55 1.5c0 2.047-.806 3.665-1.82 4.77c-.362.396-.76.734-1.164 1.003c.16 1.268 1.518 2.14 2.778 1.531c2.165-1.044 3.643-2.243 4.538-3.585c.907-1.362 1.163-2.797 1.007-4.194c-.3-2.69-2.138-5.257-3.54-7.125Z"
          }
        )
      ] })
    }
  );
}

function IconParkOutlineHairBrush(props) {
  const { isSelected, ...rest } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 36,
      viewBox: "0 0 48 48",
      ...props,
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          fill: "none",
          stroke: isSelected ? "white" : "#ff6b84",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 4,
          children: [
            /* @__PURE__ */ jsx("path", { d: "M18.197 31.424c3.124 3.124 10.722.592 16.97-5.657c6.249-6.248 8.781-13.846 5.657-16.97M27.389 6.675l1.414 1.415m-6.363 3.535l1.414 1.414m-5.658 4.243l1.414 1.414m-2.828 5.657l1.414 1.414M35.167 4.554l1.414 1.414m-2.828 7.072l2.828 2.828m-7.777 2.122l2.828 2.828m-8.485 1.414l2.828 2.828" }),
            /* @__PURE__ */ jsx(
              "rect",
              {
                width: 6,
                height: 14,
                x: 16.075,
                y: 29.303,
                rx: 3,
                transform: "rotate(45 16.075 29.303)"
              }
            )
          ]
        }
      )
    }
  );
}

function StreamlineMouthLipSolid(props) {
  const { isSelected, ...rest } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 36,
      viewBox: "0 0 14 14",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: isSelected ? "white" : "#ff6b84",
          fillRule: "evenodd",
          d: "M13.722 6.865a6.738 6.738 0 0 0-.198-.442a5.952 5.952 0 0 0-1.168-1.639c-.564-.546-1.33-1.02-2.324-1.143c-.896-.112-1.905.07-3.032.633c-1.127-.563-2.137-.745-3.033-.633c-.993.123-1.76.597-2.324 1.143a5.954 5.954 0 0 0-1.167 1.64a6.748 6.748 0 0 0-.198.441zM.334 8.115A7.928 7.928 0 0 0 1.76 9.837C2.855 10.83 4.566 11.82 7 11.82s4.145-.99 5.239-1.982a7.924 7.924 0 0 0 1.426-1.722H.335Z",
          clipRule: "evenodd"
        }
      )
    }
  );
}

function TablerShirtFilled(props) {
  const { isSelected, ...rest } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 36,
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          children: [
            /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                fill: isSelected ? "white" : "#ff6b84",
                d: "M14.883 3.007L14.978 3l.112.004l.113.017l.113.03l6 2a1 1 0 0 1 .677.833L22 6v5a1 1 0 0 1-.883.993L21 12h-2v7a2 2 0 0 1-1.85 1.995L17 21H7a2 2 0 0 1-1.995-1.85L5 19v-7H3a1 1 0 0 1-.993-.883L2 11V6a1 1 0 0 1 .576-.906l.108-.043l6-2A1 1 0 0 1 10 4a2 2 0 0 0 3.995.15l.009-.24l.017-.113l.037-.134l.044-.103l.05-.092l.068-.093l.069-.08c.056-.054.113-.1.175-.14l.096-.053l.103-.044l.108-.032l.112-.02z"
              }
            )
          ]
        }
      )
    }
  );
}

function PhPantsFill(props) {
  const { isSelected, ...rest } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 36,
      viewBox: "0 0 256 256",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: isSelected ? "white" : "#ff6b84",
          d: "m53.44 43.5l.68-5.5A16 16 0 0 1 70 24h116a16 16 0 0 1 15.88 14l.68 5.49a4 4 0 0 1-4 4.5H57.41a4 4 0 0 1-3.97-4.49M169 64a32.06 32.06 0 0 0 31 24h3.59a4 4 0 0 0 4-4.5l-2-16a4 4 0 0 0-4-3.5ZM52.41 88H56a32.06 32.06 0 0 0 31-24H54.41a4 4 0 0 0-4 3.5l-2 16a4 4 0 0 0 4 4.5m171.47 126l-13.32-106.5a4 4 0 0 0-4-3.5H200a48.07 48.07 0 0 1-47.32-40H136v39.73a8.18 8.18 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V64h-16.68A48.07 48.07 0 0 1 56 104h-6.59a4 4 0 0 0-4 3.5L32.12 214a16 16 0 0 0 6.71 15.09a16.56 16.56 0 0 0 9.56 2.91h40.3a16 16 0 0 0 15.51-12.06l23.8-92l23.79 91.94A16 16 0 0 0 167.31 232h40.3a16.54 16.54 0 0 0 9.56-2.89a16 16 0 0 0 6.71-15.11"
        }
      )
    }
  );
}

function MingcuteCoatFill(props) {
  const { isSelected, ...rest } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 36,
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ jsx("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: isSelected ? "white" : "#ff6b84",
            d: "M13.528 3a3 3 0 0 1 1.342.317l2.03 1.016a5 5 0 0 1 2.553 3.035l2.262 7.539a2 2 0 0 1-1.021 2.364l-1.012.505a1 1 0 0 1-1.192-.227L18 17l-.268 1.752A3.002 3.002 0 0 1 14.826 21H9.174a3.002 3.002 0 0 1-2.906-2.248L6 17l-.49.549a1 1 0 0 1-1.193.227l-1.012-.505a2 2 0 0 1-1.021-2.364l2.262-7.539a5 5 0 0 1 2.553-3.035L9.13 3.317A3 3 0 0 1 10.472 3zm0 2h-3.056a1 1 0 0 0-.34.06l-.107.046l-.96.48L12 10.15l2.935-4.566l-.96-.48a1 1 0 0 0-.331-.098z"
          }
        )
      ] })
    }
  );
}

function MingcuteShoeFill(props) {
  const { isSelected, ...rest } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 36,
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs("g", { fill: "none", children: [
        /* @__PURE__ */ jsx("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: isSelected ? "white" : "#ff6b84",
            d: "M18.026 3.902a1 1 0 0 0-.717-.489c-.41 0-.853.324-1.327.673c-.117.086-.236.173-.357.258c-.542.377-1.164.72-1.696.828c-.83.17-1.783-.069-2.547-.41c-.87-.401-1.373.522-1.762 1.236c-.073.133-.142.26-.208.369c-.29.473-.655 1.037-1.07 1.606a1 1 0 0 0-1.04 1.313c-.308.378-.6.74-.877 1.087A1 1 0 0 0 5.29 11.84c-1.072 1.433-1.81 2.598-2.236 3.635c-.36.88-.514 1.703-.447 2.542c.067.827.342 1.597.727 2.376c.522 1.055 1.802 1.344 2.739.803l14.722-8.5a2 2 0 0 0 .732-2.732l-.5-.866l-6.062 3.5a1 1 0 0 1-1-1.732l6.062-3.5z"
          }
        )
      ] })
    }
  );
}

function EmojioneMonotoneTopHat(props) {
  const { isSelected, ...rest } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 36,
      viewBox: "0 0 64 64",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: isSelected ? "white" : "#ff6b84",
          d: "M61.338 41.881c-1.663-3.873-5.663-4.015-11.069-3.241c.041-9.028 1.562-17.65 4.452-27.072c1.344-3.374-8.67-9.501-22.72-9.567c-14.05.066-24.065 6.192-22.721 9.566c2.873 9.365 4.384 18.047 4.438 27.07c-5.399-.771-9.394-.627-11.057 3.243C-.961 49.077 10.487 62 32 62c21.514 0 32.961-12.923 29.338-20.119m-48.856 5.962s1.357-4.745 1.14-7.254c11.804 10.624 24.954 10.624 36.757 0c.045 2.56 1.139 7.254 1.139 7.254c-11.62 11.057-27.415 11.057-39.036 0"
        }
      )
    }
  );
}

const Navbar = () => {
  const Menus = [
    { id: 0, name: "Body", dis: "translate-x-0" },
    { id: 1, name: "Eye", dis: "translate-x-32" },
    { id: 2, name: "Hair", dis: "translate-x-32" },
    { id: 3, name: "BackHair", dis: "translate-x-32" },
    { id: 4, name: "Mounth", dis: "translate-x-32" },
    { id: 5, name: "Clothes", dis: "translate-x-32" },
    { id: 6, name: "Pants", dis: "translate-x-32" },
    { id: 7, name: "Chop", dis: "translate-x-32" },
    { id: 8, name: "Shoes", dis: "translate-x-32" },
    { id: 9, name: "Glasses", dis: "translate-x-64" }
  ];
  const [active, setActive] = useState(0);
  const [after, setAfer] = useState("");
  const [before, setBefore] = useState("");
  const [id, setId] = useState(0);
  useStore(pageName);
  useEffect(() => {
    if (active === 9) {
      setAfer("");
      setId(2);
    } else if (active >= 1) {
      setAfer(
        "after:absolute after:top-[47%] after:-right-[23px] after:w-[24px] after:h-[24px] after:bg-transparent after:rounded-tl-full after:shadow-shadow1"
      );
      setId(1);
    } else {
      setAfer("");
      setBefore(
        "before:absolute before:top-[47%] before:-left-[23px] before:w-[24px] before:h-[24px] before:bg-transparent before:rounded-tr-full before:shadow-shadow1"
      );
      setId(0);
    }
  }, [active]);
  const getItemRender = () => {
    if (active === Menus.length - 1) {
      return [Menus[active - 2], Menus[active - 1], Menus[active]];
    } else if (active >= 2) {
      return [Menus[active - 1], Menus[active], Menus[active + 1]];
    } else if (active === 1) {
      return Menus.slice(active - 1, active + 2);
    } else {
      return Menus.slice(active, active + 3);
    }
  };
  const getIcon = (name, isSelected) => {
    switch (name) {
      case "Body":
        return /* @__PURE__ */ jsx(TwemojiBoyLightSkinTone, { isSelected: false });
      case "Eye":
        return /* @__PURE__ */ jsx(MdiEye, { isSelected: false });
      case "Hair":
        return /* @__PURE__ */ jsx(MingcuteHair2Fill, { isSelected: false });
      case "BackHair":
        return /* @__PURE__ */ jsx(IconParkOutlineHairBrush, { isSelected: false });
      case "Mounth":
        return /* @__PURE__ */ jsx(StreamlineMouthLipSolid, { isSelected: false });
      case "Clothes":
        return /* @__PURE__ */ jsx(TablerShirtFilled, { isSelected: false });
      case "Pants":
        return /* @__PURE__ */ jsx(PhPantsFill, { isSelected: false });
      case "Chop":
        return /* @__PURE__ */ jsx(MingcuteCoatFill, { isSelected: false });
      case "Shoes":
        return /* @__PURE__ */ jsx(MingcuteShoeFill, { isSelected: false });
      case "Glasses":
        return /* @__PURE__ */ jsx(EmojioneMonotoneTopHat, { isSelected: false });
      default:
        return;
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-white max-h-[4.4rem] px-6 rounded-t-xl ", children: /* @__PURE__ */ jsxs("ul", { className: "flex static justify-between", children: [
    /* @__PURE__ */ jsxs(
      "span",
      {
        className: `bg-transparent${getItemRender()[id].dis} border-4  h-[67px] w-[67px] absolute border-web-bg
         -top-[32px] rounded-full ${before} ${after}

         `,
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] \n          rounded-tr-[11px]"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] \n          rounded-tl-[11px]"
            }
          )
        ]
      }
    ),
    getItemRender().map((menu, i) => /* @__PURE__ */ jsx("li", { className: "w-16 flex justify-center items-start", children: /* @__PURE__ */ jsx(
      "a",
      {
        className: "flex flex-col text-center pt-3",
        onClick: () => {
          setActive(menu.id);
          pageName.set(menu.name);
        },
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `z-10 w-[36px] h-[36px] text-xl cursor-pointer duration-500 ${menu.id === active && "-mt-6 text-white"}`,
            children: getIcon(menu.name, menu.id === active)
          }
        )
      }
    ) }, i))
  ] }) });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://main--vlvu2024-me.netlify.app/");
const prerender = false;
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
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
  async function submit() {
    const datas = localStorage.getItem('chars');
    const user_name = getCookie("id");
    const jsonChar = JSON.parse(datas);

    const body = jsonChar.body;
    const eye = jsonChar.eye;
    const hair = jsonChar.hair;
    const backhair = jsonChar.back_hair;
    const pants = jsonChar.pants;
    const clothes = jsonChar.clothes;
    const chop = jsonChar.chop;
    const shoes = jsonChar.shoes;
    const glasses = jsonChar.glasses;
    const mounth = jsonChar.mounth;

    const data = new FormData();
    data.append('user_name', user_name);
    data.append("body", body);
    data.append("eye", eye);
    data.append("hair", hair);
    data.append("back_hair", backhair);
    data.append("pants", pants);
    data.append('clothes', clothes);
    data.append('chop', chop);
    data.append('shoes', shoes);
    data.append('glasses', glasses);
    data.append('mounth', mounth);

    const response = await fetch("/api/characters", {
      method: "POST",
      mode: "no-cors",
      body: data,
    });
    const res = await response.json();
  }
<\/script>`])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-96 w-full flex-col items-stretch max-w-screen-mobile mx-auto pt-12 bg-web-bg"> <div class="flex justify-end"> <a href="/main" onclick="submit()" class="bg-white text-center mr-6 w-[94px] h-8 font-line text-md font-bold rounded-2xl flex items-center justify-center">Submit</a> </div> <div class="flex justify-center"> ${renderComponent($$result2, "Avatar", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/components/Avatar", "client:component-export": "default" })} </div> <div class="bg-white h-full justify-center items-center"> <div class="justify-center items-cent"> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/components/Navbar", "client:component-export": "default" })} </div> ${renderComponent($$result2, "Custom", Page, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/components/Custom", "client:component-export": "default" })} </div> </div> ` }));
}, "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/profile.astro", void 0);

const $$file = "/home/bunyawat/Documents/my-dev/vlvu2024-website-me/src/pages/profile.astro";
const $$url = "/profile";

export { $$Profile as default, $$file as file, prerender, $$url as url };
