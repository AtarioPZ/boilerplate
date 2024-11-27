"use client";

import { useState } from "react";
import Image from "next/image";
import CustomSection from "../Layout/CustomSection";
import Link from "next/link";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => {
      document.body.style.overflow = prev ? "auto" : "hidden";
      return !prev;
    });
  };

  return (
    <nav className="flex items-center justify-center shadow-md">
      <CustomSection className="px-4 py-4">
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt=""
              width={100}
              height={50}
              className="w-full h-auto"
            />
          </Link>
          <div className="hidden md:flex gap-6 text-[1rem]">
            <Link href="/">
              <div className="hover:underline transition-all duration-300">
                Home
              </div>
            </Link>
            <Link href="#">
              <div className="hover:underline transition-all duration-300">
                About
              </div>
            </Link>
            <Link href="/contact">
              <div className="hover:underline transition-all duration-300">
                Contact
              </div>
            </Link>
          </div>
          <div className="block md:hidden">
            <Image
              src="/icons/Menu_Ham_Black.svg"
              alt="Open Menu"
              width={32}
              height={32}
              className="text-black"
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <div
          className={`sideBar fixed top-0 right-0 w-full h-[100vh] md:hidden flex flex-col justify-between items-center p-6 transition-transform transform ease-in-out duration-700 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full flex justify-end">
            <Image
              src="/icons/Close_X.svg"
              alt="Close"
              width={32}
              height={32}
              className=""
              onClick={toggleSidebar}
            />
          </div>
          <div className="flex flex-col gap-4 w-full justify-center items-center flex-grow">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="border border-red-400 w-full max-w-lg font-semibold text-4xl flex items-center justify-between rounded-full px-6 py-2"
            >
              <span>Home</span>
            </Link>
            <Link
              href="#"
              onClick={toggleSidebar}
              className="border border-blue-400 w-full max-w-lg font-semibold text-4xl flex items-center justify-between rounded-full px-6 py-2"
            >
              <span>Contact</span>
            </Link>
          </div>
          <footer className="text-center py-4 w-full border-t border-gray-600">
            <p className="text-lg">© 2024 logoipsum</p>
          </footer>
        </div>
      </CustomSection>
    </nav>
  );
};

export default Navbar;
