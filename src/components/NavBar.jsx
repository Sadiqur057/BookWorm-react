import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle =
    "bg-white border-[1px] border-c-primary hover:bg-c-primary hover:text-white font-semibold text-c-primary";
  const inactiveStyle = "border-white border-[1px] hover:border-base-200";
  const links = (
    <>
      <li className="my-1 lg:my-0">
        <NavLink
          to="./"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Home
        </NavLink>
      </li>
      <li className="my-1 lg:my-0">
        <NavLink
          to="./about"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          About
        </NavLink>
      </li>
      <li className="my-1 lg:my-0">
        <NavLink
          to="./listed"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Listed Books
        </NavLink>
      </li>
      <li className="my-1 lg:my-0">
        <NavLink
          to="./pages"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Pages to Read
        </NavLink>
      </li>
      <li className="my-1 lg:my-0">
        <NavLink
          to="./blogs"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-0 my-1 md:my-4 w-[90%] md:w-5/6 mx-auto">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0 pr-2 md:pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-3xl font-bold px-0 text-c-primary">BookWorm</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
      </div>
      <div className="navbar-end pr-0">
        <a className="btn bg-c-primary text-white hover:bg-white hover:text-c-primary hover:border-c-primary border-[1px] font-semibold md:text-lg mr-1">Sign In</a>
        <a className="btn bg-[#59c6d2] text-white hover:bg-white hover:text-[#59c6d2] hover:border-[#59c6d2] border-[1px] font-semibold md:text-lg">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
