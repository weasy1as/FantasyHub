import React from "react";
import { IoMenu } from "react-icons/io5";
import { SiPremierleague } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center  bg-gradient-to-r from-[#00ff87] to-[#02efff]">
      <a href="/">
        <SiPremierleague size={40} />
      </a>
      <h1 className="text-2xl font-sans font-semibold">Fantasy Hub</h1>
      <div>
        <div className="sm:hidden">
          <IoMenu />
        </div>
        <div className="hidden sm:flex gap-6">
          <a className="font-bold hover:underline" href="/teams">
            Teams
          </a>
          <a href="" className="font-bold hover:underline">
            Compare player
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
