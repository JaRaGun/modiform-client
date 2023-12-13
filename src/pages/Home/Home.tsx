import { useState, useEffect } from "react";

import { Button } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import images from "../../themes/images";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageList = [
    images.HOMEBG,
    images.HOME2,
    images.HOME3,
    images.HOME4,
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the background image every 5 seconds (5000 milliseconds)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageList.length]);

  const containerStyle = {
    backgroundImage: `url(${imageList[currentImageIndex]})`,
    backgroundSize: "cover",
    minHeight: "calc(100vh + 200px)",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}></div>

      <div
        style={{
          backgroundImage: `url(${images.BLURRYBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center py-20 sm:py-20 md:py-24 lg:py-24">
          <Button variant="contained">RESERVE NOW</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative group">
            <img
              src={images.COLLEGE}
              alt="COLLEGEPIC"
              className="transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-3xl text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-50 group-hover:opacity-100">
              College
            </div>
          </div>

          <div className="relative group">
            <img
              src={images.SENIORHIGH}
              alt="SHSPIC"
              className="transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-3xl text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-50 group-hover:opacity-100">
              Senior High
            </div>
          </div>
        </div>

        <div>
          <div className="relative group">
            <img
              src={images.OTHERS}
              alt="COLLEGEPIC"
              className="transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-3xl text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-50 group-hover:opacity-100">
              OTHERS
            </div>
          </div>
        </div>

        <div className="py-10"></div>
      </div>
    </div>
  );
};

export default Home;
