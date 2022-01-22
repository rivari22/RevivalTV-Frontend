import Image from "next/image";
import React from "react";
import LogoAutodrone from "../../public/images/Logo-autodrone.png";
import search from "../../public/icons/search.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 bg-black w-full shadow z-50 py-10">
      <div className="container m-auto flex items-center text-gray-700 md:gap-[100px] mobile:justify-between lg:justify-center">
        <Link href={"/"}>
          <a>
            <Image
              src={LogoAutodrone}
              width={68}
              height={32}
              alt="logo autodrone"
            />
          </a>
        </Link>
        <ul className="hidden lg:flex lg:gap-[100px] items-center text-lg font-semibold cursor-pointer text-white">
          <li className="hover:text-gray-200">
            <Link href={"/"}>
              <a>HOME</a>
            </Link>
          </li>
          <li className="hover:text-gray-200">GALLERY</li>
          <li className="hover:text-gray-200">
            <Link href={"#newProduct"}>
              <a>PRODUCTS</a>
            </Link>
          </li>
          <li className="hover:text-gray-200">
            <a href="#review">REVIEW</a>
          </li>
          <li className="hover:text-gray-200">SUPPORT</li>
          <li className="hover:text-gray-200">
            <Image
              src={search}
              width={25}
              height={25}
              alt="search icon"
              color="white"
            />
          </li>
        </ul>
        <button className="block lg:hidden mx-2 rounded focus:outline-none hover:bg-gray-200 group">
          <div className="w-5 h-1 bg-white mb-1"></div>
          <div className="w-5 h-1 bg-white mb-1"></div>
          <div className="w-5 h-1 bg-white"></div>
          <div
            className="absolute top-0 -right-full h-screen w-[50%] bg-black opacity-0
      group-focus:right-0 group-focus:opacity-100 transition-all duration-300 group-hover:right-0 group-hover:opacity-100 group-active:right-0 group-active:opacity-100"
          >
            <ul className="flex flex-col items-center w-full cursor-pointer pt-10">
              <li className="hover:bg-gray-200 hover:text-black  py-4 px-6 w-full text-white">
                <Link href={"/"}>
                  <a>HOME</a>
                </Link>
              </li>
              <li className="hover:bg-gray-200 hover:text-black py-4 px-6 w-full text-white">
                GALLERY
              </li>
              <li className="hover:bg-gray-200 hover:text-black py-4 px-6 w-full text-white">
                <Link href={"#newProduct"}>
                  <a>PRODUCTS</a>
                </Link>
              </li>
              <li className="hover:bg-gray-200 hover:text-black py-4 px-6 w-full text-white">
                <Link href="#review">
                  <a>REVIEW</a>
                </Link>
              </li>
              <li className="hover:bg-gray-200 hover:text-black py-4 px-6 w-full text-white">
                SUPPORT
              </li>
              <li className="hover:bg-gray-200 hover:text-black py-4 px-6 w-full text-white">
                SEARCH
              </li>
            </ul>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
