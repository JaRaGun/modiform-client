import { useState, useEffect } from "react";
import images from "../../themes/images";

const ProwareCarousel = () => {
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

  return <div style={containerStyle}></div>;
};

export default ProwareCarousel;
