import { atom } from "nanostores";

export const pageName = atom("Body");
export const body = atom("body1");
export const backhair = atom("");
export const chop = atom("");
export const clothes = atom("");
export const eye = atom("");
export const glasses = atom("");
export const hair = atom("");
export const mounth = atom("");
export const pants = atom("");
export const shoes = atom("");

export const menu = atom([
  { name: "Body", icon: "home-outline", dis: "translate-x-0" },
  { name: "Hair", icon: "person-outline", dis: "translate-x-36" },
  { name: "BackHair", icon: "chatbubble-outline", dis: "translate-x-72" },
]);
