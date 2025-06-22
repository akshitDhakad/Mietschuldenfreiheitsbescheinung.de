"use client";

import React, { useEffect, useState, useRef } from "react";
import FaqSection from "@/components/FaqSection";
import { Button3 } from "@/utils/Button";
import PropTypes from "prop-types";
// icons
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { PiCertificate } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import { blogData, BlogSection } from "@/data/blog-data";

// Types
interface DownloadProps {
  title?: string;
  description?: string;
  link?: string;
  buttonTitle?: string;
}

const backgroundImages = [
  "information-banner_000.png",
  "information-banner_001.png",
  "information-banner_002.png",
  "information-banner_003.png",
];

export default function BlogPage() {
  const params = useParams();
  const slug = params.slug as string;
  const searchParams = useSearchParams();
  const [showAll, setShowAll] = useState(false);
  const id = searchParams.get("id");

  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    if (
      id &&
      typeof id === "string" &&
      parseInt(id) < backgroundImages.length
    ) {
      const imageIndex = parseInt(id);
      const url = `/banner/${backgroundImages[imageIndex]}`;
      setBgImage(url);
    }
  }, [id]);

  const blog = id ? blogData[id] || [] : [];

  const refMap = useRef<Record<string, React.RefObject<HTMLDivElement>>>({});
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const getRef = (title: string) => {
    if (!refMap.current[title]) {
      refMap.current[title] = React.createRef<HTMLDivElement>();
    }
    return refMap.current[title];
  };

  const scrollToSection = (title: string) => {
    const ref = refMap.current[title];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(title);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const title = entry.target.getAttribute("data-title");
          if (title) setActiveSection(title);
        }
      });
    }, observerOptions);

    // Observe all refs
    Object.values(refMap.current).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [blog]);

  return (
    <>
      <div>
        <title>{slug} — Ratgeber zur Mietschuldenfreiheitsbescheinigung</title>
        <meta
          name="description"
          content="Laden Sie hier kostenlose Vorlagen für Mietschuldenfreiheitsbescheinigungen herunter — als ausfüllbares PDF oder einfache Version. Alternativ: bequem digital erstellen mit mietstatus.de."
        />
        <meta
          name="keywords"
          content="Mietschuldenfreiheitsbescheinigung, Vorlage Mietbescheinigung, Mietnachweis, Infos Mietstatus, mietschuldenfreiheitsbescheinigung.de"
        />
        <meta name="author" content="mietschuldenfreiheitsbescheinigung" />
        <link
          rel="canonical"
          href={`https://www.mietschuldenfreiheitsbescheinigung.de/uberblick/${slug}`}
        />
      </div>
      <div>
        {/* Blog Header */}
        <section
          className="relative bg-cover bg-no-repeat bg-center h-[310px] lg:h-[100vh] xl:h-[696px] 2xl:h-[896px]"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #0F1A1A 0%, rgba(15, 26, 26, 0) 60%)",
            }}
          />
        </section>

        {/* Blog Content */}
        <section>
          <div className="sticky top-10 self-start bg-white transform lg:-translate-y-32 w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl m-auto px-4 py-10 space-y-10 grid lg:grid-cols-3 gap-x-12 items-start border-b-2 border-[#00000066] border-dashed">
            {/* Left  */}
            <div className="lg:col-span-2 space-y-10 lg:px-4 2xl:px-16 lg:overflow-y-auto lg:max-h-[calc(100vh)] pr-4">
              <div className="flex items-center lg:gap-x-4 text-xs lg:text-lg 2xl:text-xl tracking-normal">
                <span className="text-primary-text-black">Startseite</span>
                <span className="text-primary-text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
                <span className="underline decoration-primary-green text-primary-green break-words">
                  {slug}
                </span>
              </div>
              {blog?.map((section: BlogSection, index: number) => (
                <div
                  key={index}
                  id={section?.title}
                  data-title={section.title}
                  ref={getRef(section.title)}
                  className="space-y-5"
                >
                  {section?.img && (
                    <div className="lg:h-80 2xl:h-[555px]">
                      <Image
                        loading="lazy"
                        src={section?.img}
                        className="h-full w-full object-cover object-center"
                        alt={section?.img}
                        width={800}
                        height={500}
                      />
                    </div>
                  )}
                  <h2
                    className={`text-primary-black text-2xl ${
                      activeSection === section.title
                        ? "md:text-4xl md:leading-45 lg:text-5xl lg:leading-57 2xl:text-[55px] 2xl:leading-70"
                        : "md:text-3xl md:leading-35 lg:text-4xl lg:leading-50 2xl:text-52 2xl:leading-66"
                    } break-words tracking-normal lg:tracking-wide font-normal leading-normal hyphens-auto`}
                    lang="de"
                  >
                    {section?.title}
                  </h2>
                  {section?.description &&
                    section?.description?.map((i: string, index: number) => (
                      <p
                        key={index}
                        className={`text-primary-black text-base lg:text-xl 2xl:text-28 2xl:leading-50 tracking-normal lg:tracking-wide break-words`}
                      >
                        {i}
                      </p>
                    ))}
                  {section?.content &&
                    section?.content?.map((i, index: number) => (
                      <React.Fragment key={index}>
                        <h2 className="font-semibold lg:text-xl 2xl:text-[1.75rem] tracking-normal  lg:tracking-wide leading-normal 2xl:leading-70 break-words">
                          {i?.heading}
                        </h2>
                        <p className="ps-2 text-base lg:text-xl 2xl:text-2xl tracking-normal lg:tracking-wide break-words">
                          {i?.description}
                        </p>
                        <ul className="space-y-4 list-disc list-inside">
                          {i.list &&
                            i?.list.map((lItem: string, lIndex: number) => (
                              <li
                                className="tracking-normal lg:tracking-wide text-base lg:text-xl 2xl:text-2xl break-words"
                                key={lIndex}
                              >
                                {lItem}
                              </li>
                            ))}
                        </ul>
                        {i.table && (
                          <table className="border-collapse rounded-2xl border border-gray-400 text-[0.38rem] lg:text-sm text-left text-pretty">
                            <thead>
                              <tr>
                                {i.table?.map((col, index: number) => (
                                  <th
                                    key={index}
                                    className="text-center font-semibold border border-gray-300 py-2 lg:p-4 bg-secondary-green"
                                  >
                                    {col.th}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {i.table &&
                                i.table[0]?.td.map((_, rowIndex: number) => (
                                  <tr key={rowIndex}>
                                    {i.table &&
                                      i.table.map((col, colIndex: number) => (
                                        <td
                                          key={colIndex}
                                          className="text-[#475569] text-center border border-gray-300 py-2 lg:p-4 tracking-normal lg:tracking-wide"
                                        >
                                          {col.td[rowIndex]}
                                        </td>
                                      ))}
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        )}
                      </React.Fragment>
                    ))}

                  {section?.section && <Download link="/kostenlose-vorlage" />}

                  {section?.list && (
                    <ul className="space-y-4 list-disc list-inside">
                      {section?.list.map((item: string, lIndex: number) => (
                        <li
                          className="tracking-normal lg:tracking-wide text-base lg:text-xl 2xl:text-2xl break-words"
                          key={lIndex}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section?.tickList && (
                    <ul className="space-y-4 list-none ">
                      {section?.tickList.map((item: string, lIndex: number) => (
                        <li
                          className="flex items-start gap-x-2 lg:gap-x-4 tracking-normal lg:tracking-wide text-base lg:text-xl 2xl:text-2xl break-words"
                          key={lIndex}
                        >
                          <FaCheck className="shrink-0 mt-1 lg:mt-2" /> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section?.subDescription &&
                    section?.subDescription?.map((i: string, index: number) => (
                      <p
                        key={index}
                        className="text-primary-black text-base lg:text-xl 2xl:text-28 2xl:leading-50 tracking-wide break-words"
                      >
                        {i}
                      </p>
                    ))}
                  {section?.para &&
                    section?.para?.map((i, index: number) => (
                      <p
                        key={index}
                        className="ps-2 text-base lg:text-xl 2xl:text-2xl tracking-wide break-words"
                      >
                        <span className="font-bold">{i.title}</span>{" "}
                        {i.description}
                      </p>
                    ))}
                </div>
              ))}
            </div>
            {/* Right */}
            <div className="hidden lg:block space-y-10 row-span-2 bg-[#fcfcfc] m-0 sticky top-20 self-start">
              <div className="border-b-2 border-dashed py-4">
                <h6 className="mb-8 px-4 text-2xl">Inhaltsverzeichnis</h6>
                <div className="space-y-4">
                  {(showAll ? blog : blog.slice(0, 4))?.map(
                    (section: BlogSection, index: number) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(section.title)}
                        className={`relative block text-start w-full mb-2 px-4 font-normal text-lg lg:text-base 2xl:text-2xl tracking-wide transition-colors duration-300 ${
                          activeSection === section.title
                            ? "text-black"
                            : "text-secondary-black"
                        }`}
                      >
                        <span
                          className={`absolute -left-2 top-1/2 -translate-y-1/2 h-full w-1.5 bg-primary-green transition-all duration-300 ${
                            activeSection === section.title
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        ></span>
                        {section.title}
                      </button>
                    )
                  )}
                </div>
                {blog?.length >= 3 && (
                  <div className="text-center mt-4">
                    <button
                      className="text-primary-green text-base flex items-center gap-x-2 mx-auto"
                      onClick={() => setShowAll(!showAll)}
                    >
                      Mehr anzeigen <IoIosArrowDown />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <div className="max-h-min bg-primary-green text-white px-10 py-12 space-y-4 bg-cover bg-center bg-[url('/img/freetemplate-background.png')]">
                  <PiCertificate className="size-12 2xl:size-20" />
                  <h6 className="text-2xl 2xl:text-4xl">
                    Erhalte deine Bescheinigung in Minuten, nicht Tagen
                  </h6>
                </div>
                <Link
                  href={"/online-erstellen"}
                  className="w-full flex items-center text-xl 2xl:text-2xl text-primary-green font-semibold"
                >
                  <span className="flex-1 text-center">Online erstellen </span>
                  <span className="p-5 bg-secondary-green">
                    <ArrowRightIcon className={"size-8"} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white fixed lg:hidden bottom-0 right-0 left-0 w-full ">
            <div className=" max-h-min bg-primary-green text-white  px-10 py-12 space-y-4 bg-cover bg-center bg-[url('/img/freetemplate-background.png')]">
              <PiCertificate className="size-12 2xl:size-20 text-[#CBEADF]" />
              <h6 className="text-2xl 2xl:text-4xl">
                Erhalte deine Bescheinigung in Minuten, nicht Tagen
              </h6>
            </div>
            <Link
              href={"/online-erstellen"}
              className="w-full flex items-center text-xl 2xl:text-2xl text-primary-green font-semibold"
            >
              <span className="flex-1 text-center">Online erstellen </span>
              <span className="p-5 bg-secondary-green">
                <ArrowRightIcon className={"size-8"} />
              </span>
            </Link>
          </div>
        </section>
        {/* These components need to be created or imported */}
        <div className="card-component-placeholder"></div>
        <FaqSection />
      </div>
    </>
  );
}

function Download({
  title = "Gratis Vorlagen für deine Mietbescheinigung",
  description = "Kostenlose Bescheinigungsvorlage downloaden und sofort verwenden",
  link = "/kostenlose-vorlage",
  buttonTitle = "Vorlage herunterladen",
}: DownloadProps) {
  return (
    <section className="bg-secondary-green relative overflow-hidden bg-[url('/banner/nutze.png')] bg-cover bg-no-repeat bg-center">
      <div className="min-h-min lg:h-[375px] 2xl:h-[410px] max-w-9xl m-auto py-10 lg:px-4 2xl:py-20 mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="absolute top-0 left-0 z-0">
          <Image
            loading="lazy"
            src="/banner/nutze-circle-1.png"
            alt="nutze"
            className="w-full"
            width={500}
            height={500}
          />
        </div>
        {/* Left Content */}
        <div className="max-w-xl 2xl:max-w-2xl p-4 z-10 lg:absolute space-y-2 2xl:space-y-6 text-secondary-black">
          <h2 className="text-primary-green text-2xl md:text-3xl lg:text-4xl md:leading-45 lg:leading-[50px] 2xl:text-5xl 2xl:leading-[60px] break-words tracking-normal md:tracking-wider font-normal leading-normal hyphens-auto text-center lg:text-start">
            {title}
          </h2>
          <p className="lg:w-[90%] text-center lg:text-start text-primary-text-black text-base lg:text-xl 2xl:text-2xl 2xl:leading-45">
            {description}
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link href={link} className="mt-5 lg:mt-10">
              <Button3
                title={buttonTitle}
                maxWidth="max-w-xs sm:max-w-xs"
                textCss="text-sm 2xl:text-xl border border-primary-green"
                iconCss="text-sm 2xl:text-xl border border-primary-green"
              />
            </Link>
          </div>
        </div>
        <div className="bottom-0 z-10 min-h-[300px] max-h-[500px]">
          {/* Image 1 */}
          <div className="absolute right-8 lg:-right-32 2xl:-right-40 bottom-0">
            <Image
              loading="lazy"
              src="/img/template-1.png"
              alt="template 1"
              className="min-h-[325px] h-[325px] lg:max-h-[350px] 2xl:max-h-[400px] object-cover"
              width={300}
              height={325}
            />
          </div>

          {/* Image 2 */}
          <div className="absolute right-0 lg:-right-12 2xl:-right-24 bottom-0">
            <Image
              loading="lazy"
              src="/img/template-2.png"
              alt="template 2"
              className="min-h-[300px] h-[312px] lg:max-h-[325px] 2xl:max-h-[350px]"
              width={300}
              height={312}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Download.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  buttonTitle: PropTypes.string,
};
