import { Contact, Home, Login, Proware } from "../pages";
import { Route, Routes } from "react-router-dom";
// import PrivateRoutes from "./PrivateRoutes";
const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<PrivateRoutes />}>
        
      </Route> */}

      <Route element={<Login />} path="/" />
      <Route element={<Home />} path="/home" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Proware />} path="/proware" />
    </Routes>
  );
};

export default MainRoutes;
