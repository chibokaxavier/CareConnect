"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { BiMenu } from "react-icons/bi";

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
  const toggleMenu = () => menuRef.current?.classList.toggle("show_menu");
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="xl:text-4xl text-xl font-extrabold">
              CareConnect
            </div>
          </Link>
          {/* ======================menu==================== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.path}
                    className={
                      pathName === link.path
                        ? "text-blue-500 text-[16px] leading-7 font-[600] "
                        : "text-gray-500 text-[16px] leading-7 font-[500] hover:text-blue-500"
                    }
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
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
              <button className="bg-blue-600 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] ">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="h-6 w-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
