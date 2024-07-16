"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { GiHospitalCross } from "react-icons/gi";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("sticky_header");
      } else {
        headerRef.current?.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  const pathName = usePathname();
  // const toggleMenu = () => menuRef.current?.classList.toggle("show_menu");
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="xl:text-4xl text-3xl  lg:text-3xl xl:gap-2  gap-1 font-extrabold flex justify-center items-center">
              <GiHospitalCross /> CareConnect{" "}
              <div className="h-2 w-2  rounded-full bg-black xl:mt-5 mt-[9px] " />
            </div>
          </Link>
          <div className="hidden xl:flex">
            <Nav />
          </div>
          <div className="gap-4 flex items-center">
            <div className="hidden">
              <Link href={"/"}>
                {" "}
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src="" alt="" className="w-full rounded-full" />
                </figure>
              </Link>
            </div>
            <Link href={"/Login"}>
              <button className="bg-gray-600 py-2 xl:px-6 px-4 text-white font-[600] xl:h-[44px] h-[35px]  flex items-center justify-center rounded-[50px] ">
                Login
              </button>
            </Link>
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
