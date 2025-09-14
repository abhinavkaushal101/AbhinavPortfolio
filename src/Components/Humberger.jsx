import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Humberger() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">MyLogo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1.5"
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg flex flex-col items-center justify-center space-y-6 text-lg font-medium"
          >
            <a href="#" onClick={() => setOpen(false)} className="hover:text-blue-600">
              Home
            </a>
            <a href="#" onClick={() => setOpen(false)} className="hover:text-blue-600">
              About
            </a>
            <a href="#" onClick={() => setOpen(false)} className="hover:text-blue-600">
              Services
            </a>
            <a href="#" onClick={() => setOpen(false)} className="hover:text-blue-600">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
