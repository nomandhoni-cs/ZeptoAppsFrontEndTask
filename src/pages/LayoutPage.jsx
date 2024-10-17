import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPage = ({ wishListedBooks }) => {
  return (
    <>
      <Navbar wishListedBooks={wishListedBooks} />
      <Outlet />
    </>
  );
};

export default LayoutPage;
