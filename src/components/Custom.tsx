import { useStore } from "@nanostores/react";
import { pageName } from "../store";
import Body from "./Avatar/Body";
import BackHair from "./Avatar/BackHair";
import Hair from "./Avatar/Hair";
import Eye from "./Avatar/Eye";
import Glasses from "./Avatar/Glasses";
import Mounth from "./Avatar/Mounth";
import Clothes from "./Avatar/Clothes";
import Pants from "./Avatar/Pants";
import Chop from "./Avatar/Chop";
import Shoes from "./Avatar/Shoes";

const Page = () => {
  const $pageName = useStore(pageName) || "Body";

  return (
    <>
      {$pageName === "Body" ? <Body/>: null}
      {$pageName === "Hair" ? <Hair/> : null}
      {$pageName === "BackHair" ? <BackHair/> : null}
      {$pageName === "Eye" ? <Eye/> : null}
      {$pageName === "Glasses" ? <Glasses/> : null}
      {$pageName === "Mounth" ? <Mounth/> : null}
      {$pageName === "Clothes" ? <Clothes/> : null}
      {$pageName === "Pants" ? <Pants/> : null}
      {$pageName === "Chop" ? <Chop/> : null}
      {$pageName === "Shoes" ? <Shoes/> : null}

    </>
  );
};

export default Page;
