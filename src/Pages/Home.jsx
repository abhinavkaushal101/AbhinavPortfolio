import React from "react";
import Videobg from "../Components/Videobg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black">
      <Videobg />

      <div className="relative text-center">
        <div className="font-[font2] text-center text-white font-bold pt-[20%]">
          <h1 className="text-8xl">
            “<span className="text-orange-500">Hi</span> ,I’m{" "}
            <span className="text-orange-500 uppercase">Abhinav Kaushal</span> <br/>
            A Passionate Web Developer”
          </h1>
        </div>
        <br />
        <div className=" font-[font1] space-x-4 text-5xl">
          <button className="px-12 uppercase rounded-full border-white text-white py-3 border-2">
            <Link to="/">Hire Now</Link>
          </button>
           <button className="px-12 uppercase rounded-full border-white text-white py-3 border-2">
            <Link to="/projects">Projects</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
