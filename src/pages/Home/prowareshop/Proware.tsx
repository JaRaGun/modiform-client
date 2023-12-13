import Navbar from "../../../components/navbar/Navbar";
import ProwareItem from "../../../components/Cards/ProwareItem";
import images from "../../../themes/images";

const Proware = () => {
  const products = [
    {
      uniPicture: images.BSITUNIFORM,
      uniName: "BSIT UNIFORM",
    },
    {
      uniPicture: images.BSITPANTS,
      uniName: "Product 2",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="py-5 lg:py-20 flex flex-wrap justify-around items-center text-center">
        <h1 className="w-full font-bold text-4xl">
          INFORMATION TECHNOLOGY UNIFROM
        </h1>
        {products.map((product, index) => (
          <ProwareItem
            key={index}
            uniPicture={product.uniPicture}
            uniName={product.uniName}
          />
        ))}
      </div>

      <div className="py-5 lg:py-20 flex flex-wrap justify-around">
        <h1>TOURISM</h1>
        {products.map((product, index) => (
          <ProwareItem
            key={index}
            uniPicture={product.uniPicture}
            uniName={product.uniName}
          />
        ))}
      </div>
    </div>
  );
};

export default Proware;
