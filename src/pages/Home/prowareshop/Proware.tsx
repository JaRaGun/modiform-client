import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import ProwareCart from "../../../components/Cards/ProwareCart";
import { Select, Option } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import ProwareCarousel from "../../../components/Carousels/ProwareCarousel";
import { GenderButtons } from "./genderbuttons/GenderButtons";
import {
  bsitSmallItems,
  bsitMediumItems,
  tourismSmallItems,
  tourismMediumlItems,
} from "./ProwareSize";

const Proware: React.FC = () => {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState(""); //State to track the selected year
  const YearCategory = ["COLLEGE", "HIGH SCHOOL", "OTHERS"]; // Selection for College, High School, Others

  const [selectedSize, setSelectedSize] = useState("");
  const SizeCategory = ["SMALL", "MEDIUM", "LARGE"]; // Selection for College, High School, Others

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

      {/* Modify rendering based on the selected category */}
      {selectedSize === "SMALL" && (
        <>
          {selectedCategory === "COLLEGE" && (
            <>
              <div className="flex flex-wrap justify-center items-center">
                <h1 className="px-10 w-full font-bold text-lg sm:text-2xl lg:text-4xl">
                  INFORMATION & COMMUNICATION TECHNOLOGY
                </h1>
                {bsitSmallItems.map((uniform) => {
                  // Check if uniGender exists or matches selectedGender
                  if (
                    !uniform.uniGender ||
                    selectedGender === "" ||
                    uniform.uniGender === selectedGender
                  ) {
                    return (
                      <ProwareCart
                        key={uniform.id}
                        id={uniform.id}
                        uniPicture={uniform.uniPicture}
                        uniName={uniform.uniName}
                        uniPrice={uniform.uniPrice}
                        uniSize={uniform.uniSize}
                      />
                    );
                  }
                  return null;
                })}
              </div>

              <div className="flex flex-wrap justify-center items-center">
                <h1 className="text-start px-10 w-full font-bold text-lg sm:text-2xl lg:text-4xl">
                  TOURISM
                </h1>
                {tourismSmallItems.map((uniform) => {
                  // Check if uniGender exists or matches selectedGender
                  if (
                    !uniform.uniGender ||
                    selectedGender === "" ||
                    uniform.uniGender === selectedGender
                  ) {
                    return (
                      <ProwareCart
                        key={uniform.id}
                        id={uniform.id}
                        uniPicture={uniform.uniPicture}
                        uniName={uniform.uniName}
                        uniPrice={uniform.uniPrice}
                        uniSize={uniform.uniSize}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </>
          )}

          {selectedCategory === "HIGH SCHOOL" && (
            <>
              {/* High School related rendering */}
              {/* Make it blank as per your request */}
            </>
          )}

          {selectedCategory === "OTHER" && (
            <>
              {/* Other related rendering */}
              {/* Make it blank as per your request */}
            </>
          )}
        </>
      )}

      {selectedSize === "MEDIUM" && (
        <>
          {selectedCategory === "COLLEGE" && (
            <>
              <div className="flex flex-wrap justify-center items-center">
                <h1 className="px-10 w-full font-bold text-lg sm:text-2xl lg:text-4xl">
                  INFORMATION & COMMUNICATION TECHNOLOGY
                </h1>
                {bsitMediumItems.map((uniform) => {
                  // Check if uniGender exists or matches selectedGender
                  if (
                    !uniform.uniGender ||
                    selectedGender === "" ||
                    uniform.uniGender === selectedGender
                  ) {
                    return (
                      <ProwareCart
                        key={uniform.id}
                        id={uniform.id}
                        uniPicture={uniform.uniPicture}
                        uniName={uniform.uniName}
                        uniPrice={uniform.uniPrice}
                        uniSize={uniform.uniSize}
                      />
                    );
                  }
                  return null;
                })}
              </div>

              <div className="flex flex-wrap justify-center items-center">
                <h1 className="text-start px-10 w-full font-bold text-lg sm:text-2xl lg:text-4xl">
                  TOURISM
                </h1>
                {tourismMediumlItems.map((uniform) => {
                  // Check if uniGender exists or matches selectedGender
                  if (
                    !uniform.uniGender ||
                    selectedGender === "" ||
                    uniform.uniGender === selectedGender
                  ) {
                    return (
                      <ProwareCart
                        key={uniform.id}
                        id={uniform.id}
                        uniPicture={uniform.uniPicture}
                        uniName={uniform.uniName}
                        uniPrice={uniform.uniPrice}
                        uniSize={uniform.uniSize}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </>
          )}

          {selectedCategory === "HIGH SCHOOL" && (
            <>
              {/* High School related rendering */}
              {/* Make it blank as per your request */}
            </>
          )}

          {selectedCategory === "OTHER" && (
            <>
              {/* Other related rendering */}
              {/* Make it blank as per your request */}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Proware;
