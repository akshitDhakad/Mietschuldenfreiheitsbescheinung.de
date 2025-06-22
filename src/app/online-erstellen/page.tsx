"use client";
import { useRef, useState } from "react";
import FaqSection from "@/components/FaqSection";
import { Button2, Button3 } from "@/utils/Button";
import PropTypes from "prop-types";
import Badge from "@/utils/Badge";
import Testinomials from "@/components/TestComponent";
import { Link } from "react-router-dom";

// icons
import { PiLightning } from "react-icons/pi";
import { PiCertificate } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { MdMenuBook } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Star = ({ css }: { css: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${css}`}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Star.propTypes = {
  css: PropTypes.string,
};

function InformationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const features = [
    "Geringerer Aufwand für Mieter",
    "Weniger Aufwand für Vermieter",
    "Professionelle Mietbescheinigung",
    "Identitätsprüfung via SMS-TAN",
    "Möglichkeit der Überprüfung",
    "Mehrere Versandoptionen",
    "Sofort als PDF verfügbar",
    "Zeitgemäßes Verfahren",
  ];

  const steps = [
    {
      img: "/img/infomation-boy.png",
      title: "Deine Daten eingeben",
      description:
        "Du füllst das Formular mit deinen Daten, den Daten zu deiner Wohnung, sowie der E-Mail-Adresse deines Vermieters aus. Bestätige deine Identität mit einer SMS-TAN - danach kannst du deine Anfrage schon absenden.",
    },
    {
      img: "/img/infomation-boy-2.png",
      title: "Anfrage absenden",
      description:
        "mietstatus.de setzt sich per E-Mail mit deinen Vermieter und bittet ihn um Unterstützung bei der Erstellung deiner Mietbescheinigung. ",
    },
    {
      img: "/img/infomation-boy-3.png",
      title: "Bestätigung durch den Vermieter",
      description:
        "Dein Vermieter prüft deine Angaben und bestätigt deine Mietzahlungen - mit ganz wenigen Klicks. Er unterschreibt die Bescheinigung und bestätigt seine Identität ebenfalls per SMS-TAN.",
    },
    {
      img: "/img/infomation-boy-4.png",
      title: "Zahlung",
      description:
        "Sobald alles bestätigt ist, bittet dich mietstatus.de um deine Zahlung. Du zahlst bequem mit einer Methode Deiner Wahl und entscheidest, auf welchem Weg du die Bescheinigung erhalten möchtest.",
    },
    {
      img: "/img/infomation-boy-5.png",
      title: "Bescheinigung erhalten",
      description:
        "Nach Deiner Zahlung erhältst du die Bescheinigung sofort per E-Mail – auf Wunsch zusätzlich in wenigen Tagen per Post.",
    },
  ];

  return (
    <>
      <HeroSection />
      <section>
        <div className="sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl px-4 py-4 flex justify-center">
          <div className="m-auto">
            <img
              loading="lazy"
              className="h-8 lg:h-12 object-cover object-center"
              src="/img/mietstatus.png"
              alt="mietstatus.png"
            />
          </div>
        </div>
      </section>
      {/* video section  */}
      <section className="bg-primary-green bg-cover bg-center bg-[url('/img/freetemplate-background.png')] overflow-hidden">
        <div className="w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl mx-auto px-4 2xl:px-0 py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-y-10 items-center">
          {/* Video */}
          <div className="order-2 md:order-1 h-full w-full flex justify-center md:p-5 lg:p-10">
            <div className="w-full h-full relative">
              {!isPlaying && (
                <img
                  loading="lazy"
                  src="/img/video-preview.png"
                  alt="Video preview"
                  className="w-full h-full min-h-[250px] max-h-[518px]s object-contain cursor-pointer"
                  onClick={handlePlay}
                />
              )}
              {!isPlaying && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <button
                    className="h-6 lg:h-16 rotate-[60deg]"
                    onClick={() => handlePlay()}
                  >
                    <img
                      loading="lazy"
                      className="h-full object-cover object-center"
                      src={"/icons/playbutton.svg"}
                      alt="Play Button"
                    />
                  </button>
                </div>
              )}

              <video
                ref={videoRef}
                className={`w-full h-full min-h-[250px] max-h-[518px] object-contain ${
                  !isPlaying ? "hidden" : ""
                }`}
                src="/video/introduction_video.mp4"
                controls
                muted
                playsInline
                onPause={handlePause}
              />
            </div>
          </div>
          {/* Text content */}
          <div className="order-1 md:order-2 text-white space-y-6 2xl:space-y-10">
            <h6 className="text-lg md:text-2xl lg:text-3xl 2xl:text-38 font-normal xl:leading-57 2xl:leading-70 tracking-wide lg:tracking-wider break-words">
              mietstatus.de ist der einfachste Weg zur digitalen
              Mietschuldenfreiheitsbescheinigung.
            </h6>
            <p className="text-sm font-thin xl:text-xl 2xl:text-2xl leading-24 lg:leading-32 xl:leading-42 2xl:leading-50 lg:tracking-wider">
              Du gibst deine Daten online ein, bestätigst deine Identität per
              SMS, und dein aktueller oder ehemaliger Vermieter prüft und
              unterschreibt die Bescheinigung digital. Schnell, sicher und
              rechtlich geprüft.
            </p>
            <ul className="space-y-4 2xl:space-y-8 text-base xl:text-xl 2xl:text-28  text-[#CBEADF]">
              <li className="flex items-center gap-x-2 lg:gap-x-4 ">
                <FaRegCircleCheck className="shrink-0" />
                100% digitaler und bewährter Prozess
              </li>
              <li className="flex items-center gap-x-2 lg:gap-x-4">
                <FaRegCircleCheck className="shrink-0" />
                Wegen erhöhter Sicherheit von Vermietern gerne gesehen
              </li>
              <li className="flex items-center gap-x-2 lg:gap-x-4">
                <FaRegCircleCheck className="shrink-0" />
                Datenschutzkonform und sicher
              </li>
            </ul>
            <div>
              <Link to={"https://mietstatus.de/"} className={"max-w-sm"}>
                <Button2
                  title={"Bescheinigung erstellen"}
                  textCss={
                    "border border-secondary-green text-white text-sm lg:text-md 2xl:text-2xl"
                  }
                  iconCss={
                    "border border-secondary-green text-xs lg:text-md 2xl:text-2xl text-primary-green"
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* card section */}
      <section>
        <div className="h-full w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl m-auto px-4 2xl:px-0 my-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-x-20">
          <div className="md:col-span-2 text-center lg:text-start">
            <Badge
              icon={<PiCertificate className="size-6 shrink-0 font-bold" />}
              title={"Anleitung"}
            />
          </div>
          <div className="text-center lg:text-start">
            <h3 className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl lg:leading-50 xl:leading-66 2xl:leading-80 font-normal">
              So einfach funktioniert mietstatus.de - <br /> in 5 einfachen
              Schritten
            </h3>
          </div>
          <div className="text-center lg:text-start content-end">
            <p className="text-secondary-black text-sm lg:text-lg xl:text-xl 2xl:text-28 leading-32 xl:leading-45 2xl:leading-50">
              Der digitale Service führt dich Schritt für Schritt durch den
              Prozess: Von der Eingabe deiner Daten bis zur unterschriebenen
              Bescheinigung – vollständig digital, rechtssicher und mit
              Verifizierung beider Parteien.
            </p>
          </div>
          <div className="space-y-5">
            {steps.map(({ title, description }, index) => (
              <div
                key={title}
                className={`lg:px-4 lg:py-2.5 2xl:px-6 2xl:py-5  2xl:space-y-4 shadow cursor-pointer transition-all duration-300`}
                onClick={() => setActiveTab(index)}
              >
                <h5 className="px-2 py-3 xl:py-4 text-lg lg:text-xl xl:text-2xl 2xl:text-32 flex items-center gap-x-2 lg:gap-x-4">
                  <span className="text-primary-green">0{index + 1}</span>{" "}
                  {title}
                </h5>
                <div
                  className={`${
                    activeTab === index ? "block space-y-5" : "hidden"
                  }`}
                >
                  <p
                    className={`px-4 lg:px-0 text-secondary-black font-normal text-sm  xl:text-xl 2xl:text-2xl xl:leading-32 2xl:leading-42`}
                  >
                    {description}
                  </p>
                  <img
                    loading="lazy"
                    className="block md:hidden object-contain max-h-[800px]"
                    src={"/img/infomation-boy.png"}
                    alt={`step-${activeTab + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <img
              loading="lazy"
              className="object-contain max-h-[800px]"
              src={"/img/infomation-boy.png"}
              alt={`step-${activeTab + 1}`}
            />
          </div>
        </div>
      </section>
      {/* Manuell vs. digital */}
      <section className="shadow-inner-lg border-b">
        <div className="h-full w-full sm:max-w-wider lg:max-w-7xl 2xl:max-w-9xl m-auto px-4 pt-10 2xl:px-0 lg:mt-10 space-y-10 lg:space-y-20">
          <div className="max-w-6xl m-auto space-y-5 text-center">
            <Badge
              icon={
                <PiCertificate className="size-4 lg:size-6 shrink-0 font-bold" />
              }
              title={"Vergleich"}
            />

            <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl 2xl:leading-80 font-normal">
              Manuell oder digital?
            </h3>
            <p className="text-secondary-black text-sm lg:text-xl leading-24 2xl:text-28 tracking-normal lg:tracking-wide break-words">
              Um an eine Mietschuldenfreiheitsbescheinigung zu kommen, hast du
              zwei Optionen:
            </p>
          </div>
          <div className="bg-white border border-[#E3E3E3] relative max-w-8xl mx-auto grid md:grid-cols-2 shadow-md">
            <span className="bg-white hidden lg:inline absolute border-s border-t border-e border-[#E3E3E3] text-primary-green z-10 px-10 py-2.5 bottom-0 left-1/2 -translate-x-1/2 text-center shadow-lg rounded-t-2xl text-sm lg:text-xl 2xl:text-2xl whitespace-nowrap">
              Möglichkeiten im Überblick{" "}
            </span>
            {/* left card  */}
            <div className="shadow-inner-lg bg-white p-4 py-10 lg:px-8 lg:pt-12 space-y-4 xl:space-y-8 lg:pb-24">
              <GoPerson className="size-12 lg:size-16 xl:size-24 text-primary-green shrink-0 font-bold" />
              <h6 className="text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl lg:leading-50 2xl:leading-68">
                Manuelle Anfrage an bisherigen Vermieter stellen
              </h6>
              <p className="text-[#878C8C] text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-24">
                Etwas umständlich, eventuell langwierig und nicht digital – das
                herkömmliche Verfahren.
              </p>
              <ul className="space-y-2 2xl:space-y-8 text-[#878C8C] font-medium text-sm lg:text-lg xl:text-xl 2xl:text-28">
                <li className="flex items-center gap-x-2 lg:gap-x-4 text-primary-green">
                  <FaRegCircleCheck className="shrink-0" />
                  Kostenlos
                </li>
                <li className="flex items-start gap-x-2 lg:gap-x-4">
                  <IoIosCloseCircleOutline className="mt-1 2xl:mt-2 shrink-0 font-bold" />
                  Einige manuelle Schritte erforderlich
                </li>
                <li className="flex items-start gap-x-2 lg:gap-x-4">
                  <IoIosCloseCircleOutline className="mt-1 2xl:mt-2 shrink-0 font-bold" />
                  Aufwendig und langsam
                </li>
                <li className="flex items-start gap-x-2 lg:gap-x-4">
                  <IoIosCloseCircleOutline className="mt-1 2xl:mt-2 shrink-0 font-bold" />
                  keine Überprüfung möglich
                </li>
                <li className="flex items-center gap-x-2 lg:gap-x-4">
                  <IoIosCloseCircleOutline className="shrink-0" />
                  Papier oder PDF selbst verschicken
                </li>
              </ul>
            </div>
            {/* Right Card  */}
            <div className="shadow-inner-lg relative bg-primary-green text-white p-4 py-10 lg:px-10 lg:pt-12 space-y-4 xl:space-y-8 lg:pb-24">
              <span className="absolute z-10 top-0 left-10 -translate-y-1/2 px-5 py-2.5 bg-secondary-green text-primary-green text-base lg:text-lg xl:text-2xl font-medium shadow">
                Schnell & Rechtssicher
              </span>
              <PiLightning
                style={{ marginTop: "0px" }}
                className="mt-0 size-12 lg:size-16 xl:size-24 shrink-0 font-bold"
              />
              <h6 className="text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl lg:leading-50 2xl:leading-68">
                Bescheinigung schnell und sicher online erstellen
              </h6>
              <p className="text-[#CBEADF] text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-24 tracking-normal">
                Die schnelle und zeitgemäße Lösung, um eine
                Mietschuldenfreiheitsbescheinigung zu erhalten.
              </p>
              <ul className="space-y-2 2xl:space-y-8 text-[#CBEADF] font-medium text-sm lg:text-lg xl:text-xl 2xl:text-28">
                <li className="flex items-center gap-x-2 lg:gap-x-4">
                  <FaRegCircleCheck className="shrink-0" />
                  100% online und sofort verfügbar
                </li>
                <li className="flex items-center gap-x-2 lg:gap-x-4">
                  <FaRegCircleCheck className="shrink-0" />
                  Deutschlandweit bei Vermietern anerkannt
                </li>
                <li className="flex items-center gap-x-2 lg:gap-x-4 ">
                  <FaRegCircleCheck className="shrink-0" />
                  Überprüfung durch einmaligen Code möglich
                </li>

                <li className="flex items-center gap-x-2 lg:gap-x-4">
                  <FaRegCircleCheck className="shrink-0" />
                  Sicher und nachvollziehbar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Kostenlose Vorlage */}
      <section className="hidden md:block">
        <div className="max-w-8xl 2xl:max-w-9xl px-4 2xl:px-0 mx-auto bg-white">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="text-left text-sm md:text-base">
                <th className=" px-4 py-10 font-medium text-gray-700">{""}</th>
                <th className="border-s border-gray-200 px-4 py-10 font-medium text-primary-black text-center text-2xl lg:text-3xl 2xl:text-40">
                  Kostenlose Vorlage
                </th>
                <th className="border-s bg-light-green border-gray-200 p-4 font-medium text-gray-700 text-center">
                  <img
                    loading="lazy"
                    className="object-center object-cover m-auto"
                    src="/img/mietstatus-blue.png"
                    alt="mietstatus"
                  />
                </th>
              </tr>
              <tr className="border-t border-gray-200 text-left text-sm md:text-base">
                <th className="px-4 py-10 font-medium text-primary-black text-2xl lg:text-3xl 2xl:text-40">
                  Merkmale
                </th>
                <th className="border-s border-gray-200 px-4 py-10 font-medium text-gray-700 text-center">
                  <div className="mt-2 flex items-center justify-center">
                    <Link
                      to={"/kostenlose-vorlage"}
                      className="max-w-sm m-auto"
                    >
                      <Button3
                        maxWidth={"max-w-min m-auto"}
                        title={"Vorlage herunterladen"}
                        textCss={"text-md 2xl:text-xl"}
                        iconCss={"text-lg 2xl:text-2xl text-primary-green"}
                      />
                    </Link>
                  </div>
                </th>
                <th className="hidden md:block border-s bg-light-green border-gray-200 px-4 py-10 font-medium text-gray-700 text-center">
                  <div className="mt-2 flex items-center justify-center">
                    <Link to={"https://mietstatus.de/"}>
                      <Button2
                        maxWidth={"max-w-min ms-auto"}
                        title={"Online erstellen"}
                        textCss={"2xl:text-2xl"}
                        iconCss={"2xl:text-2xl text-primary-green"}
                      />
                    </Link>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {features.map((feature, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-4 py-8 xl:py-10 flex items-center justify-between text-center text-gray-600 text-xl xl:text-3xl 2xl:text-38">
                    {feature}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="md:size-4 lg:size-6 2xl:size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                  </td>
                  <td className="px-4 border-s border-gray-200 text-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="md:size-4 lg:size-6 2xl:size-8 m-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="bg-light-green px-4 border-s border-gray-200 text-center text-primary-green font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="md:size-4 lg:size-6 2xl:size-8 m-auto font-bold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Kostenlose Vorlage Mobileview  */}
      <section className="md:hidden">
        <div className="bg-white w-full max-w-8xl 2xl:max-w-9xl px-4 2xl:px-0 mx-auto space-y-5 py-4">
          <div className="text-center text-sm md:text-base">
            <h6 className="border-s border-gray-200 px-4 py-5 font-medium text-gray-700 text-center text-2xl 2xl:text-4xl">
              Kostenlose Vorlage
            </h6>
            <Link to={"/kostenlose-vorlage"} className="max-w-xs m-auto">
              <Button3 title={"Vorlage herunterladen"} />
            </Link>
          </div>

          <div className="text-sm md:text-base">
            {features.map((feature, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-2 py-4 flex items-center justify-between text-gray-600">
                  {feature}{" "}
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
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                </td>
                <td className="px-4 border-s border-gray-200 text-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </div>
        </div>
        <div className="bg-[#EFF9F5] max-w-9xl px-4 mx-auto space-y-5 py-4">
          <div className="text-center text-sm md:text-base space-y-4">
            <div className="max-w-xs m-auto">
              <img
                loading="lazy"
                className="h-8 lg:h-12 object-center object-cover m-auto"
                src="/img/mietstatus-blue.png"
                alt="mietstatus"
              />
            </div>
            <Link to={"https://mietstatus.de/"}>
              <Button2
                maxWidth={"max-w-min m-auto"}
                title={"Online erstellen"}
              />
            </Link>
          </div>

          <div className="text-sm md:text-base">
            {features.map((feature, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-2 py-4 flex items-center justify-between text-gray-600">
                  {feature}{" "}
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
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                </td>
                <td className="px-4 border-s border-gray-200 text-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </div>
        </div>
      </section>
      {/* Sicherheit bei mietstatus.de */}
      <section>
        <div className="bg-primary-green text-white bg-cover bg-center bg-[url('/img/freetemplate-background.png')]">
          <div className="w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl px-4 2xl:px-0 py-10 2xl:py-20 mx-auto  space-y-8 2xl:space-y-12">
            <div className="flex items-center justify-center md:justify-start">
              <h6 className="px-4 lg:px-8 py-2.5 bg-[#185554] border border-[#0248470F] inline-flex items-center gap-x-4 text-base lg:text-xl 2xl:text-2xl whitespace-nowrap">
                <span>
                  <GoShieldCheck className="shrink-0 font-bold" />
                </span>{" "}
                Sicherheit bei mietstatus.de
              </h6>
            </div>
            <div className="flex flex-col md:flex-row gap-y-5 items-center lg:justify-between">
              <h2 className="max-w-2xl lg:max-w-4xl 2xl:max-w-5xl text-[#FFFFFF] text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal lg:leading-50 xl:leading-70 2xl:leading-80 text-center md:text-start tracking-normal lg:tracking-wider">
                Deine Daten in besten Händen: <br /> Datensicherheit und
                Datenschutz
              </h2>
              <Link to={"https://mietstatus.de/datenschutz"}>
                <Button2
                  maxWidth="max-w-min m-auto"
                  title={"Datenschutzerklärung"}
                  textCss={
                    "2xl:text-2xl bg-[#1B5A59] border border-secondary-green"
                  }
                  iconCss={
                    "2xl:text-2xl text-primary-green border border-secondary-green"
                  }
                />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-x-10 gap-y-5">
              {[
                {
                  img: "/icons/folder-lock.png",
                  title: "Verschlüsselte Übertragung",
                  description:
                    "Alle Daten werden verschlüsselt übermittelt – vom ersten Klick bis zur fertigen Bescheinigung.",
                },
                {
                  img: "/icons/lock.png",
                  title: "Datenschutz",
                  description:
                    "mietstatus.de hält sich an alle Datenschutzrichtlinien und garantiert, dass alle Informationen ausschließlich zwischen Mietern und Vermietern ausgetauscht werden.",
                },
                {
                  img: "/icons/folder-lock.png",
                  title: "Regelmäßige Sicherheitsüberprüfungen",
                  description:
                    "Um unbefugten Zugriff zu verhindern, werden deine Daten mit modernsten Technologien verschlüsselt. Alle Daten werden bei mietstatus.de ausschließlich auf europäischen Servern gespeichert.",
                },
              ].map(({ img, title, description }) => (
                <div
                  key={title}
                  className="bg-[#185554] border-2 border-[#FFFFFF36] space-y-2 xl:space-y-5 p-4 py-10 xl:px-10 xl:py-12 2xl:py-16"
                >
                  <div className="h-full max-h-16 lg:max-h-20 xl:max-h-32 2xl:max-h-36 inline-block m-auto">
                    <img
                      loading="lazy"
                      className="h-full"
                      src={img}
                      alt="Verschlüsselte Übertragung"
                    />
                  </div>
                  <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-32 font-normal leading-normal lg:tracking-wider lg:leading[40px] 2xl:leading-45">
                    {title}
                  </h2>
                  <p className="text-sm  xl:text-xl 2xl:text-2xl text-[#CBEADFA6] tracking-normal lg:tracking-wider">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Kundenstimmen */}
      <section>
        <div className="bg-[#FCFCFC]">
          <div className="w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl py-10 lg:py-20 mx-auto px-4 space-y-5 lg:space-y-8 2xl:space-y-12">
            <div className="flex justify-center lg:justify-start">
              <Badge
                icon={
                  <BiSolidMessageRoundedDetail className="shrink-0 font-bold" />
                }
                title={"Kundenstimmen"}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-x-10 justify-between gap-y-5 text-primary-text-black">
              <div className="md:max-w-xl lg:max-w-2xl space-y-4 text-center lg:text-start tracking-normal lg:tracking-wider">
                <h2 className="text-primary-black text-2xl lg:text-5xl 2xl:text-6xl font-normal leading-normal lg:leading-50 xl:leading-66 2xl:leading-80">
                  Was die Kunden zu mietstatus.de sagen
                </h2>
                <p className="text-secondary-black text-sm lg:text-xl xl:text-2xl 2xl:text-28 lg:leading-32 xl:leading-45 2xl:leading-50">
                  Erfahrungen, die zeigen: <br /> Das neue Verfahren macht den
                  Unterschied.
                </p>
              </div>
              <div className="lg:max-w-2xl space-y-4 text-center lg:text-start content-end ">
                <div className="flex justify-center items-center">
                  <div>
                    <img
                      loading="lazy"
                      className="h-12 lg:h-20 2xl:h-24 object-cover object-center"
                      src="/img/user-1.png"
                      alt="User"
                    />
                  </div>
                  <div className="transform -translate-x-6">
                    <img
                      loading="lazy"
                      className="h-12 lg:h-20 2xl:h-24 object-cover object-center"
                      src="/img/user-2.png"
                      alt="User"
                    />
                  </div>
                  <div className="transform -translate-x-12">
                    <img
                      loading="lazy"
                      className="h-12 lg:h-20 2xl:h-24 object-cover object-center"
                      src="/img/user-3.png"
                      alt="User"
                    />
                  </div>
                  <div className="transform -translate-x-16">
                    <img
                      loading="lazy"
                      className="h-12 lg:h-20 2xl:h-24 object-cover object-center"
                      src="/img/user-4.png"
                      alt="User"
                    />
                  </div>
                </div>
                <p className="text-secondary-black text-sm lg:text-xl xl:text-2xl 2xl:text-28 lg:leading-32 xl:leading-45 2xl:leading-50">
                  Transparenz beginnt bei den Menschen, die sie nutzen. Die
                  Erfahrungen mit mietstatus.de sprechen für sich.
                </p>
              </div>
            </div>

            <Testinomials />
          </div>
          <div></div>
        </div>
      </section>
      {/* schnellstes Verfahren || seriöser Nachweis || verlässlicher Beleg */}
      <section>
        <div className="bg-primary-green text-white bg-cover bg-center bg-[url('/img/freetemplate-background.png')]">
          <div className="w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl py-10 lg:py-20 mx-auto px-4 lg:px-0 space-y-20">
            <div className="px-4 text-[#CBEADF] text-center m-auto font-normal grid md:grid-cols-3 gap-x-10 gap-y-5">
              {[
                {
                  img: "/icons/thunder-icon.png",
                  title: "schnellstes Verfahren",
                  description:
                    "Überspringe den Papierkram und finde wesentlich schneller zu deiner Traumwohnung.",
                },
                {
                  img: "/icons/certificate-icon.png",
                  title: "seriöser Nachweis",
                  description:
                    "Schluss mit improvisierten Lösungen: Unterstreiche dein seriöses Auftreten durch eine professionelle Mietschuldenfreiheitsbescheinigung.",
                },
                {
                  img: "/icons/shield-icon.png",
                  title: "verlässlicher Beleg",
                  description:
                    "Mit den Sicherheitsmerkmalen der Bescheinigung schaffst du eine verlässliche Basis für alle Beteiligten.",
                },
              ].map(({ img, title, description }, index) => (
                <div
                  key={title + index}
                  className="space-y-2 xl:space-y-5 text-center"
                >
                  <div className="h-full max-h-12 lg:max-h-16 xl:max-h-20 2xl:max-h-24 inline-block m-auto">
                    <img
                      loading="lazy"
                      className="h-full object-cover object-center"
                      src={img}
                      alt={title}
                    />
                  </div>
                  <h4 className="text-xl lg:text-3xl xl:text-4xl 2xl:text-32 font-medium lg:leading-45 2xl:leading-50">
                    {title}
                  </h4>
                  <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-12 ">
              <div className="md:col-span-5 bg-secondary-green p-4 md:p-10 lg:p-16 xl:p-20 space-y-10 lg:space-y-20 flex flex-col justify-between items-start">
                <h4 className="text-primary-green text-2xl lg:text-4xl xl:text-4xl 2xl:text-52 leading-normal lg:leading-57 2xl:leading-70">
                  Erhalte deine Bescheinigung in Minuten, nicht Tagen
                </h4>
                <Link to={"https://mietstatus.de/"}>
                  <Button2
                    title={"Jetzt zu mietstatus.de"}
                    maxWidth="max-w-min"
                    textCss={"2xl:text-2xl"}
                    iconCss={"2xl:text-2xl text-primary-green"}
                  />
                </Link>
              </div>
              <div className="md:col-span-7">
                <img
                  loading="lazy"
                  className="w-full"
                  src="/img/freetemplate-girl.png"
                  alt="freetemplate"
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <FaqSection />
    </>
  );
}

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* left */}
        <div className="flex items-end">
          <div className="w-full max-w-2xl 2xl:max-w-[50rem] mx-auto px-4 2xl:px-2 py-10 lg:py-20 space-y-4 lg:space-y-5 2xl:space-y-10">
            <Badge
              icon={<MdMenuBook className="size-6" />}
              title={"Über mietstatus.de"}
            />
            <h1 className="text-lg lg:text-3xl xl:text-32 2xl:text-48 font-normal leading-normal lg:leading-45 xl:leading-66 2xl:leading-80 text-primary-black break-words">
              So beantragst du deine Mietschuldenfreiheitsbescheinigung online:
              schnell, sicher & digital
            </h1>
            <p className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-normal text-secondary-black leading-24 lg:leading-32 2xl:leading-42 whitespace-pre-wrap">
              Mit mietstatus.de holst du dir deine
              Mietschuldenfreiheitsbescheinigung ganz ohne Papierkram: online
              beantragen, digital unterschreiben lassen und direkt als PDF
              erhalten.
            </p>

            <a
              href={"https://mietstatus.de/"}
              className="hidden lg:block max-w-xs lg:mix-w-xl"
            >
              <Button2
                title={"Bescheinigung erstellen"}
                maxWidth="max-w-min"
                textCss={"2xl:text-2xl"}
                iconCss={"2xl:text-2xl text-primary-green"}
              />
            </a>
          </div>
        </div>
        {/* Right  */}
        <div className="h-full">
          <div className="w-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px] !lg:max-h-[680px] xl:max-h-[700px] 2xl:max-h-[786px] overflow-hidden">
            <img
              loading="lazy"
              className="!h-full w-full object-contain object-center"
              src="/banner/information.png"
              alt="home-banner.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationPage;
