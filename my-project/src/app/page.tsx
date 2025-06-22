"use client";
import { useState } from "react";
import Homebanner from "@/components/Homebanner";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import { Button2 } from "@/utils/Button";
import Download from "@/components/Download";
import Image from "next/image";
// icons
import { FaRegCircleCheck, FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi";

export default function Home() {
  const [active, setActive] = useState<number>(0);

  return (
    <>
      <Homebanner active={active} setActive={setActive} />
      {/* Infobox */}
      <section className="relative bg-primary-green overflow-hidden">
        <div className="w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl m-auto px-4 2xl:px-0 py-10 md:py-14 lg:py-20 grid md:grid-cols-3 gap-x-16 items-center">
          <Image
            loading="lazy"
            className="h-36 lg:h-80 absolute left-0 top-0"
            src="/img/line-effect.png"
            alt="line-effect"
            width={200}
            height={320}
          />
          <Image
            loading="lazy"
            className="h-36 lg:h-80 absolute -bottom-5 lg:-bottom-32 -right-5 rotate-180"
            src="/img/line-effect.png"
            alt="line-effect"
            width={200}
            height={320}
          />
          {/* left image  */}
          <div className="z-10 max-h-[600px] w-full">
            <Image
              loading="lazy"
              className="m-auto h-full w-full object-cover object-center"
              src="/img/Infobox.png"
              alt="Infobox"
              width={400}
              height={600}
            />
          </div>
          {/* Right content  */}
          <div className="md:col-span-2 space-y-6 2xl:space-y-10">
            <h6 className="text-xl lg:text-2xl 2xl:text-32 text-[#E0F3EC] mb-2">
              Infobox
            </h6>
            <p className="text-base md:text-xl lg:text-3xl xl:text-4xl 2xl:text-48 font-light tracking-wide lg:tracking-wide lg:leading-45 xl:leading-66 2xl:leading-80 text-[#FFFFFF66]">
              <span className="flex items-center flex-wrap gap-2">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white mr-2">
                  Die Mietschuldenfreiheitsbescheinigung:
                </span>
                <span className="text-[#FFFFFF66]">
                  Dein Schlüssel zur Traumwohnung! Dieses wichtige Dokument
                  belegt deine Zuverlässigkeit und bestätigt, dass du deine
                  Miete immer pünktlich gezahlt hast. Ein starkes
                  Vertrauenssignal für jeden Vermieter und ein entscheidender
                  Vorteil bei deiner nächsten Wohnungsbewerbung.
                </span>
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* card section */}
      <section>
        <div className="h-full w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl px-4 2xl:px-0 m-auto bg-white py-5 lg:my-10 space-y-5 lg:space-y-10 overflow-hidden">
          {/* section 1 */}
          <div className="w-full bg-secondary-gray p-4 lg:p-5 grid md:grid-cols-2 gap-y-5 gap-x-10 border shadow-md">
            {/* img section  */}
            <div className="me-auto w-full">
              <div className="w-full max-h-[575px] 2xl:max-h-[700px] overflow-hidden">
                <Image
                  loading="lazy"
                  className="w-full h-full max-h-[575px] xl:max-h-[600px] 2xl:max-h-[700px] object-cover object-top"
                  src="/img/mask-man.png"
                  alt="mietstatus Einführungsvideo"
                  width={600}
                  height={700}
                />
              </div>
            </div>
            <div className="pe-4 2xl:pe-12 h-full flex flex-col justify-between gap-y-2 2xl:gap-y-5 text-start">
              <h2
                className="text-primary-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-52 font-normal tracking-wider leading-normal lg:leading-10 xl:leading-[50px] 2xl:leading-70 hyphens-auto break-words"
                lang="de"
              >
                Wie erhalte ich eine Mietschuldenfreiheitsbescheinigung?
              </h2>
              <p className="text-sm font-normal text-secondary-black lg:text-xl 2xl:text-2xl text-primary-gray leading-6 lg:leading-32 2xl:leading-45">
                Die Mietschuldenfreiheitsbescheinigung ist oft entscheidend für
                den Wohnungswechsel. Wir zeigen dir, wie du sie stressfrei
                bekommst.
              </p>
              <ul className="text-xs lg:text-xl 2xl:text-2xl space-y-4 2xl:space-y-5 text-primary-green font-medium">
                <li className="flex items-center gap-x-2 lg:gap-x-4 lg:text-xl xl:leading-32 2xl:leading-45">
                  <span>
                    <FaRegCircleCheck />
                  </span>{" "}
                  Vermieter richtig ansprechen und erinnern
                </li>
                <li className="flex items-center gap-x-2 lg:gap-x-4 lg:text-xl xl:leading-32 2xl:leading-45">
                  <span>
                    <FaRegCircleCheck />
                  </span>{" "}
                  Übersichtliche Schritt-für-Schritt-Anleitung
                </li>
                <li className="flex items-center gap-x-2 lg:gap-x-4 lg:text-xl xl:leading-32 2xl:leading-45">
                  <span>
                    <FaRegCircleCheck />
                  </span>{" "}
                  Was tun bei Funkstille oder schwer erreichbaren Vermietern
                </li>
              </ul>
              <div className="lg:mt-5 2xl:mt-0 mt-3">
                <Link href="/uberblick/Wie%20erhalte%20ich%20eine%20Mietschuldenfreiheits-bescheinigung%3F?id=1">
                  <Button2
                    title={"Weiterlesen..."}
                    maxWidth="max-w-sm"
                    textCss="2xl:text-2xl"
                    iconCss="2xl:text-2xl text-primary-green"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* section 2  */}
          <div className="w-full bg-secondary-gray p-4 lg:p-5 grid md:grid-cols-2 gap-y-5 gap-x-10 border shadow-md">
            {/* content  */}
            <div className="order-2 md:order-1 lg:ps-4 2xl:ps-10 h-full flex flex-col justify-between gap-y-2 lg:gap-y-4 2xl:gap-y-5 text-start">
              <h2 className="text-primary-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-52 font-normal tracking-wide leading-normal lg:leading-10 xl:leading-[50px] 2xl:leading-70 hyphens-auto break-words">
                Die 10 häufigsten Fehler bei der Wohnungssuche – und wie du sie
                vermeidest
              </h2>
              <p className="text-sm text-secondary-black lg:text-xl 2xl:text-2xl text-primary-gray leading-6 lg:leading-32 2xl:leading-45">
                Die Suche nach einer neuen Wohnung kann stressig und
                zeitaufwendig sein. Gerade in beliebten Wohngegenden. Vermeide
                die typische Fehler und bereite dich bestmöglich auf deine
                Bewerbung vor.
              </p>
              <ul className="text-xs lg:text-xl 2xl:text-2xl space-y-2 lg:space-y-4 2xl:space-y-5 text-primary-green font-medium">
                <li className="flex items-start lg:items-center gap-x-2 lg:gap-x-4 lg:text-xl xl:leading-32 2xl:leading-45">
                  <span>
                    <FaRegCircleCheck />
                  </span>{" "}
                  Vorbereitung ist entscheidend – Unterlagen bereithalten
                </li>
                <li className="flex items-start lg:items-center gap-x-2 lg:gap-x-4 lg:text-xl xl:leading-32 2xl:leading-45">
                  <span>
                    <FaRegCircleCheck />
                  </span>{" "}
                  Schnelligkeit zählt – Wohnungen sind schnell vergeben
                </li>
                <li className="flex items-start lg:items-center gap-x-2 lg:gap-x-4 lg:text-xl xl:leading-32 2xl:leading-45">
                  <span>
                    <FaRegCircleCheck />
                  </span>{" "}
                  Flexibilität bewahren – Mehrere Optionen in Betracht ziehen
                </li>
              </ul>
              <div className="lg:mt-5 2xl:mt-0 mt-3">
                <Link href="/uberblick/Die%2010%20häufigsten%20Fehler%20bei%20der%20Wohnungssuche%20–%20und%20wie%20du%20sie%20vermeidest?id=2">
                  <Button2
                    title={"Weiterlesen..."}
                    maxWidth="max-w-sm"
                    textCss="2xl:text-2xl"
                    iconCss="2xl:text-2xl text-primary-green"
                  />
                </Link>
              </div>
            </div>
            {/* img section  */}
            <div className="order-1 md:order-2 me-auto w-full">
              <div className="w-full max-h-[575px] xl:max-h-[600px] 2xl:max-h-[700px] overflow-hidden">
                <Image
                  loading="lazy"
                  className="w-full h-full max-h-[575px] xl:max-h-[600px] 2xl:max-h-[700px] object-cover object-top"
                  src="/img/mask-girl.png"
                  alt="mietstatus Einführungsvideo"
                  width={600}
                  height={700}
                />
              </div>
            </div>
          </div>
          {/* section 3 */}
          <div className="w-full bg-secondary-gray p-4 lg:p-5 grid md:grid-cols-2 gap-y-5 gap-x-10 border shadow-md">
            {/* img section  */}
            <div className="me-auto w-full max-h-[575px] xl:max-h-[600px] 2xl:max-h-[700px]">
              <Image
                loading="lazy"
                className="w-full h-full max-h-[575px] xl:max-h-[600px] 2xl:max-h-[700px] object-cover object-top"
                src="/img/mask-man-house.png"
                alt="mietstatus Einführungsvideo"
                width={600}
                height={700}
              />
            </div>
            {/* content  */}
            <div className="lg:pe-4 2xl:pe-12 h-full flex flex-col justify-between 2xl:gap-y-5 text-start">
              <h2 className="text-primary-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-52 font-normal tracking-wide leading-normal lg:leading-10 xl:leading-[50px] 2xl:leading-70 hyphens-auto">
                Interview mit einem Vermieter: Worauf achtet er bei der Auswahl
                neuer Mieter?
              </h2>

              <p className="text-sm text-secondary-black lg:text-xl 2xl:text-2xl text-primary-gray leading-6 lg:leading-32 2xl:leading-45">
                Wir haben nachgefragt: Welche Eigenschaften machen einen Mieter
                zum Wunschmieter? Vermieter Franco erzählt, worauf es ihm
                ankommt.
              </p>
              <ul className="text-xs lg:text-xl 2xl:text-2xl space-y-4 2xl:space-y-5 text-primary-green font-medium">
                <li className="flex items-start lg:items-center gap-x-2 lg:gap-x-4 lg:text-xl xl:leading-32 2xl:leading-45">
                  <FaRegCircleCheck className="shrink-0" />
                  Warum er beim ersten Eindruck nichts dem Zufall überlässt
                </li>
                <li className="flex items-start lg:items-center gap-x-2 lg:gap-x-4 lg:text-xl xl:leading-32 2xl:leading-45">
                  <span>
                    <FaRegCircleCheck className="shrink-0" />
                  </span>{" "}
                  Warum unvollständige Unterlagen ein No-Go für ihn sind
                </li>
                <li className="flex items-start lg:items-center gap-x-2 lg:gap-x-4 lg:text-xl xl:leading-32 2xl:leading-45">
                  <span>
                    <FaRegCircleCheck />
                  </span>{" "}
                  Wie er Mieter findet, die zuverlässig sind
                </li>
              </ul>
              <div className="lg:mt-5 2xl:mt-0 mt-3">
                <Link href="/uberblick/Interview%20mit%20einem%20Vermieter:%20Worauf%20achtet%20er%20bei%20der%20Auswahl%20neuer%20Mieter%3F?id=3">
                  <Button2
                    title={"Weiterlesen..."}
                    maxWidth="max-w-sm"
                    textCss="2xl:text-2xl"
                    iconCss="2xl:text-2xl text-primary-green"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card section  Schluss mit Papierkram*/}
      <section className="w-full bg-white overflow-hidden">
        <div className="lg:h-[630px] 2xl:h-[830px] mx-auto overflow-hidden grid md:grid-cols-2 gap-0">
          {/* Left Side - Paper Stack */}
          <div className="relative z-10">
            <div className="w-full h-full bg-black relative clip-left">
              <Image
                loading="lazy"
                src="/img/schluss.png"
                alt="Schluss mit Papierkram"
                className="w-full h-full object-cover opacity-60"
                width={800}
                height={830}
              />
              <div className="absolute top-10 left-1/2 -translate-x-1/2 text-2xl  lg:text-48 2xl:text-52 leading-32 font-normal flex items-center gap-x-2 lg:gap-x-8 text-white">
                <FaThumbsDown />
                <span className="font-normal whitespace-nowrap lg:break-words">
                  Schluss mit Papierkram
                </span>
              </div>
            </div>
          </div>
          {/* Right Side - Modern Solution */}
          <div className="relative w-full h-full z-0 -ml-[1px]">
            <div className="w-full h-full bg-gradient-to-br from-[#C8EBF5] via-[#EEDDF9] to-[#FCE9DD] relative clip-right">
              <Image
                loading="lazy"
                src="/img/moderne.png"
                alt="Moderne Lösung"
                className="w-full h-full object-cover mix-blend-multiply"
                width={800}
                height={830}
              />
              <div className="absolute top-10 left-1/2 -translate-x-1/2 text-2xl lg:text-48 2xl:text-52 leading-32 font-normal flex items-center gap-x-2 lg:gap-x-8 text-primary-green">
                <FaThumbsUp />
                <span className="font-normal whitespace-nowrap lg:break-words">
                  Moderne Lösung
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Vorbei der Struggle */}
      <section>
        <div className="bg-primary-green overflow-hidden">
          <div className="w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl px-4 2xl:px-0 py-10 lg:py-16 m-auto text-white flex flex-col md:flex-row items-start md:items-center md:justify-between gap-y-5 lg:gap-y-10">
            <h4 className="text-lg lg:text-48 2xl:text-52 leading-normal lg:leading-wide lg:leading-66 2xl:leading-70 font-normal">
              Vorbei der Struggle – jetzt wird's <br /> einfach und digital!
            </h4>
            <Link href={"/online-erstellen"} className="max-w-sm">
              <Button2
                title={"Mehr erfahren"}
                maxWidth="max-w-sm"
                textCss="2xl:text-2xl text-primary-green bg-white"
                iconCss="2xl:text-2xl text-primary-green"
              />
            </Link>
          </div>
        </div>
      </section>
      {/* Faq section  */}
      <FaqSection />
      {/* Nutze unsere kostenlosen Vorlagen */}
      <Download
        title={"Nutze unsere kostenlosen Vorlagen"}
        description={
          "Die Mietschuldenfreiheitsbescheinigung dient als Nachweis für pünktliche Mietzahlungen. Nutze unsere kostenlosen Vorlagen, um deine Zuverlässigkeit nachzuweisen."
        }
        link={"/kostenlose-vorlage"}
        buttonTitle={"Vorlage herunterladen"}
      />
    </>
  );
}
