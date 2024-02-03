import ImageCustom from "../ImageCustom";

const Shoes = () => {
  return (
    <div className="flex flex-row flex-wrap w-auto justify-center">
      <ImageCustom src="/assets/shoes/shoes1.png" alt="shoes1" type="shoes" />
      <ImageCustom src="/assets/shoes/shoes2.png" alt="shoes2" type="shoes" />
      <ImageCustom src="/assets/shoes/shoes3.png" alt="shoes3" type="shoes" />
      <ImageCustom src="/assets/shoes/shoes4.png" alt="shoes4" type="shoes" />
      <ImageCustom src="/assets/shoes/shoes5.png" alt="shoes5" type="shoes" />
    </div>
  );
};

export default Shoes;
