"use client";

import Link from "next/link";

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-primary-green text-white ">
          <div className="h-full w-full max-w-8xl 2xl:max-w-9xl m-auto px-4 2xl:px-0">
            {/* upper footer */}
            <div className="py-10 grid col-span-2 lg:grid-cols-7 2xl:grid-cols-6 lg:gap-x-5 2xl:gap-x-20 gap-y-5">
              {/* Logo */}
              <div className="col-span-2 lg:col-span-4 2xl:col-span-3 grid lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <Link href="/">
                    <div className="mb-5 md:mb-0 text-md font-bold">
                      <img
                        loading="lazy"
                        className="h-8 lg:h-10 2xl:h-12 object-cover object-center"
                        src="/logo/white-logo.png"
                        alt="mietschuldenfreiheitsbescheinigung.de"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              {/* Quick Links */}
              <div className="col-span-1 lg:col-span-3 lg:space-y-10 ">
                <ul className="w-full text-[13px] lg:text-sm xl:text-xl justify-between font-medium text-secondary-text  lg:space-y-0 lg:space-x-2 space-y-4 lg:flex">
                  {[
                    {
                      title: "Startseite",
                      path: "/",
                    },
                    {
                      title: "Überblick",
                      path: "/uberblick/mietschuldenfreiheitsbescheinigung%20erklärt?id=0",
                    },
                    {
                      title: "Anleitung",
                      path: "/uberblick/Wie%20erhalte%20ich%20eine%20Mietschuldenfreiheits-bescheinigung%3F?id=1",
                    },
                    {
                      title: "Online erstellen",
                      path: "/online-erstellen",
                    },
                  ].map(({ title, path }, index) => (
                    <li key={index} className="hover:underline">
                      <Link href={path} className="flex gap-x-2">
                        <span className="whitespace-nowrap">{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Mobile Legal Links */}
              <div className="lg:hidden col-span-1 lg:col-span-4 2xl:col-span-3 lg:space-y-10 ">
                <ul className="flex flex-col text-[13px] xl:text-xl md:text-sm justify-between font-semibold text-secondary-text lg:space-y-0 md:space-x-2 space-y-4 md:flex">
                  <li className="hover:underline">
                    <Link
                      href="/datenschutz"
                      className="flex justify-end gap-x-2"
                    >
                      <span className="whitespace-nowrap">Datenschutz</span>
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <a
                      href="#"
                      onClick={() =>
                        window.UC_UI && window.UC_UI.showSecondLayer()
                      }
                      className="flex justify-end gap-x-2"
                    >
                      <span className="whitespace-nowrap">
                        Einwilligungen verwalten
                      </span>
                    </a>
                  </li>
                  <li className="hover:underline">
                    <Link
                      href="/impressum"
                      className="flex justify-end gap-x-2"
                    >
                      <span className="whitespace-nowrap">Impressum</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-300 px-4"></div>
            {/* lower footer */}
            <div className="px-4 lg:px-0 py-10 lg:max-w-9xl lg:m-auto flex flex-col lg:flex-row justify-between items-center text-center gap-y-5 text-[#CBEADF]">
              <div className="order-2 lg:order-1 text-sm lg:text-[1.125rem] 2xl:text-2xl font-medium">
                ©{new Date().getFullYear()}{" "}
                mietschuldenfreiheitsbescheinigung.de. Alle Rechte vorbehalten
              </div>

              <ul className="hidden order-1 lg:order-2 lg:flex justify-center items-center text-center lg:gap-x-6 2xl:gap-x-8 text-[11px] lg:text-[17px] 2xl:text-2xl text-sm gap-x-2 font-medium text-secondary-text">
                <li className="hover:underline">
                  <Link href="/datenschutz">Datenschutz</Link>
                </li>
                <li className="hover:underline">
                  <a
                    href="#"
                    onClick={() =>
                      window.UC_UI && window.UC_UI.showSecondLayer()
                    }
                  >
                    Einwilligungen verwalten
                  </a>
                </li>
                <li className="hover:underline">
                  <Link href="/impressum">Impressum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
