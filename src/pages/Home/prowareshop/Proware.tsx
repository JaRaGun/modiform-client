import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import SmallProwareItem from "../../../components/Cards/SmallProwareItem";
import { Select, Option } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import ProwareCarousel from "../../../components/Carousels/ProwareCarousel";
import { GenderButtons } from "./genderbuttons/GenderButtons";

interface Product {
  id: number;
  uniPicture: string;
  uniName: string;
  uniGender?: string; // Make uniGender optional
  uniPrice: number;
  uniSize: string;
}

// IT
const bsitSmallItems: Product[] = [
  {
    id: 1,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITUNIF.jpg?alt=media&token=147b9262-7618-45e9-8933-426653120a17",
    uniName: "IT POLO",
    uniGender: "MENS", // Provide uniGender for items
    uniPrice: 100.0,
    uniSize: "SMALL",
  },

  {
    id: 2,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITPANTS.png?alt=media&token=98109abd-7b81-461d-afd2-d26576242c78",
    uniName: "IT PANTS",
    uniGender: "MENS",
    uniPrice: 120.0,
    uniSize: "SMALL",
  },
  // Add other products with or without uniGender
];

// IT
const bsitMediumItems: Product[] = [
  {
    id: 1,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITUNIF.jpg?alt=media&token=147b9262-7618-45e9-8933-426653120a17",
    uniName: "IT POLO",
    uniGender: "MENS", // Provide uniGender for items
    uniPrice: 100.0,
    uniSize: "MEDIUM",
  },

  {
    id: 2,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITPANTS.png?alt=media&token=98109abd-7b81-461d-afd2-d26576242c78",
    uniName: "IT PANTS",
    uniGender: "MENS",
    uniPrice: 120.0,
    uniSize: "MEDIUM",
  },
  // Add other products with or without uniGender
];

// TOURISM
const tourismProducts: Product[] = [
  {
    id: 1,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourPolo.JPG?alt=media&token=983018ae-39a1-418c-ada2-d950e73f0a0f",
    uniName: "TM POLO",
    uniGender: "MENS", // Provide uniGender for items
    uniPrice: 90.0,
    uniSize: "SMALL",
  },

  {
    id: 2,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourPants.JPG?alt=media&token=709c822d-b5db-429b-9080-d576f83313e2",
    uniName: "TM PANTS",
    uniGender: "MENS",
    uniPrice: 200.0,
    uniSize: "SMALL",
  },

  {
    id: 3,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FNecktie.JPG?alt=media&token=0123a1d6-d70b-4905-851e-204f46d55c40",
    uniName: "NECKTIE",
    uniGender: "MENS",
    uniPrice: 50.0,
    uniSize: "SMALL",
  },

  {
    id: 4,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourFormal.JPG?alt=media&token=9ed72e53-20eb-4974-a87b-9bd08de734c6",
    uniName: "TM MALE BLAZER",
    uniGender: "MENS",
    uniPrice: 1000.0,
    uniSize: "SMALL",
  },
];

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
                      <SmallProwareItem
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
                {tourismProducts.map((uniform) => {
                  // Check if uniGender exists or matches selectedGender
                  if (
                    !uniform.uniGender ||
                    selectedGender === "" ||
                    uniform.uniGender === selectedGender
                  ) {
                    return (
                      <SmallProwareItem
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
                      <SmallProwareItem
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
                {tourismProducts.map((uniform) => {
                  // Check if uniGender exists or matches selectedGender
                  if (
                    !uniform.uniGender ||
                    selectedGender === "" ||
                    uniform.uniGender === selectedGender
                  ) {
                    return (
                      <SmallProwareItem
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
