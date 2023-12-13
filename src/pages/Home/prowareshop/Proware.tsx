import Navbar from "../../../components/navbar/Navbar";
import ProwareItem from "../../../components/Cards/ProwareItem";
import images from "../../../themes/images";

const Proware = () => {
  const products = [
    {
      id: 1,
      uniPicture: images.BSITUNIFORM,
      uniName: "IT POLO",
    },
    {
      id: 2,
      uniPicture: images.BSITPANTS,
      uniName: "IT PANTS",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="py-5 lg:py-20 flex flex-wrap justify-around items-center text-center">
        <h1 className="w-full font-bold text-4xl">
          INFORMATION & COMMUNICATION TECHNOLOGY
        </h1>
        {products.map((Uniformodi) => (
          <ProwareItem
            key={Uniformodi.id}
            uniPicture={Uniformodi.uniPicture}
            uniName={Uniformodi.uniName}
          />
        ))}
      </div>
    </div>
  );
};

export default Proware;
