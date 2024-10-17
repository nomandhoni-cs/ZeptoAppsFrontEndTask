import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPage = ({ wishListedBooks }) => {
  return (
    <div className="NovelFlowApp bg-primary px-3 sm:px-5 md:px-10 xl:px-40 space-y-7">
      <Navbar wishListedBooks={wishListedBooks} />
      <Outlet />
    </div>
  );
};

export default LayoutPage;
