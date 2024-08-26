import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Works", href: "/works" },
    { id: 2, link: "Skillsets", href: "/skillsets" },
    { id: 3, link: "Blog", href: "/blog" },
    { id: 4, link: "Contact", href: "/contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full h-20 flex justify-between items-center px-4 bg-gradient-to-r from-gray-900 to-black text-white z-50"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold"
        >
          <Link
            to={"/"}
            className="hover:text-blue-500 transition duration-300 font-signature"
          >
            {" "}
            Prity
          </Link>
        </motion.h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, href }, index) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-white"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to={href}>{link}</Link>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </motion.div>

      {nav && (
        <motion.ul
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link, href }, index) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to={href} onClick={() => setNav(false)}>
                  {link}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default NavBar;
