import { useState, useEffect } from "react";
import images from "../../themes/images";

const HomeCarousel = () => {
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
    transition: "background-image 1s ease-in-out",
  };

  return <div style={containerStyle}></div>;
};

export default HomeCarousel;
