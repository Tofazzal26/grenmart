import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};

export default Root;
