import { Cart, Contact, Home, Login, Proware } from "../pages";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/home" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Proware />} path="/proware" />
        <Route element={<Cart />} path="/cart" />
      </Route>

      <Route element={<Login />} path="/" />
    </Routes>
  );
};

export default MainRoutes;
