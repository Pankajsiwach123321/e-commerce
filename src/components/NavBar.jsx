import React, { useContext } from "react";
import Cart from "../context/Cart";
import { CartLogo, Navicon, WebLogo } from "./Icon";
import CartContext from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  const { setShow, CartItem, user, Login, setLogin, setnavBar, navBar } =
    useContext(CartContext);
  const cartcount = CartItem.length;
  const opencart = () => {
    setShow(true);
  };
  if (navBar) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div>
      <nav className=" py-4 relative z-1">
        <div className="max-w-[1140px] mx-auto px-3 ">
          <div className="flex justify-between items-center">
            <ul>
              <li>
                <a
                  href="#"
                  className=" flex gap-1 items-center text-xl font-medium font-mono"
                >
                  <WebLogo />
                  <p className=" w-[127px] overflow-clip text-nowrap text-ellipsis">{`${user.name}`}</p>
                </a>
              </li>
            </ul>
            <ul
              className={` ${
                navBar ? "left-0" : "left-[-100%]"
              } flex gap-5 items-center navresponsive`}
            >
              <li>
                <Link
                  onClick={() => setnavBar(false)}
                  data-nav-name="Children"
                  to="/kids"
                  className={` ${
                    location.pathname === "/kids" && "hoverlinks"
                  } group text-xl before:content-[attr(data-nav-name)] after:w-0 before:opacity-0 before:translate-y-[24px] overflow-hidden block   font-medium font-mono`}
                >
                  <span
                    className={` ${
                      location.pathname === "/kids" &&
                      "opacity-0 translate-y-[-24px]"
                    } duration-300 block  translate-y-[0]`}
                  >
                    Children
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setnavBar(false)}
                  data-nav-name="Men"
                  to="/"
                  className={`${
                    location.pathname === "/" && "hoverlinks"
                  } group text-xl before:content-[attr(data-nav-name)] after:w-0 before:opacity-0 before:translate-y-[24px] overflow-hidden block   font-medium font-mono`}
                >
                  <span
                    className={` ${
                      location.pathname === "/" &&
                      "opacity-0 translate-y-[-24px]"
                    }  duration-300 block  translate-y-[0]`}
                  >
                    Men
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setnavBar(false)}
                  data-nav-name="Women"
                  to="/women"
                  className={` ${
                    location.pathname === "/women" && "hoverlinks"
                  } group text-xl before:content-[attr(data-nav-name)] after:w-0 before:opacity-0 before:translate-y-[24px] overflow-hidden block   font-medium font-mono`}
                >
                  <span
                    className={` ${
                      location.pathname === "/women" &&
                      "opacity-0 translate-y-[-24px]"
                    } duration-300 block  translate-y-[0]`}
                  >
                    Women
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setLogin(!Login, setnavBar(false))}
                  className=" bg-orange-500 sm:hidden inline-block  Mainhover px-4 py-1 text-white hover:text-orange-500  border-orange-500 border duration-300 rounded-2xl text-xl font-medium font-mono"
                >
                  <span className=" block relative z-[1]">Login</span>
                </button>
              </li>
            </ul>
            <ul className="flex gap-5 items-center">
              <li className="max-sm:mr-4">
                <a
                  onClick={opencart}
                  href="#"
                  className=" group relative z-[1] text-sm font-medium font-mono"
                >
                  <CartLogo />
                  <span className="absolute bg-orange-500  top-[-11px] leadi ng-[0] right-[6px] z-[-1] px-2  text-white rounded-3xl">
                    {cartcount}
                  </span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => setLogin(!Login)}
                  className=" bg-orange-500 max-sm:hidden inline-block  Mainhover px-4 py-1 text-white hover:text-orange-500  border-orange-500 border duration-300 rounded-2xl text-xl font-medium font-mono"
                >
                  <span className=" block relative z-[1]">Login</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={() => setnavBar(!navBar)}
          className=" cursor-pointer absolute right-2 top-4 z-10 sm:hidden"
        >
          <Navicon />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
