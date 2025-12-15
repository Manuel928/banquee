"use client";

import banqueeLogo from "@/assets/banqueeLogo.svg";
import Button from "@/components/ui/button";
import { LucideMenu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  return (
    <div className="px-[30px] md:px-20 lg:px-[140px] flex items-center justify-between bg-white py-6">
      <Image src={banqueeLogo} alt="logo" />

      {/* NavLinks */}
      <nav className="hidden lg:flex text-sm items-center gap-4">
        <div
          onClick={() => router.push("/features")}
          className="hover:bg-[#F8F8F8] group group-hover:cursor-pointer transition-all duration-150 px-3 py-2 rounded-md"
        >
          <Link className="group" href={"/features"}>
            Features
          </Link>
        </div>
        <div className="hover:bg-[#F8F8F8] transition-all duration-150 px-3 py-2 rounded-md">
          <Link className="" href={"/compare"}>
            Compare
          </Link>
        </div>
        <div className="hover:bg-[#F8F8F8] transition-all duration-150 px-3 py-2 rounded-md">
          <Link className="" href={"/support"}>
            Support
          </Link>
        </div>
        <div className="hover:bg-[#F8F8F8] transition-all duration-150 px-3 py-2 rounded-md">
          <Link className="" href={"/blog"}>
            Blog
          </Link>
        </div>
      </nav>

      <div className="hidden lg:flex items-center gap-8">
        <Button variant="plain">Login</Button>
        <Button variant="filled">Open account</Button>
      </div>

      {/* Hamburger Menu */}
      <LucideMenu
        onClick={() => setShowMobileMenu(true)}
        className="block lg:hidden cursor-pointer"
      />

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="h-screen w-full inset-0 fixed top-0 bg-white flex flex-col -translate-x-3 transition-all">
          <XIcon
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="absolute top-6 right-6"
          />

          <div className="mt-12 flex flex-col items-center justify-between gap-16">
            <nav className="flex flex-col text-sm items-center gap-4">
              <div
                onClick={() => router.push("/features")}
                className="hover:bg-[#F8F8F8] group group-hover:cursor-pointer transition-all duration-150 px-3 py-2 rounded-md"
              >
                <Link className="group" href={"/features"}>
                  Features
                </Link>
              </div>
              <div className="hover:bg-[#F8F8F8] transition-all duration-150 px-3 py-2 rounded-md">
                <Link className="" href={"/compare"}>
                  Compare
                </Link>
              </div>
              <div className="hover:bg-[#F8F8F8] transition-all duration-150 px-3 py-2 rounded-md">
                <Link className="" href={"/support"}>
                  Support
                </Link>
              </div>
              <div className="hover:bg-[#F8F8F8] transition-all duration-150 px-3 py-2 rounded-md">
                <Link className="" href={"/blog"}>
                  Blog
                </Link>
              </div>
            </nav>

            <div className="flex flex-col items-center gap-4">
              <Button variant="plain">Login</Button>
              <Button variant="filled">Open account</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
