"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button1 } from "../utils/Button";
import { FaGift } from "react-icons/fa6";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const active = pathname;

  const isLightBackground =
    isHome ||
    active === "/impressum" ||
    active === "/online-erstellen" ||
    active === "/datenschutz" ||
    active === "/kostenlose-vorlage";

  const logo = isLightBackground ? "/logo/logo.png" : "/logo/white-logo.png";
  return (
    <nav
      className={`${
        isLightBackground
          ? "bg-white text-[#00000099] border-b border-[#E8E8E8] shadow"
          : "bg-fade-dark text-white absolute top-0 left-0 right-0"
      }  w-full px-4 py-4 2xl:py-2.5 z-50 transition-colors duration-300`}
    >
      <div className="w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl mx-auto flex items-center justify-between gap-x-4 md:py-2 lg:py-2.5">
        {/* Logo */}
        <Link href="/">
          <Image
            className="h-6 md:h-8 lg:h-10 2xl:h-[50px] w-auto object-contain object-center"
            src={logo}
            alt="mietstatus.de"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-x-6 xl:gap-x-10 font-medium text-sm xl:text-base 2xl:text-lg">
          <li className={active === "/" ? "text-primary-green" : ""}>
            <Link href="/">Startseite</Link>
          </li>
          <li
            className={
              active.startsWith("/uberblick") ? "text-primary-green" : ""
            }
          >
            <Link href="/uberblick/Mietschuldenfreiheitsbescheinigung erklärt?id=0">
              Überblick
            </Link>
          </li>
          <li
            className={
              active.includes("wie-erhalte") ? "text-primary-green" : ""
            }
          >
            <Link href="/uberblick/Wie%20erhalte%20ich%20eine%20Mietschuldenfreiheitsbescheinigung%3F?id=1">
              Anleitung
            </Link>
          </li>
        </ul>

        <ul className="hidden lg:flex items-center gap-x-6 xl:gap-x-10 font-medium text-sm xl:text-base 2xl:text-lg">
          <li
            className={isLightBackground ? "text-primary-black" : "text-white"}
          >
            <Link
              href="/kostenlose-vorlage"
              className="flex items-center gap-x-3"
            >
              <FaGift
                className={`${
                  isLightBackground ? "text-primary-green" : "text-white"
                } size-4 2xl:size-6 `}
              />
              Kostenlose Vorlage
            </Link>
          </li>
          <li>
            <Link href="/online-erstellen">
              <Button1 title="Online erstellen" />
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className=" p-2 rounded-full shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-primary-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Slider */}
      <div
        className={`w-full fixed top-0 left-0 right-0 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full transition-transform"
        } duration-300 ease-in-out  z-50`}
      >
        <div className="p-4">
          <div
            className="flex justify-between items-center"
            onClick={toggleMenu}
          >
            <Link href="/">
              <img
                loading="lazy"
                className="h-7 object-cover object-center"
                src="/logo/logo.png"
                alt="mietstatus.de"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-sm text-primary-blue flex items-center gap-x-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary-green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="mt-10 space-y-4 text-base text-primary-black hover:text-primary-black">
            <li className="hover:text-primary-blue" onClick={toggleMenu}>
              <Link href="/">Startseite</Link>
            </li>
            <li className="hover:text-primary-blue" onClick={toggleMenu}>
              <Link href="/uberblick/mietschuldenfreiheitsbescheinigung erklärt?id=0">
                Überblick
              </Link>
            </li>
            <li className="hover:text-primary-blue" onClick={toggleMenu}>
              <Link href="/uberblick/Wie%20erhalte%20ich%20eine%20Mietschuldenfreiheitsbescheinigung%3F?id=1">
                Anleitung
              </Link>
            </li>
            <li className="hover:text-primary-blue" onClick={toggleMenu}>
              <Link href="/kostenlose-vorlage">Kostenlose Vorlage</Link>
            </li>
            <li className="flex" onClick={toggleMenu}>
              <Link href="/online-erstellen">
                <Button1 title="Online erstellen" text />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
