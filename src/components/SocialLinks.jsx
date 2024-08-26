import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://linkedin.com",
      style: "rounded-tr-md",
      color: "bg-blue-600",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com",
      color: "bg-gray-800",
    },
    {
      id: 3,
      child: <FaTwitter size={30} />,
      href: "https://twitter.com",
      color: "bg-blue-400",
    },
    {
      id: 4,
      child: <FaYoutube size={30} />,
      href: "https://youtube.com",
      color: "bg-red-600",
    },
    {
      id: 5,
      child: <FaTelegram size={30} />,
      href: "https://telegram.com",
      style: "rounded-br-md",
      color: "bg-blue-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:flex flex-col top-[35%] left-0 fixed"
    >
      <ul>
        {links.map(({ id, child, href, style, color }, index) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${color} ${style}`}
          >
            <motion.a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {child}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
