import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className="container mx-auto">
      <div className="px-4">
        <Header />
        <Navbar />
        <Outlet />
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Root;
