import { TextField } from "@mui/material";
import images from "../../themes/images";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GetItemCartFirebase } from "../../firebase/hooks";
import { Spinner, Button } from "@material-tailwind/react";
import { checkUserData } from "../../firebase/services";
import { useAppDispatch } from "../../utils/redux/hooks";
import { UserInfoRedux } from "../../utils/redux/slice/userSlice";
import addToCartRedux from "../../utils/redux/slice/cartSlice";
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

    // console.log(itemsCartFromFirebase);
    try {
      setIsLoading(true);
      const checkUserCart = await GetItemCartFirebase(studentId);

      // console.log(checkUserCart);
      const itemsCartFromFirebase = checkUserCart.map((item) => ({
        id: item.id,
        itemCode: item.itemCode,
        urlPicture: item.urlPicture,
        itemName: item.itemName,
        itemPrice: item.itemPrice,
        itemSize: item.itemSize,
        itemCategory: item.itemCategory,
        quantity: item.quantity,
        totalPrice: item.totalPrice,
      }));
      const checkUserCredentials = await checkUserData(studentId, password);
      // console.log("checkuser", checkUserCredentials)

      if (!checkUserCredentials.empty) {
        const userData = checkUserCredentials.docs[0].data();

        await dispatch(
          UserInfoRedux({
            studentIdRedux: userData.studentId,
            passwordRedux: userData.password,
            firstNameRedux: userData.firstName,
            lastNameRedux: userData.lastName,
          })
        );

        // Dispatch the addToCartRedux action with itemsCartFromFirebase
        // dispatch(addToCartRedux(itemsCartFromFirebase));
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
                <h2 className="text-xl text-white sm:text-4xl">
                  BE UNIFORM READY.
                </h2>
                <p className="max-w-full mt-3 text-5xl font-extrabold text-white">
                  PRO-WARE MAKES IT EASY.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <img
                    className="w-auto h-64 sm:h-80"
                    src={images.LOGOLOGINS}
                    alt=""
                  />
                </div>
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
                      <div className="flex items-center justify-center">
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
