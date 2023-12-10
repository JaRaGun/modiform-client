import { Button, TextField } from "@mui/material";
import images from "../../themes/images";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage: `url(${images.BACKGROUNDSTI})`,
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 ">
              <div className="mt-80">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  MODIFORM
                </h2>
                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <img
                    className="w-auto h-36 sm:h-48"
                    src={images.MODILOGO}
                    alt=""
                  />
                </div>
                <p className="mt-3 text-yellow-400 font-extrabold text-3xl ">
                  MODIFORM
                </p>
              </div>

              <div className="mt-8">
                <form>
                  <div className="space-y-4">
                    {/* required */}
                    <TextField
                      fullWidth
                      type="text"
                      label="Student ID Number"
                      variant="outlined"
                      placeholder="02000223121"
                    />

                    <TextField
                      fullWidth
                      type="password"
                      label="Password"
                      variant="outlined"
                      placeholder="Password"
                    />

                    {/*  type="submit" */}
                    <Button onClick={handleSignIn} fullWidth variant="contained">
                      Sign In
                    </Button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
