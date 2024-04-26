import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/ingredCheckLogo.svg";
import menuIcon from "../../../assets/images/i/Menubar.svg";
import crossIcon from "../../../assets/images/i/times.svg";
import { useState } from "react";
import {
  navigationData,
  navigationDataType,
} from "../../../data/navigationData";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen((pre) => !pre);
  };
  return (
    <>
      <nav className="h-[6.4rem] md:h-[8.6rem] bg-white py-[2rem] md:py-[1.6rem]">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link to="/">
              <figure className="w-[10rem] md:w-[13.6rem]">
                <img src={logo} alt="ingrediCheck" className="w-full" />
              </figure>
            </Link>
            {/* Desktop navitems start */}
            <ul className="hidden md:flex items-center gap-[3.3rem] font-inter text-[1.6rem]">
              {navigationData.map((item: navigationDataType) => {
                return (
                  <li className="nav-links" key={item.id}>
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </li>
                );
              })}
              <li className="">
                <button className="bg-green-light text-white text-[1.6rem] capitalize font-medium rounded-[3.2rem] w-[12.5rem] h-[5.4rem]">
                  Download
                </button>
              </li>
            </ul>
            {/* Desktop navitems end */}
            {/* Mobile navitems start */}
            <div className="inline-block md:hidden" onClick={toggleNav}>
              <img src={navOpen ? crossIcon : menuIcon} alt="Menu" />
            </div>
          </div>
        </div>

        <ul
          className={`md:hidden absolute top-[6.4rem] z-50 w-full py-[2.4rem] px-[4rem] flex items-start bg-white rounded-b-[1.6rem]  flex-col gap-[4rem] font-inter text-[1.6rem] duration-200 transition-all
          ${navOpen ? "visible opacity-100" : "invisible opacity-0"}
          `}
        >
          {navigationData.map((item: navigationDataType) => {
            return (
              <li
                className="mb-nav-links"
                key={item.id}
                onClick={() => setNavOpen(false)}
              >
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            );
          })}
          <li className="w-full">
            <button className="bg-green-light text-white text-[1.6rem] capitalize font-medium rounded-[3.2rem] w-full h-[5.4rem]">
              Download
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
