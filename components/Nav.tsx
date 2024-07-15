"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Find a doctor",
      path: "/doctors",
    },
    {
      name: "Services",
      path: "/services",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <div key={index}>
            <Link
              href={link.path}
              className={`${
                link.path === pathName &&
                "text-gray-400 border-b-2 border-gray-600 "
              }  font-medium hover:text-accent transition-all ease-in-out hover:text-gray-400 duration-300`}
            >
              {" "}
              {link.name}{" "}
            </Link>
          </div>
        );
      })}{" "}
    </nav>
  );
};

export default Nav;
