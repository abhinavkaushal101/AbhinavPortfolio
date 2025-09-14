import React from "react";
import Videobg from "../Components/Videobg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black ">
      <Videobg />

      <div className="relative text-center md:pt-0 pt-30 flex justify-around h-screen flex-col">
        <div>
          <div className="font-[font2] text-center text-white font-bold pt-[10%]">
          <h1 className="lg:text-8xl md:text-7xl sm:text-[3rem] font-extrabold  text-[7vw]">
            “<span className="text-orange-500">Hi</span> ,I’m{" "}
            <span className="text-orange-500 uppercase">Abhinav Kaushal</span> <br/>
            A Passionate Web Developer”
          </h1>
        </div>
        <div className="pl-10 pt-[5%] md:pt-2 md:text-center md:text-xl text-gray-200 text-sm text-start ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam quisquam debitis, sunt, rem cupiditate officia animi suscipit, esse asperiores tenetur. Quaerat ipsam suscipit odit aliquid earum perspiciatis voluptatibus nobis?</p>
        </div>
        </div>
        {/* <br /> */}
        <div className=" font-[font1] flex justify-center md:pb-0 pb-[5%] space-x-4 md:text-5xl">
          <button className="md:px-12 px-6 py-1.5 uppercase rounded-full border-white text-white md:py-3 border-2">
            <Link to="/contact">Hire Now</Link>
          </button>
           <button className="md:px-12 px-6 py-1.5 uppercase rounded-full border-white text-white md:py-3 border-2">
            <Link to="/projects">Projects</Link>
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
