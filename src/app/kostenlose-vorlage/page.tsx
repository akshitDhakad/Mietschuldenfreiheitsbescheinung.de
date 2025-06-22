"use client";
import React from "react";

import FaqSection from "@/components/FaqSection";
import { Button2 } from "@/utils/Button";
import Link from "next/link";
// icons

import { PiCertificate } from "react-icons/pi";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

function FreeTemplatePage() {
  return (
    <>
      {/* Updated Download Section */}
      <section id="downloads" className="relative mt-16 lg:mt-20">
        <div className="sm:max-w-wider md:max-w-4xl lg:max-w-7xl 2xl:max-w-8xl bg-gradient-to-b from-gray-50 to-white lg:transform lg:-translate-y-20 m-auto px-4">
          {/* Section Header */}
          <div className="text-center py-8 lg:py-10">
            <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-primary-black mb-4">
              Wähle deine PDF-Vorlage
            </h2>
            <p className="text-lg lg:text-xl text-secondary-black max-w-2xl mx-auto">
              Beide Vorlagen sind kostenlos und sofort zum Download verfügbar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pb-2">
            {/* Left PDF - Ausfüllbar */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-green to-primary-green/80 text-white p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              Ausfüllbares PDF
                </h3>
                <p className="text-primary-green/20 text-sm">
                  Direkt am Computer ausfüllen
                </p>

                {/* Features badge */}
                <div className="inline-flex items-center mt-4 px-3 py-1 bg-white/20 rounded-full">
                  <span className="text-xs font-medium">
                    ✓ Interaktive Felder
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* PDF Preview */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6 group-hover:bg-gray-100 transition-colors">
              <img
                loading="lazy"
                    className="mx-auto max-w-[200px] lg:max-w-[280px] shadow-lg rounded border-2 border-gray-200 object-contain transition-transform group-hover:scale-105"
                src="/img/ausfullbares-pdf.png"
                    alt="Ausfüllbares PDF Vorlage"
              />
            </div>

                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span className="text-sm lg:text-base text-secondary-black">
                      Felder digital ausfüllbar
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span className="text-sm lg:text-base text-secondary-black">
                      Professionelle Formatierung
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span className="text-sm lg:text-base text-secondary-black">
                      Sofort einsatzbereit
                    </span>
                  </div>
                </div>

                {/* Download Button */}
            <a
              href="/pdfs/ausfullbares-pdf.pdf"
              download
                  className="block w-full bg-primary-green text-white text-center py-4 px-6 rounded-xl font-semibold text-lg hover:bg-primary-green/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Vorlage herunterladen
                  </div>
            </a>
          </div>
            </div>

            {/* Right PDF - Blanko */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-secondary-green to-secondary-green/80 text-primary-green p-6 text-center">
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
          </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Blanko-PDF
                </h3>
                <p className="text-primary-green/60 text-sm">
                  Zum Ausdrucken und handschriftlichen Ausfüllen
                </p>

                {/* Features badge */}
                <div className="inline-flex items-center mt-4 px-3 py-1 bg-primary-green/10 rounded-full">
                  <span className="text-xs font-medium">✓ Zum Ausdrucken</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* PDF Preview */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6 group-hover:bg-gray-100 transition-colors">
                <img
                  loading="lazy"
                    className="mx-auto max-w-[200px] lg:max-w-[280px] shadow-lg rounded border-2 border-gray-200 object-contain transition-transform group-hover:scale-105"
                    src="/img/blanko-pdf.png"
                    alt="Blanko PDF Vorlage"
                  />
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span className="text-sm lg:text-base text-secondary-black">
                      Einfach ausdrucken
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span className="text-sm lg:text-base text-secondary-black">
                      Handschriftlich ausfüllen
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span className="text-sm lg:text-base text-secondary-black">
                      Klassisches Format
                    </span>
                  </div>
                </div>

                {/* Download Button */}
                <a
                  className="block w-full border-2 border-primary-green text-primary-green text-center py-4 px-6 rounded-xl font-semibold text-lg hover:bg-primary-green hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  href="/pdfs/blanko-pdf.pdf"
                  download
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Vorlage herunterladen
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="text-center py-4 border-t border-gray-200">
            <div className="flex flex-wrap justify-center items-center gap-8 text-secondary-black">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">100% kostenlos</span>
                  </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Sofortiger Download</span>
                  </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Rechtssicher</span>
                </div>
            </div>
          </div>

          {/* How to fill section header - keep your existing content below */}
          <div className="md:col-span-2 p-4 lg:p-10 bg-white rounded-2xl shadow-lg mt-2">
            {/* Keep your existing content for the "Wie füllst du das Formular richtig aus?" section */}
          </div>
        </div>
      </section>

      <FaqSection />
      <section>
        <div className=" bg-primary-green text-white bg-cover bg-center bg-[url('/img/freetemplate-background.png')]">
          <div className="w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl py-10 lg:py-20 mx-auto px-4 lg:px-0 space-y-20">
            <h2 className="max-w-6xl text-[#CBEADF] text-center m-auto text-2xl lg:text-5xl 2xl:text-6xl font-normal lg:leading-57 2xl:leading-70">
              Genug vom Papierkram? <br /> Steige um auf die moderne Lösung.
            </h2>
            <div className="grid md:grid-cols-12">
              <div className="order-2 md:order-1 w-full md:col-span-7">
                <img
                  loading="lazy"
                  className="w-full"
                  src="/img/freetemplate-girl.png"
                  alt="freetemplate"
                />
              </div>
              <div className="order-1 md:col-span-5 bg-secondary-green px-4 py-10 lg:p-12 2xl:p-16 flex flex-col gap-y-10 justify-between">
                <h4 className="text-primary-green text-2xl text-32 lg:text-48 2xl:text-52 font-normal leading-normal lg:leading-57 2xl:leading-70">
                  Erhalte deine Bescheinigung in Minuten, nicht Tagen
                </h4>
                <Link href={"/online-erstellen"}>
                  <Button2
                    title={"Online erstellen"}
                    maxWidth="lg:max-w-md 2xl:max-w-xl"
                    textCss="2xl:text-2xl bg-primary-green"
                    iconCss="2xl:text-2xl text-primary-green"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section className="bg-white fixed lg:hidden bottom-0 right-0 left-0 w-full shadow-2xl border-t border-gray-100 animate-slideUp">
        <div className="relative px-4 py-6 bg-gradient-to-r from-primary-green via-primary-green to-emerald-600 overflow-hidden">
          {/* Animierte Hintergrund-Elemente */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/10 animate-pulse"></div>
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute -bottom-1 -left-1 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float-delayed"></div>

          {/* Content */}
          <div className="relative flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg animate-bounce-subtle">
              <PiCertificate className="w-6 h-6 text-white drop-shadow-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <h6 className="text-white font-bold text-base leading-tight drop-shadow-sm">
                Bescheinigung in Minuten
              </h6>
              <p className="text-white/90 text-sm leading-tight mt-1 font-medium">
                Schnell & digital erstellen
              </p>
            </div>
            <Link
              href="/online-erstellen"
              className="group flex-shrink-0 bg-white text-primary-green px-5 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Erstellen</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default FreeTemplatePage;
