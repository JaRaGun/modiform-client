import { TextField } from "@mui/material";
import images from "../../themes/images";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Spinner, Button } from "@material-tailwind/react";
import { checkUserData } from "../../firebase/services";
import { useAppDispatch } from "../../utils/redux/hooks";
import { UserInfoRedux } from "../../utils/redux/slice/userSlice";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [studentId, setUserStudentId] = useState<number | null>(null); // Change initial state to null
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleuserStudentIdChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredValue = event.target.value;
    const parsedValue = enteredValue ? parseInt(enteredValue, 10) : null; // Parse to number or set to null if empty
    setUserStudentId(parsedValue);
  };

  const handlepasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const checkUserCredentials = await checkUserData(studentId, password);
      // console.log("checkuser", checkUserCredentials)

      if (!checkUserCredentials.empty) {
        const userData = checkUserCredentials.docs[0].data();

        dispatch(
          UserInfoRedux({
            studentIdRedux: userData.studentId,
            passwordRedux: userData.password,
            firstNameRedux: userData.firstName,
            lastNameRedux: userData.lastName,
          })
        );
        localStorage.setItem("userData", JSON.stringify(userData));
        setIsLoading(false);
        navigate("/home");
        // console.log(userData);
      } else {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid username or password",
        });
      }
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later",
      });
    }
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
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    {/* required */}
                    <TextField
                      value={studentId}
                      onChange={handleuserStudentIdChange}
                      fullWidth
                      type="text"
                      label="Student ID Number"
                      variant="outlined"
                      placeholder="02000223121"
                    />

                    <TextField
                      value={password}
                      onChange={handlepasswordChange}
                      fullWidth
                      type="password"
                      label="Password"
                      variant="outlined"
                      placeholder="Password"
                    />

                    {isLoading ? (
                      <div className="flex justify-center items-center">
                        <Spinner color="blue" className="w-10 h-10" />
                      </div>
                    ) : (
                      <Button
                        type="submit"
                        fullWidth
                        color="blue"
                        placeholder={undefined}
                      >
                        Sign in
                      </Button>
                    )}
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
