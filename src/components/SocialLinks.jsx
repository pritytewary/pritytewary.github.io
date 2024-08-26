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
      color: "from-blue-600 to-blue-400",
      hoverColor: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com",
      color: "from-gray-800 to-gray-600",
      hoverColor: "from-gray-600 to-gray-800",
    },
    {
      id: 3,
      child: <FaTwitter size={30} />,
      href: "https://twitter.com",
      color: "from-blue-400 to-blue-300",
      hoverColor: "from-blue-300 to-blue-400",
    },
    {
      id: 4,
      child: <FaYoutube size={30} />,
      href: "https://youtube.com",
      color: "from-red-600 to-red-500",
      hoverColor: "from-red-500 to-red-600",
    },
    {
      id: 5,
      child: <FaTelegram size={30} />,
      href: "https://telegram.com",
      color: "from-blue-500 to-blue-400",
      hoverColor: "from-blue-400 to-blue-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50"
    >
      <ul className="space-y-3">
        {links.map(({ id, child, href, color, hoverColor }, index) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            <motion.a
              href={href}
              className={`flex items-center w-40 h-14 px-4 ml-[-100px] rounded-full bg-gradient-to-r ${color} hover:ml-[-10px] transition-all duration-300 shadow-lg`}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.05,
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white">{child}</span>
              <motion.span
                className="absolute left-14 text-white font-semibold opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                {href.split("//")[1].split(".")[0]}
              </motion.span>
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
