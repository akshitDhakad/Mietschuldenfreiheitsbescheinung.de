"use client";

import { useState } from "react";
import { MdMenuBook } from "react-icons/md";
import Badge from "../utils/Badge";

const faq = [
  {
    title: "Was ist eine Mietschuldenfreiheitsbescheinigung?",
    description:
      "Eine Mietschuldenfreiheitsbescheinigung bestätigt, dass du deine Miete regelmäßig und vollständig bezahlt hast. Sie wird oft bei der Wohnungssuche verlangt, um deine Zuverlässigkeit als Mieter nachzuweisen.",
  },
  {
    title: "Wer stellt eine Mietschuldenfreiheitsbescheinigung aus?",
    description:
      "Eine Mietschuldenfreiheitsbescheinigung wird üblicherweise von der vorherigen Vermieterin oder dem vorherigen Vermieter ausgestellt. Um den Prozess zu beschleunigen und zu vereinfachen, gibt es heutzutage auch digitale Dienste wie mietstatus.de",
  },
  {
    title: "Warum wird eine Mietschuldenfreiheitsbescheinigung verlangt?",
    description:
      "Vermieter wollen sichergehen, dass du zuverlässig zahlst. Mit der Bescheinigung kannst du belegen, dass es in deinem letzten Mietverhältnis keine Zahlungsprobleme gab und keine offenen Mietschulden bestehen.",
  },
  {
    title: "Was steht in einer Mietschuldenfreiheitsbescheinigung?",
    description:
      "Sie enthält deinen Namen und Adresse von Mieter und Vermieter, den Mietzeitraum und eine Bestätigung, dass keine Mietschulden bestehen. Optional kann der Vermieter zusätzliche Hinweise ergänzen.",
  },
  {
    title: "Kann ich eine kostenlose Vorlage verwenden?",
    description:
      "Na klar. Du kannst gerne unsere PDF-Vorlagen nutzen, die wir dir kostenlos zur Verfügung stellen – sowohl ausfüllbar als auch druckbereit. Ideal, wenn du es nicht ganz so eilig hast und dir der damit verbundene Mehraufwand nichts ausmacht",
  },
  {
    title:
      "Muss mein Vermieter die Mietschuldenfreiheitsbescheinigung ausstellen?",
    description:
      "Nein, dein Vermieter ist nicht gesetzlich verpflichtet dazu. Viele stellen sie aber auf Anfrage aus – vor allem, wenn das Mietverhältnis gut verlaufen ist.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <section id="faq" className="bg-[#FCFCFC]">
      <div className="sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl flex flex-col justify-center gap-y-5 m-auto px-4 2xl:px-0">
        <div className="text-center lg:py-32 py-10 bg-secondary-gray">
          <div className="w-full lg:max-w-6xl xl:max-w-8xl space-y-10 m-auto mb-20">
            <Badge
              icon={
                <MdMenuBook className="size-4 lg:size-6 shrink-0 font-bold" />
              }
              title={"Häufige Fragen"}
            />

            <h2 className="lg:mb-5 text-center text-xl lg:text-5xl 2xl:text-6xl font-normal leading-normal lg:leading-66 2xl:leading-70 break-words tracking-normal">
              Die wichtigsten Fragen zur <br />{" "}
              Mietschuldenfreiheitsbescheinigung
            </h2>
          </div>
          {/* container */}
          <div className="w-full max-w-6xl 2xl:max-w-8xl m-auto flex flex-col gap-y-6">
            {faq?.map((item, index) => (
              <div
                key={index}
                className={`${
                  activeIndex === index ? "border-[#02484752]" : ""
                } text-start xl:p-7 lg:p-5 p-3 shadow border bg-white`}
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`cursor-pointer text-sm lg:text-base flex justify-between items-center gap-x-2 lg:gap-x-5 leading-tight lg:leading-normal`}
                >
                  <h6
                    className={`${
                      activeIndex === index
                        ? "text-primary-green"
                        : "text-primary-black"
                    } font-normal tracking-normal lg:tracking-wide text-sm lg:text-2xl 2xl:text-32 break-words`}
                  >
                    {item.title}
                  </h6>
                  <span className="bg-secondary-green text-primary-green p-4">
                    {activeIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 lg:size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 lg:size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    )}
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="py-2 text-xs lg:text-base 2xl:text-2xl leading-24 2xl:leading-48 text-secondary-black tracking-tight lg:tracking-wide">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
