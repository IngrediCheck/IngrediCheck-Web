import { Link } from "react-router-dom";
import ingredCheckLogoWhite from "../../../assets/images/ingredCheckLogoWhite.svg";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import {
  navigationData,
  navigationDataType,
} from "../../../data/navigationData";

const Footer = () => {
  return (
    <section className="bg-dark-dark2 rounded-t-[4rem] md:rounded-t-[8rem] pt-[6.4rem] pb-[4.1rem] md:pt-[8rem] md:pb-[6.4rem] md:mt-[14.4rem] lg:mt-[6.4rem]">
      <div className="container">
        <div className=" mx-auto flex flex-col items-center gap-[3.2rem] md:gap-[4rem]">
          <img src={ingredCheckLogoWhite} alt="ingredCheck" />
          <ul className="flex items-center justify-center w-full flex-col md:flex-row gap-[2.4rem] md:gap-[4rem]">
            {navigationData.map((item: navigationDataType) => {
              return (
                <li className="nav-links w-[14rem] text-center" key={item.id}>
                  <Link
                    to={item.link}
                    className="text-light-dark font-semibold"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li className="nav-links w-[14rem] text-center ">
              <Link to="#" className="text-light-dark font-semibold">
                Download APP
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-[3.7rem]">
            <FooterIcon
              icon={<FaTwitter fontSize={28} fill="#1B270C" />}
              link="#"
            />
            <FooterIcon
              icon={<FaTelegramPlane fontSize={28} fill="#1B270C" />}
              link="#"
            />
          </div>
        </div>
        <div className="mt-[6.4rem] md:mt-[8rem] pt-[4rem] md:pt-[6.4rem] border-t border-dark flex items-center justify-between text-[1.8rem] flex-col-reverse md:flex-row">
          <p className="text-dark w-[23.8rem] md:w-auto text-center mt-[2.4rem] md:mt-0">
            Copyright © 2024 Ingredicheck All Rights Reserved
          </p>
          <div className="font-semibold text-light-dark flex gap-[2.4rem] md:gap-[3.8rem] flex-col md:flex-row text-center">
            <Link to="/trams-condition">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

const FooterIcon = ({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <a
      className="flex items-center justify-center w-[3.2rem] bg-light-dark h-[3.2rem] rounded-complete p-3 "
      href={link}
    >
      {icon}
    </a>
  );
};
