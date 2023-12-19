import { Cart, Contact, Home, Login, Proware, StudentInvoice, StudentProfile } from "../pages";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Footer from "../components/footer/Footer";

const MainRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/home" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Proware />} path="/proware" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<StudentProfile />} path="/profile" />
          <Route element={<StudentInvoice/> } path="/receipt"/>
        </Route>

        <Route element={<Login />} path="/" />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoutes;
