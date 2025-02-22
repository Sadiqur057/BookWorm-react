import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ToastContainer } from "react-toastify";


const Root = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="md:my-4 w-[90%] md:w-5/6 lg:w-4/5 mx-auto">
      <ToastContainer />
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;