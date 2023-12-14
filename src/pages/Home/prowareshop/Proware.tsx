import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import ProwareItem from "../../../components/Cards/ProwareItem";
import { Button, Select, Option } from "@material-tailwind/react";
import images from "../../../themes/images";
import { useLocation } from "react-router-dom";

interface Product {
  id: number;
  uniPicture: string;
  uniName: string;
  uniGender?: string; // Make uniGender optional
}

const Proware = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");

    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  const [selectedGender, setSelectedGender] = useState<string>(""); // State to track selected gender

  // IT
  const bsitProducts: Product[] = [
    {
      id: 1,
      uniPicture:
        "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITUNIF.jpg?alt=media&token=147b9262-7618-45e9-8933-426653120a17",
      uniName: "IT POLO",
      uniGender: "MENS", // Provide uniGender for items
    },

    {
      id: 2,
      uniPicture:
        "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITPANTS.png?alt=media&token=98109abd-7b81-461d-afd2-d26576242c78",
      uniName: "IT PANTS",
      uniGender: "MENS",
    },

    {
      id: 3,
      uniPicture:
        "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITUNIF.jpg?alt=media&token=147b9262-7618-45e9-8933-426653120a17",
      uniName: "IT POLO",
      uniGender: "WOMENS", // Provide uniGender for items
    },

    {
      id: 4,
      uniPicture:
        "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITPANTS.png?alt=media&token=98109abd-7b81-461d-afd2-d26576242c78",
      uniName: "IT PANTS",
      uniGender: "WOMENS",
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
    },

    {
      id: 2,
      uniPicture:
        "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourPants.JPG?alt=media&token=709c822d-b5db-429b-9080-d576f83313e2",
      uniName: "TM PANTS",
      uniGender: "MENS",
    },

    {
      id: 3,
      uniPicture:
        "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FNecktie.JPG?alt=media&token=0123a1d6-d70b-4905-851e-204f46d55c40",
      uniName: "NECKTIE",
      uniGender: "MENS",
    },

    {
      id: 4,
      uniPicture:
        "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourFormal.JPG?alt=media&token=9ed72e53-20eb-4974-a87b-9bd08de734c6",
      uniName: "TM MALE BLAZER",
      uniGender: "MENS",
    },
  ];

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender); // Update state based on the selected gender
  };

  // Buttons if Mens or Womens
  const GenderButton = ["MENS", "WOMENS"];

  const YearCategory = ["COLLEGE", "HIGH SCHOOL", "OTHERS"];

  const handleCategoryChange = (value: string | undefined) => {
    if (value) {
      setSelectedCategory(value);
    }
  };

  // CAROUSEL IMAGE
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageList = [
    images.PIC,
    images.PIC2,
    images.PIC3,
    images.PIC4,
    images.PIC5,
    images.PIC6,
    images.PIC7,
    images.PIC8,
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the background image every 5 seconds (5000 milliseconds)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [imageList.length]);

  const containerStyle = {
    backgroundImage: `url(${imageList[currentImageIndex]})`,
    backgroundSize: "cover",
    minHeight: "calc(100vh + 200px)",
    backgroundPosition: "center",
    transition: "background-image 1s ease-in-out",
  };

  return (
    <div>
      <Navbar />

      <div style={containerStyle}></div>

      <div className="flex items-center justify-start py-8 px-10">
        {GenderButton.map((gender: string, index: number) => {
          return (
            <div key={index} className="mr-4">
              <Button
                size="lg"
                placeholder={undefined}
                variant="outlined"
                color="gray"
                ripple={true}
                className={`hover:bg-green-900 hover:text-white ${
                  selectedGender === gender ? "bg-green-900 text-white" : ""
                }`}
                onClick={() => handleGenderClick(gender)}
              >
                {gender}
              </Button>
            </div>
          );
        })}
      </div>

      <div className="mb-10 px-10 flex items-center justify-start w-96">
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
      </div>

      {/* Modify rendering based on the selected category */}
      {selectedCategory === "COLLEGE" && (
        <>
          <div className="flex flex-wrap items-center">
            <h1 className="text-start px-10 w-full font-bold text-lg sm:text-2xl lg:text-4xl">
              INFORMATION & COMMUNICATION TECHNOLOGY
            </h1>
            {bsitProducts.map((uniform) => {
              // Check if uniGender exists or matches selectedGender
              if (
                !uniform.uniGender ||
                selectedGender === "" ||
                uniform.uniGender === selectedGender
              ) {
                return (
                  <ProwareItem
                    key={uniform.id}
                    uniPicture={uniform.uniPicture}
                    uniName={uniform.uniName}
                  />
                );
              }
              return null;
            })}
          </div>

          <div className="flex flex-wrap items-center">
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
                  <ProwareItem
                    key={uniform.id}
                    uniPicture={uniform.uniPicture}
                    uniName={uniform.uniName}
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
    </div>
  );
};

export default Proware;
