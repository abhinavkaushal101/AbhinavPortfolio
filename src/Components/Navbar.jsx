import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full z-10 px-5">
        <div className="w-full h-[10vh] text-black pt-2 flex items-center justify-between">
          <div className="logo flex overflow-hidden items-center"><Link to='/'><img className="object-cover w-[10vw] h-[10vh]" src="https://aadrshgurjar.netlify.app/assets/images/logo.png" alt="" /></Link></div>
            <nav className="flex justify-center space-x-14 uppercase  ">
              <Link to='/projects'>Projects</Link>
              <Link to='/about'>About Me</Link>
              <Link to='/contact'>Hire Me</Link>
            </nav>

            <div className="social flex text-2xl">
                <div><FaLinkedinIn /></div>&nbsp;&nbsp;
                <div><FaGithub /></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
