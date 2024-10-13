import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context/index";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const context = useContext(ShoppingCardContext);
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men's clothing"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men&apos;s clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women's clothing"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Women&apos;s clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li> */}
      </ul>
      <ul className="flex items-center  gap-3">
        <li className="text-black/60">user@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MyOrder
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MyAccount
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SignIn
          </NavLink>
        </li>
        <li className="flex justify-between items-center">
          <ShoppingBagIcon className="size-6 text-black-500 mx-2" />
          {context.count}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
