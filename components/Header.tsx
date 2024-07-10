"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

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
    display: "Conatct",
  },
];
const Header = () => {
  const pathName = usePathname();
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>CareConnect</div>
          <div className="navigation">
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
            <div>
              <Link href={"/"}>
                {" "}
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src="" alt="" className="w-full rounded-full" />
                </figure>
              </Link>
            </div>
            <Link href={"/Login"}>
              <button className="bg-blue-600 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] ">
                {" "}
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
