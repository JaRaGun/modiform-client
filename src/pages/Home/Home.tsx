import Navbar from "../../components/navbar/Navbar";
import images from "../../themes/images";

const Home = () => {
  return <div>
      <Navbar/>
        <div className=""
            style={{
              backgroundImage: `url(${images.HOMEBG})`,
              backgroundSize: 'cover',
              
              minHeight: 'calc(100dvh + 130px)',
              backgroundPosition: "center",
            }}>
        </div>

        <div className=""
            style={{
              backgroundImage: `url(${images.BACKGROUNDSTI})`,
              backgroundSize: 'cover',
              
              minHeight: 'calc(100dvh + 130px)',
              backgroundPosition: "center",
            }}>


        </div>

  </div>;
};

export default Home;
