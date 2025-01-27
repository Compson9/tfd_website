"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-8 max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            width={110}
            height={120}
            src="/logo1.png"
            alt="Logo"
            className="h-10"
          />
        </Link>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="text-white hover:text-gray-200 font-medium">
            About Us
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200 font-medium">
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-800 hover:text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{
              rotate: isOpen ? 90 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <MenuIcon color="white" size={28} />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/about"
              className="text-gray-800 hover:text-gray-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-gray-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
