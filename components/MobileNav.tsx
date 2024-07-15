"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../src/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
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
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[25px] text-gray-600" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold">
              CareConnect<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col space-y-8 items-center justify-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathName &&
                  "text-gray-400 border-b-2 border-gray-600"
                } text-xl  hover:text-accent transition-all hover:text-gray-400 duration-300`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
