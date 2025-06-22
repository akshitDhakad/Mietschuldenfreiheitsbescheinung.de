"use client";

import Link from "next/link";
import { MdMenuBook } from "react-icons/md";
import Badge from "../utils/Badge";

function Homebanner() {
  return (
    <section>
      {/* Hinweisbanner Testbetrieb */}
      <div className="bg-[#f5ff00] text-black font-normal lg:font-semibold px-6 py-3 rounded-md text-sm lgtext-base xl:text-xl shadow-md">
        Die Seite befindet sich im Testbetrieb. Einige Funktionen sind deshalb
        nur eingeschränkt verfügbar.
      </div>

      <div className="h-full lg:my-0 mx-auto bg-[url(/img/rectangles.png)] grid grid-cols-1 md:grid-cols-2">
        {/* left */}
        <div className="content-center">
          <div className="w-full lg:max-w-2xl 2xl:max-w-3xl mx-auto space-y-5 2xl:space-y-10 px-4 py-4 lg:px-6">
            <Badge
              icon={
                <MdMenuBook className="size-6 lg:size-8 shrink-0 font-bold" />
              }
              title={"Alles über die Mietschuldenfreiheitsbescheinigung"}
            />
            <h1 className="text-28 lg:text-5xl 2xl:text-64 font-normal leading-normal lg:leading-66 2xl:leading-80 text-primary-black">
              Die Mietschulden-freiheitsbescheinigung: <br /> Alles, was du als
              Mieter wissen solltest
            </h1>
            <p className="w-full lg:max-w-[90%] xl:max-w-full text-sm lg:text-base 2xl:text-lg lg:leading-24 2xl:leading-32 font-normal tracking-wider lg:tracking-wide text-secondary-black">
              Viele Vermieter verlangen eine Mietschuldenfreiheitsbescheinigung
              – wir erklären, was das genau ist, was in der Bescheinigung steht
              - und wie die Mietbescheinigung zu deinem Vorteil werden kann.
            </p>
            <div className="flex items-center gap-x-5 lg:gap-x-10">
              <Link href="/uberblick/mietschuldenfreiheitsbescheinigung%20erklärt?id=0">
                <button
                  className={`border bg-white py-4 px-5 text-sm lg:text-lg 2xl:text-2xl font-regular text-primary-green flex items-center gap-x-4`}
                >
                  Mehr erfahren{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 xl:h-6 xl:w-6 text-primary-green"
                  >
                    <path
                      d="M3.5 22.75H20.5C20.91 22.75 21.25 22.41 21.25 22C21.25 21.59 20.91 21.25 20.5 21.25H3.5C3.09 21.25 2.75 21.59 2.75 22C2.75 22.41 3.09 22.75 3.5 22.75Z"
                      fill="#024846"
                    />
                    <path
                      d="M5.00055 18.2504C5.19055 18.2504 5.38055 18.1804 5.53055 18.0304L19.5305 4.03043C19.8205 3.74043 19.8205 3.26043 19.5305 2.97043C19.2405 2.68043 18.7605 2.68043 18.4705 2.97043L4.47055 16.9704C4.18055 17.2604 4.18055 17.7404 4.47055 18.0304C4.62055 18.1804 4.81055 18.2504 5.00055 18.2504Z"
                      fill="#024846"
                    />
                    <path
                      d="M19 14.52C19.41 14.52 19.75 14.18 19.75 13.77V3.5C19.75 3.09 19.41 2.75 19 2.75H8.73C8.32 2.75 7.98 3.09 7.98 3.5C7.98 3.91 8.32 4.25 8.73 4.25H18.25V13.77C18.25 14.18 18.59 14.52 19 14.52Z"
                      fill="#024846"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Right  */}
        <div className="flex items-center justify-end">
          <div>
            <div className="w-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[650px] xl:max-h-[700px] 2xl:max-h-[720px] overflow-hidden">
              <img
                loading="lazy"
                className="h-full w-full object-contain object-center"
                src="/banner/home-banner.png"
                alt="home-banner.png"
              />
            </div>

            <div className="bg-[#E0F3EC] text-primary-green px-4 py-5 lg:px-8 lg:py-10 flex items-center justify-around">
              <h4 className="text-base lg:text-2xl 2xl:text-32 max-w-sm 2xl:max-w-xl font-normal leading-normal 2xl:leading-45">
                Wie komme ich an eine Bescheinigung?
              </h4>
              <Link href="/uberblick/Wie erhalte ich eine Mietschuldenfreiheitsbescheinigung%3F?id=1">
                <button className="text-xs lg:text-xl 2xl:text-2xl border border-primary-green px-2 py-2.5 lg:px-5 lg:py-4">
                  Weiterlesen...
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homebanner;
