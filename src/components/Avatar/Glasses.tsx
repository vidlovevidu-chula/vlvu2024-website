import ImageCustom from "../ImageCustom";

const Glasses = () => {
  return (
    <div className="flex flex-row flex-wrap w-auto justify-center">
        <ImageCustom src="/assets/glasses/glasses1.png" alt="glasses1" type="glasses"/>
        <ImageCustom src="/assets/glasses/glasses2.png" alt="glasses2" type="glasses"/>
        <ImageCustom src="/assets/glasses/glasses3.png" alt="glasses3" type="glasses"/>
        <ImageCustom src="/assets/glasses/glasses4.png" alt="glasses4" type="glasses"/>
    </div>
  );
};

export default Glasses;
