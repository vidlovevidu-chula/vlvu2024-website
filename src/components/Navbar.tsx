import { useStore } from "@nanostores/react";
import { useState, useEffect } from "react";
import { pageName } from "../store";
import { TwemojiBoyLightSkinTone } from "./Icon/TwemojiBoyLightSkinTone";
import { MdiEye } from "./Icon/Eye";
import { MingcuteHair2Fill } from "./Icon/CuteHair";
import { IconParkOutlineHairBrush } from "./Icon/BrushHair";
import { StreamlineMouthLipSolid } from "./Icon/Lip";
import { TablerShirtFilled } from "./Icon/Shirt";
import { PhPantsFill } from "./Icon/Pants";
import { MingcuteCoatFill } from "./Icon/Chop";
import { MingcuteShoeFill } from "./Icon/Shoe";
import { EmojioneMonotoneTopHat } from "./Icon/Glasses";

const Navbar = () => {
  const Menus = [
    { id: 0, name: "Body", dis: "translate-x-0" },
    { id: 1, name: "Eye", dis: "translate-x-36" },
    { id: 2, name: "Hair", dis: "translate-x-36" },
    { id: 3, name: "BackHair", dis: "translate-x-36" },
    { id: 4, name: "Mounth", dis: "translate-x-36" },
    { id: 5, name: "Clothes", dis: "translate-x-36" },
    { id: 6, name: "Pants", dis: "translate-x-36" },
    { id: 7, name: "Chop", dis: "translate-x-36" },
    { id: 8, name: "Shoes", dis: "translate-x-36" },
    { id: 9, name: "Glasses", dis: "translate-x-72" },
  ];

  const [active, setActive] = useState(0);
  const [after, setAfer] = useState("");
  const [before, setBefore] = useState("");
  const [id, setId] = useState(0);
  const $pageName = useStore(pageName);

  useEffect(() => {
    // Update the 'id' state within the 'useEffect' hook
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

  const getIcon = (name: string, isSelected: boolean) => {
    switch (name) {
      case "Body":
        return <TwemojiBoyLightSkinTone isSelected={isSelected} />;
      case "Eye":
        return <MdiEye isSelected={isSelected} />;
      case "Hair":
        return <MingcuteHair2Fill isSelected={isSelected} />;
      case "BackHair":
        return <IconParkOutlineHairBrush isSelected={isSelected} />;
      case "Mounth":
        return <StreamlineMouthLipSolid isSelected={isSelected} />;
      case "Clothes":
        return <TablerShirtFilled isSelected={isSelected} />;
      case "Pants":
        return <PhPantsFill isSelected={isSelected} />;
      case "Chop":
        return <MingcuteCoatFill isSelected={isSelected} />;
      case "Shoes":
        return <MingcuteShoeFill isSelected={isSelected} />;
      case "Glasses":
        return <EmojioneMonotoneTopHat isSelected={isSelected} />;
      default:
        return;
    }
  };

  return (
    <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl ">
      <ul className="flex relative justify-between ml-10 mr-10">
        <span
          className={`bg-gradient-to-r from-pink to-web-bg z-0 duration-500 ${
            getItemRender()[id].dis
          } border-4  h-[67px] w-[67px] absolute border-web-bg
         -top-[32px] rounded-full ${before} ${after}

         `}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px]"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px]"
          ></span>
        </span>
        {getItemRender().map((menu, i) => (
          <li key={i} className="w-16 flex justify-center items-start">
            <a
              className="flex flex-col text-center pt-3"
              onClick={() => {
                setActive(menu.id);
                pageName.set(menu.name);
              }}
            >
              <span
                className={`z-10 w-[36px] h-[36px] text-xl cursor-pointer duration-500 ${
                  menu.id === active && "-mt-6 text-white"
                }`}
              >
                {getIcon(menu.name, menu.id === active)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
