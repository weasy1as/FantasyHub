"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5"; // Add close icon
import { SiPremierleague } from "react-icons/si";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="p-4 flex justify-between items-center bg-gradient-to-r from-[#00ff87] to-[#02efff] relative">
      <Link href="/" aria-label="Homepage">
        <SiPremierleague size={40} />
      </Link>

      <Link
        href="/"
        className="text-2xl font-sans font-semibold cursor-pointer"
      >
        Fantasy Hub
      </Link>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-6">
        <Link className="font-bold hover:underline" href="/teams">
          Teams
        </Link>
        <Link href="/compare" className="font-bold hover:underline">
          Compare player
        </Link>
      </div>

      {/* Mobile menu icon */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="sm:hidden focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
      </button>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full right-0 mt-2 w-40 bg-[#02efff] rounded-md shadow-lg z-50">
          <Link
            href="/teams"
            className="block px-4 py-3 font-bold text-gray-800 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Teams
          </Link>
          <Link
            href="/compare"
            className="block px-4 py-3 font-bold text-gray-800 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Compare player
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
