import React from "react";
import Myimage from "../assets/my.jpg";
import { HiArrowRight } from "react-icons/hi";

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-500"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl text-white font-bold">
            I'm Prity Tewary
          </h2>
          <p className="text-gray-500 py-4 max-w-4xl">
            I'm a programmer, Security Researcher and Opensource Enthusiast. I
            am potential on Frontend and Backend development with Javascript &
            Typescript. See my Skillsets & Projects for more.
          </p>
          <div className="">
            <button className="text-white w-fit px-6 py-3 my-3 items-center flex rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer">
              View my works
              <span className="hover:rotate-90 duration-300">
                <HiArrowRight className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            className="rounded-2xl mx-auto w-2/4 md:w-full"
            src={Myimage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
