import FaqSection from "@/components/FaqSection";

function HelpAndContact() {
  return (
    <>
      <HeroSection />
      <section>
        <div className="h-full w-full sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl mx-auto px-4 2xl:px-0 py-10 2xl:py-20 space-y-5 lg:space-y-10 2xl:space-y-20">
          <div className="space-y-2 lg:space-y-6 text-lg lg:text-2xl 2xl:text-40 text-primary-black">
            <h4 className="font-bold text-xl lg:text-3xl 2xl:text-44 leading-32 2xl:leading-80 tracking-normal lg:tracking-wide">
              mietschuldenfreiheitsbescheinigung.de
            </h4>
            <ul className="space-y-2 font-normal lg:space-y-4 leading-32 2xl:leading-80">
              <li>Tobias Mattern (Einzelunternehmer)</li>
              <li>Bänschstraße</li>
              <li>10247 Berlin</li>
            </ul>
          </div>

          <div className="space-y-4 2xl:space-y-10">
            <h4 className="font-bold underline text-lg lg:text-2xl 2xl:text-40 text-primary-black 2xl:leading-80">
              Kontakt
            </h4>
            <ul className="text-sm lg:text-2xl 2xl:text-40 text-primary-black space-y-2 tracking-normal lg:space-y-4 leading-24 2xl:leading-80">
              <li>Telefon: +49 (0) 30 20 96 52 64</li>
              <li className="whitespace-nowrap">
                E-Mail:{" "}
                <span className="underline">
                  info@mietschuldenfreiheitsbescheinigung.de
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-5 2xl:space-y-10 text-sm lg:text-2xl 2xl:text-40 text-primary-black">
            <h4 className="font-bold underline text-lg lg:text-2xl 2xl:text-40 leading-24 2xl:leading-80">
              Umsatzsteuer-ID
            </h4>
            <ul className="space-y-2 lg:space-y-4 font-normal leading-24 2xl:leading-80">
              <li>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
              </li>
              <li>DE322941873</li>
            </ul>
          </div>

          <div className="text-base lg:text-2xl 2xl:text-40 text-primary-black leading-normal 2xl:leading-80">
            <h4 className="font-bold underline tracking-normal">
              Angaben zur Berufshaftpflichtversicherung
            </h4>
          </div>

          <div className="text-base lg:text-2xl 2xl:text-40 text-primary-black leading-normal 2xl:leading-80">
            <h4 className="font-medium">Name und Sitz des Versicherers:</h4>
          </div>
          <div className="text-sm lg:text-3xl 2xl:text-40 leading-24 lg:leading-42 2xl:leading-80">
            <ul className="space-y-2 lg:space-y-4 leading-24 lg:leading-42 2xl:leading-80">
              <li>Helvetia Schweizerische Versicherungsgesellschaft AG</li>
              <li>Berliner Str. 56–58</li>
              <li>60311 Frankfurt am Main</li>
            </ul>
          </div>
          <div className="text-base lg:text-3xl 2xl:text-40 leading-normal lg:leading-42 2xl:leading-80">
            <h4 className="font-normal">
              Geltungsraum der Versicherung: Deutschland
            </h4>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <FaqSection />
    </>
  );
}

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1 bg-primary-green text-white flex items-end">
          <div className="w-full max-w-2xl 2xl:max-w-4xl mx-auto py-10 lg:py-20 space-y-5 lg:space-y-10 px-4 lg:px-4">
            <h4 className="text-32 lg:text-6xl 2xl:text-68 leading-80 lg:leading-70 2xl:leading-80 font-regular">
              Impressum
            </h4>
            <p className="text-[#CBEADF] text-base lg:text-xl 2xl:text-2xl font-regular">
              Nachfolgend findest du die vorgeschriebenen Informationen gemäß
              den geltenden gesetzlichen Bestimmungen.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[650px] xl:max-h-[700px] 2xl:max-h-[768px] overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src="/banner/impressum.png"
            alt="impressum"
          />
        </div>
      </div>
    </section>
  );
}

export default HelpAndContact;
