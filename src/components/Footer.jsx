import { Link } from "react-router-dom";
import { PiFacebookLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Get in touch", path: "/contact" },
  { name: "FAQs", path: "/faqs" },
];

const Footer = () => {
  return (
    <div className="flex w-full flex-col justify-center mt-20 items-center text-white gap-4 p-4 px-10 bg-[#10107B]">
      <Link to="/">
        <h1 className="text-[40px] font-bold">
          Event <span className="text-[#7848f4]">Hive</span>
        </h1>
      </Link>
      <div className="w-[30%] flex flex-col gap-10">
        <form className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[60%] p-4 rounded-md"
          />
          <button className="p-4 bg-primary rounded-md w-[40%]">
            Subscribe
          </button>
        </form>
        <div className="flex gap-2 justify-between items-center">
          {links.map((link, index) => {
            return (
              <Link key={index} to={link.path}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="py-4 flex justify-between items-center align-middle border-t-[1px] w-full border-t-white mt-5">
        <div className="flex gap-2 items-center align-middle text-[10px]">
          <Link className="p-2 bg-primary rounded-md">English</Link>
          <Link className="p-2 rounded-md">French</Link>
          <Link className="p-2 rounded-md">Hindi</Link>
        </div>
        <div className="flex gap-2 items-center align-middle">
          <AiOutlineLinkedin className="text-3xl" />
          <FaInstagram className="text-3xl" />
          <PiFacebookLogo className="text-3xl" />
        </div>
        <p>Non Copyrighted © 2023 Upload by EventHive</p>
      </div>
    </div>
  );
};

export default Footer;
8;
