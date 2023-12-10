import { Login } from "../pages";
import { Route, Routes } from "react-router-dom";
// import PrivateRoutes from "./PrivateRoutes";
const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<PrivateRoutes />}>
        
      </Route> */}

      <Route element={<Login />} path="/" />
      
    </Routes>
  );
};

export default MainRoutes;
