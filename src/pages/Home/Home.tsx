import { Button } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import images from "../../themes/images";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className=""
        style={{
          backgroundImage: `url(${images.HOMEBG})`,
          backgroundSize: "cover",
          minHeight: "calc(100dvh + 130px)",
          backgroundPosition: "center",
        }}
      ></div>

      <div
        style={{
          backgroundImage: `url(${images.BLURRYBG})`,
          backgroundSize: "cover",
          minHeight: "calc(100vh + 130px)",
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
              OTHERSS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
