import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);
  return (
    <div>
      <div style={{ height: navbarHeight }}></div>
      <div ref={navbarRef} className="navbar bg-white fixed z-50 top-0 w-full">
        <div className="container mx-auto  flex justify-between items-center py-4 bg-white">
          <Link to="/">
            <h1 className="text-5xl font-bold text-gray-900 ">
              Event <span className="text-[#7848f4]">Hive</span>
            </h1>
          </Link>
          <div className="flex justify-between items-center gap-10">
            <Link to="/signin">Login</Link>
            <Link
              to="/signup"
              className="p-4 px-10 bg-primary hover:bg-primary hover:shadow-lg text-white rounded-md"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
