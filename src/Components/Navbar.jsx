import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {

  const [open, setOpen] = useState(false);
  

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);


    const menuVariants = {
      hidden: { opacity: 0, x: "100%" },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: "100%" },
    };
  return (
    <>
      <div className="fixed w-full z-10 px-10">
        <div className="w-full h-[10vh] text-black pt-2 flex items-center justify-between">
          <div className="logo flex overflow-hidden items-center uppercase"><Link to='/'><h1>Abhinav<br />Kauhsal</h1></Link></div>
            <nav className="hidden md:flex justify-center space-x-14 uppercase  ">
              <Link to='/about'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              {/* <Link to='/projects'>Achievements</Link> */}
              <Link to='/contact'>Hire Me</Link>
            </nav>

            {/* <div className="social hidden md:flex text-2xl">
                <div><a href="https://www.linkedin.com/in/abhinavkaushal453/"><FaLinkedinIn /></a></div>&nbsp;&nbsp;
                <div><a href="https://github.com/abhinavkaushal101/"><FaGithub /></a></div>
            </div> */}
              <a className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-800 transition" 
          href="/Resume/abhinav.pdf" download="Abhinav_Kaushal_Resume.pdf">Get Resume</a>

            <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col z-50 space-y-1.5"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {open && (
          <div
             className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-white text-black shadow-lg text-lg font-medium"
          >
           <div className="flex flex-col items-center justify-start uppercase  space-y-6 mt-[40%]">
             <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-blue-600">
              About
            </Link>
            <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-blue-600">
              Projects
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-blue-600">
              Contact
            </Link>
           </div>

           <div>
             <div className="social justify-center mt-20 flex-col items-center flex text-2xl">
              <h4 className="text-sm text-gray-600">Also Follow </h4>
              <div className="flex gap-4 my-4">
                 <div><a href="https://www.linkedin.com/in/abhinavkaushal453/"><FaLinkedinIn /></a></div>&nbsp;
                <div><a href="https://github.com/abhinavkaushal101/"><FaGithub /></a></div>&nbsp;
                <div><a href="https://www.instagram.com/abhi_kaushal0/"><FaInstagram /></a></div>
              </div>
            </div>
           </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
