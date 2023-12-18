import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import ProwareCart from "../../../components/Cards/ProwareCart";
import { Select, Option } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import ProwareCarousel from "../../../components/Carousels/ProwareCarousel";
import { GenderButtons } from "./genderbuttons/GenderButtons";
import { GetCollectionDataFirebase } from "../../../firebase/hooks";

const Proware: React.FC = () => {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState(""); //State to track the selected year
  const YearCategory = ["college", "high school", "others"]; // Selection for College, High School, Others

  const [selectedSize, setSelectedSize] = useState("");
  const SizeCategory = [
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL",
    "None",
  ]; // Selection for College, High School, Others

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const sizeCat = params.get("sizeCat");

    if (category && sizeCat) {
      setSelectedCategory(category);
      setSelectedSize(sizeCat);
    }
  }, [location.search]);

  const handleCategoryChange = (value: string | undefined) => {
    if (value) {
      setSelectedCategory(value);
    }
  };

  const handleSizeCategoryChange = (value: string | undefined) => {
    if (value) {
      setSelectedSize(value);
    }
  };

  // FOR BUTTONS
  const [selectedGender, setSelectedGender] = useState<string>("");
  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const COLLECTIONNAME = "uniforms";

  const UniformData = GetCollectionDataFirebase(
    COLLECTIONNAME,
    selectedGender,
    selectedSize,
    selectedCategory
  );

  // console.log(UniformData);
  return (
    <div>
      <Navbar />
      <ProwareCarousel />
      <GenderButtons
        onGenderSelect={handleGenderSelect}
        selectedGender={selectedGender}
      />

      <div className="mb-10 px-10">
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-start md:space-x-5 w-full md:w-auto">
          <Select
            label="Year Category"
            placeholder={undefined}
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e as string)}
          >
            {YearCategory.map((category, index) => (
              <Option key={index} value={category}>
                {category}
              </Option>
            ))}
          </Select>

          <Select
            label="Size Category"
            placeholder={undefined}
            value={selectedSize}
            onChange={(e) => handleSizeCategoryChange(e as string)}
          >
            {SizeCategory.map((sizeCat, index) => (
              <Option key={index} value={sizeCat}>
                {sizeCat}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {UniformData.map((item: any) => (
          <div className="px-5 py-8" key={item.id}>
            <ProwareCart
              id={item.id}
              uniCategory={item.category}
              uniStocks={item.stocks}
              uniPicture={item.image}
              uniName={item.description}
              uniPrice={item.price}
              uniSize={item.size}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proware;
