import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "works",
    },
    {
      id: 2,
      link: "Skillsets",
    },
    {
      id: 3,
      link: "Blog",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex  justify-between items-center w-full h-20 text-white bg-black px-4 ">
      <div>
        <h1 className=" font-medium text-5xl font-signature ml-2 ">Prity</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center  absolute  top-0  left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-700 hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
