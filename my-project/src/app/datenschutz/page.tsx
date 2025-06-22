"use client";
import React, { useState, useEffect, useRef } from "react";
import { GoShieldCheck } from "react-icons/go";
import Image from "next/image";

// Types
interface SubContent {
  title: string;
  description: string[];
  list?: string[];
  subDescription?: string[];
}

interface DataSection {
  id: number;
  title: string;
  description?: string[];
  subContent?: SubContent[];
}

const data: DataSection[] = [
  {
    id: 0,
    title: "DATENSCHUTZERKLÄRUNG",
    description: [
      "Willkommen bei mietschuldenfreiheitsbescheinigung.de! Die folgende Datenschutzerklärung gibt einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere www.mietschuldenfreiheitsbescheinigung.de besuchen. Diese Richtlinie soll die Nutzer unserer Website über Art, Umfang und Zweck der Erhebung und Nutzung personenbezogener Daten durch uns gemäß dem Bundesdatenschutzgesetz („BDSG") und der Datenschutz-Grundverordnung („DSGVO") informieren.",
    ],
  },
  {
    id: 1,
    title: "Wer ist der Datenverantwortliche?",
    description: [
      "Ein „Datenverantwortlicher" ist eine Person oder Organisation, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. In diesem Sinne ist mietschuldenfreiheitsbescheinigung.de, Tobias Mattern (Einzelunternehmer), Bänschstraße 37, 10247 Berlin („mietschuldenfreiheitsbescheinigung.de", „wir", „uns", „unser") der Datenverantwortliche. Bei allgemeinen Fragen zum Datenschutz bei mietschuldenfreiheitsbescheinigung.de erreichen Sie uns unter info@mietschuldenfreiheitsbescheinigung.de.",
    ],
  },
  {
    id: 2,
    title: "Was sind personenbezogene Daten?",
    description: [
      "Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare lebende Person beziehen. Auch verschiedene Informationen, die zusammen die Identifizierung einer bestimmten Person ermöglichen, stellen personenbezogene Daten dar.",
    ],
  },
  {
    id: 3,
    title: "Was sind die Rechsgrundlagen für die Verarbeitung Ihrer Daten?",
  },
  {
    id: 4,
    title: "Welche personenbezogenen Daten erheben wir von Ihnen?",
    subContent: [
      {
        title: "a) Personenbezogene Daten, die Sie uns zur Verfügung stellen:",
        description: [
          "Dies sind Informationen über Sie, die Sie uns zur Verfügung stellen. Dazu können beispielsweise Ihr Name, Ihre E-Mail-Adresse und Ihre Telefonnummer gehören, wenn Sie uns kontaktieren. Die rechtliche Grundlage ist der Abschluss eines Vertrags mit Ihnen und Ihre Zustimmung.",

          "Wir verarbeiten Ihre personenbezogenen Daten auch, wenn Sie mit uns einen Vertrag abschließen, um unsere vertraglichen Leistungen erbringen zu können. Dies umfasst insbesondere die Erstellung eines Benutzerkontos, unseren Support, die Korrespondenz mit Ihnen, die Rechnungsstellung und die Erfüllung unserer vertraglichen, buchhalterischen und steuerlichen Verpflichtungen. Je nachdem, wie Sie unsere Dienste nutzen, können wir Ihren Namen, Ihre E-Mail-Adresse, Ihre Postanschrift und Ihre Telefonnummer verarbeiten. Die Daten werden dementsprechend auf der Grundlage der Erfüllung unserer vertraglichen und gesetzlichen Verpflichtungen verarbeitet.",

          "Wenn Sie unsere Dienste nutzen, um eine Mietschuldenfreiheitsbescheinigung zu erhalten oder, im Falle eines Vermieters, die Mietschuldenfreiheit zu überprüfen/bescheinigen („Dienste"), verarbeiten wir die Daten, die bei Ihrer Nutzung unserer Dienste anfallen, wie z. B. die von Ihnen bereitgestellten Daten (personenbezogene und nicht personenbezogene Daten) („Dienstdaten"), um Ihnen den Zugang zu unseren Diensten und deren Nutzung zu ermöglichen. Zu diesem Zweck werden alle von uns verarbeiteten Servicedaten in Ihrem Auftrag verarbeitet, und wir werden zu Ihrem Datenverarbeiter. Auf diese Weise bieten wir Ihnen die vollständige Kontrolle über Ihre Servicedaten, indem wir Ihnen die Möglichkeit geben, (i) auf Ihre Servicedaten zuzugreifen, (ii) Ihre Servicedaten über unterstützte Drittanbieter-Integrationen zu teilen und (iii) den Export oder die Löschung Ihrer Servicedaten zu beantragen und angemessene rechtliche Vorkehrungen sowie entsprechende technische und organisatorische Maßnahmen zu treffen, um den Schutz Ihrer Servicedaten zu gewährleisten.",

          "Wenn sich personenbezogene Daten, die Sie uns zur Verfügung stellen, auf eine dritte Partei beziehen, erklären und garantieren Sie, dass die personenbezogenen Daten aktuell, vollständig und korrekt sind und dass Sie die vorherige Zustimmung der dritten Partei zur Erfassung, Verwendung und Offenlegung Ihrer personenbezogenen Daten für die Zwecke eingeholt haben. Sie erklären sich damit einverstanden, uns auf Anfrage unverzüglich einen schriftlichen Nachweis über diese Zustimmung vorzulegen.",

          "Weitere Informationen zum Schutz Ihrer personenbezogenen Daten bei der Nutzung unserer Dienste finden Sie in unserer Datenschutzrichtlinie für Dienste.",

          "Wenn Sie eine Zahlung tätigen, werden Ihre Zahlungsdaten über unseren Zahlungsdienstleister Stripe (354 Oyster Point Blvd South San Francisco, CA 94080, USA) verarbeitet. Zahlungsdaten werden ausschließlich über Stripe verarbeitet und wir haben keinen Zugriff auf Zahlungsdaten, die Sie möglicherweise übermitteln. Die Rechtsgrundlage für die Bereitstellung eines Zahlungssystems ist die Begründung und Durchführung des Vertrags.",
        ],
      },
      {
        title:
          "b) Personenbezogene Daten, die unsere Website über Sie erfasst:",
        description: [
          "Wenn Sie unsere Website besuchen, werden automatisch einige Informationen über Sie und Ihren Besuch erfasst, darunter die Internetprotokoll-Adresse (IP-Adresse), die zur Verbindung Ihres Geräts mit dem Internet verwendet wird, sowie einige andere Informationen, wie z. B. die von Ihnen besuchten Seiten auf unserer Website. Dies dient dazu, die Leistung der Website zu überwachen und das Erlebnis der Besucher der Website zu verbessern. Die rechtliche Grundlage ist die Anbahnung eines Vertrags mit Ihnen und unser berechtigtes Interesse.",
          "Wir hosten unsere Website mit den Diensten von Hostinger International, Ltd, (61 Lordou Vironos str., 6023 Larnaca, Cyprus). In diesem Sinne verarbeitet Hostinger alle Daten und Kommunikationsdaten, einschließlich IP-Adressen, die uns über unsere Website zur Verfügung gestellt werden. Das bedeutet, dass alle Daten, die an unsere Website übermittelt werden, an Hostinger weitergeleitet werden. Die Rechtsgrundlage für die Verarbeitung ist unser berechtigtes Interesse.",

          "Wir haben Google Fonts von Google LLC (1600 Amphitheatre Parkway Mountain View, CA 94043, USA, und Google Ireland Limited Gordon House, Barrow Street, Dublin 4, Irland) auf unserer Website integriert. Das bedeutet, dass, wenn Ihr Browser eine Verbindung zu unserer Website herstellt, der Google-Server die Schriftarten an Ihren Browser zurücksendet, damit Sie ordnungsgemäß angezeigt werden. In diesem Sinne erhält Google Kenntnis von i) Ihrer IP-Adresse und ii) anderen technischen Daten im Zusammenhang mit Ihrem Zugriff. Die Integration basiert auf unseren berechtigten Interessen.",
        ],
      },
      {
        title: "c) Cookies:",
        description: [
          "Wir verwenden auf unserer Website sogenannte Cookies. Cookies sind Informationen, die von unserem Webserver oder den Webservern von Drittanbietern an Ihren Webbrowser übermittelt und dort zum späteren Abruf gespeichert werden. Bei Cookies kann es sich um kleine Dateien oder andere Arten der Informationsspeicherung handeln. Wie im Gesetz über den Datenschutz und den Schutz der Privatsphäre in der Telekommunikation und bei digitalen Diensten („TDDDG") und in der EU-Richtlinie über den Schutz der Privatsphäre und der elektronischen Kommunikation („PECD") festgelegt, müssen wir für die Verwendung von nicht wesentlichen Cookies die Zustimmung einholen. Die Rechtsgrundlage für die Verwendung wesentlicher Cookies ist unser berechtigtes Interesse, und die Rechtsgrundlage für die Verwendung nicht wesentlicher Cookies ist Ihre Zustimmung.",
        ],
      },
      {
        title: "Was sind Cookies?",
        description: [
          "Ein Cookie ist eine kleine Textdatei, die von einer Website auf die Festplatte Ihres Geräts gesendet wird. Jedes Mal, wenn Sie auf dieselbe Website zurückkehren, ruft Ihr Browser den/die entsprechenden Cookie(s) ab und sendet sie an den Server der Website.",
        ],
      },
      {
        title: "Wie werden Cookies verwendet?",
        description: [
          "Die von uns verwendeten Cookies werden auf Ihrem Gerät für einen Zeitraum von maximal 2 Jahren ab dem Datum Ihrer Erstinstallation oder, wenn sie später aktualisiert werden, ab dem Datum der Aktualisierung gespeichert. Cookies können in die folgenden zwei großen Kategorien unterteilt werden:",
        ],
        list: [
          "Technisch notwendige Cookies (Wesentlich)",
          "Technisch notwendige Cookies sind für das ordnungsgemäße Funktionieren unserer Website erforderlich; sie ermöglichen es Ihnen, effizient auf unserer Website zu navigieren und Ihre funktionalen Merkmale zu nutzen.",
          "Technisch nicht wesentliche Cookies",
          " Analytische/Leistungs-Cookies",
          "Diese Cookies ermöglichen es uns, die Website-Aktivitäten zu messen und darüber zu berichten, indem wir Seitenbesuche, Besucherstandorte und die Bewegungen der Besucher auf unserer Website verfolgen. Die gesammelten Informationen identifizieren die Besucher nicht direkt. Wir platzieren diese Cookies, um diese Daten zu analysieren.",
          "Marketing/Werbung Cookies",
          "Marketing-Cookies helfen uns, Ihnen personalisierte und relevante Dienste oder Werbung anzubieten und die Wirksamkeit unserer digitalen Marketingaktivitäten zu verfolgen. Sie sind in der Lage, Ihren Browser auf anderen Websites zu verfolgen und ein Profil Ihrer Interessen zu erstellen. Dies kann sich auf die Inhalte und Nachrichten auswirken, die Sie auf anderen von Ihnen besuchten Websites sehen.",
        ],
        subDescription: [
          "Wir verwenden die unten genannten nicht-essentiellen Cookies und andere Online-Identifikationstechnologien wie Web-Beacons oder Pixel, um den Nutzern ein besseres Nutzererlebnis zu bieten.",
          "Wir verwenden sogenannte Pixel-Cookies und Tags („Pixel-Cookies"). Ein Pixel-Cookie ist ein Werbetool und besteht in der Regel aus einem JavaScript-Code-Snippet, das es uns ermöglicht, die Aktivitäten der Besucher auf unserer Website zu verstehen und zu verfolgen. Zu diesem Zweck sammeln und verarbeiten Pixel-Cookies Informationen über die Besucher unserer Website und das verwendete Gerät (sogenannte Ereignisdaten).",
          "Die durch Pixel-Cookies gesammelten Ereignisdaten werden für die Ausrichtung unserer Werbung und die Verbesserung der Anzeigenauslieferung und der personalisierten Werbung verwendet. Zu diesem Zweck werden die auf unserer Website mittels Pixel-Cookies erhobenen Ereignisdaten an den jeweiligen Betreiber des Pixel-Cookies übermittelt und teilweise auch auf Ihrem Gerät gespeichert. Dies geschieht jedoch nur mit Ihrer Zustimmung, und wir und der jeweilige Betreiber des Pixel-Cookies gelten als gemeinsame Verantwortliche. Für die anschließende Verarbeitung der übermittelten Ereignisdaten ist der jeweilige Betreiber des Pixel-Cookies jedoch der alleinige Verantwortliche.",
          "Weitere Informationen darüber, wie der jeweilige Betreiber des Pixel-Cookies personenbezogene Daten verarbeitet, einschließlich der Rechtsgrundlage, auf die er sich stützt, und wie Sie Ihre Rechte ausüben können, finden Sie in den folgenden Datenschutzrichtlinien: Facebook und Instagram (Meta Platforms, Inc., 1601 Willow Road Menlo Park California 94025 und 4 Grand Canal Square Grand Canal Harbour Dublin 2, Irland).",
          "Wir verwenden Google Analytics, einen von Google bereitgestellten Webanalysedienst. Google Analytics verwendet ebenfalls Cookies, damit unsere Website analysieren kann, wie Nutzer unsere Website über verschiedene Geräte hinweg nutzen. Die von den Cookies erzeugten Informationen über Ihre Nutzung unserer Website werden an Google übermittelt und dort gespeichert, einschließlich der Übermittlung in die Vereinigten Staaten. Die folgenden Daten werden durch die Verwendung von Google Analytics verarbeitet: a) 3 Byte der IP-Adresse des aufgerufenen Systems des Website-Besuchers (anonymisierte IP-Adresse); b) die Website aufgerufen; c) die Website, von der aus der Nutzer die aufgerufene Seite unserer Website erreicht hat (Referrer); d) die Unterseiten, die von der Website aus aufgerufen werden; e) die auf der Website verbrachte Zeit; und f) die Häufigkeit, mit der die Website aufgerufen wird.",
          "Google erklärt, dass es Ihre IP-Adresse nicht mit anderen Daten von Google in Verbindung bringen wird. Die Nutzung dieses Dienstes beruht auf Ihrer Zustimmung. Sie können Ihre Zustimmung jederzeit über unser Popup-Fenster zur Cookie-Einstellung widerrufen. Die Rechtsgrundlage für die Verarbeitung ist ebenfalls Ihre Zustimmung. In Bezug auf die Datenübermittlung in die USA können Sie die Vereinbarung zur Datenverarbeitung durch Google Analytics hier nachlesen.",
          "Sie können das Tracking durch Google Analytics mit Wirkung für die Zukunft deaktivieren, indem Sie das Google Analytics Opt-out Browser Add-on für Ihren aktuellen Webbrowser hier herunterladen und installieren.",
          "Sie können Ihre Cookie-Einstellungen auch über die folgenden Links für einige der beliebtesten Internetbrowser verwalten: Edge, Google Chrome, Firefox, Safari, Opera.",
          "Wenn Sie unsere Website zum ersten Mal besuchen, wird ein Popup-Fenster angezeigt, in dem Sie Ihre Zustimmung zur Verwendung von Cookies erteilen können. Sie können Ihre Zustimmung jederzeit über das Cookie-Einstellungs-Widget auf unserer Website widerrufen.",
          "Beachten Sie, dass Sie die Verwendung von Cookies auf unserer Website auch ablehnen können, indem Sie die entsprechenden Einstellungen in Ihrem Webbrowser vornehmen. Wenn Sie die Verwendung von Cookies blockieren oder löschen, kann dies jedoch die Nutzung bestimmter Funktionen auf unserer Website beeinträchtigen.",
          "Wenn Sie unsere Website zum ersten Mal besuchen, wird ein Popup-Fenster mit den Cookie-Einstellungen angezeigt. Dieses Popup-Fenster dient der Zustimmung und ermöglicht es Ihnen, Ihre Präferenzen in Bezug auf Cookies anzugeben. Sie können sie akzeptieren oder ablehnen, bevor Sie Ihre Zustimmung zu Cookies geben oder sie ablehnen.",
        ],
      },
      {
        title: "Cookie-Einwilligung",
        description: [
          "Gemäß dem TDDDG und der PECD müssen wir die Einwilligung für die Verwendung von technisch nicht unbedingt erforderlichen Cookies einholen. Zu diesem Zweck verwenden wir ein Cookie-Zustimmungstool. Wenn Sie unsere Website zum ersten Mal besuchen, werden die folgenden Daten über unser Cookie-Zustimmungstool an uns übermittelt: i) Ihre Einwilligung(en) oder der Widerruf Ihrer Einwilligung(en); ii) Ihre IP-Adresse; iii) Informationen über Ihren Browser; iv) Informationen über Ihr Gerät; v) Zeitpunkt Ihres Besuchs auf unserer Website. Die Grundlage für die Verarbeitung ist unsere gesetzliche Verpflichtung.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Andere Verwendungen Ihrer persönlichen Daten",
    description: [
      "Wir werden Ihre personenbezogenen Daten nur dann verarbeiten, wenn dies erforderlich ist, damit wir die oben beschriebenen Zwecke verfolgen können, und wenn wir eine Rechtsgrundlage für eine solche Verarbeitung haben. Wenn unsere Rechtsgrundlage für die Verarbeitung darin besteht, dass diese Verarbeitung zur Verfolgung unserer berechtigten Interessen erforderlich ist, werden wir Ihre personenbezogenen Daten nur dann verarbeiten, wenn wir zu dem Schluss gekommen sind, dass unsere Verarbeitung Sie oder Ihre Privatsphäre nicht in einer Weise beeinträchtigt, die unser berechtigtes Interesse überwiegt. In Ausnahmefällen können wir auch gesetzlich verpflichtet sein, Ihre personenbezogenen Daten offenzulegen oder anderweitig zu verarbeiten.",
    ],
  },
  {
    id: 6,
    title: "Änderung des Zwecks",
    description: [
      "Wir werden Ihre persönlichen Daten nur für die Zwecke verwenden, für die wir sie wie oben beschrieben erhoben haben, es sei denn, wir sind der Meinung, dass wir sie für einen anderen Zweck verwenden müssen und dieser Grund mit dem ursprünglichen Zweck vereinbar ist. Wenn wir Ihre persönlichen Daten für einen anderen Zweck verwenden müssen, werden wir Sie darüber informieren und die Rechtsgrundlage erläutern, die uns dies erlaubt.",
    ],
  },
  {
    id: 7,
    title: "Weitergabe und Übermittlung",
    description: [
      "In bestimmten Fällen ist es erforderlich, die verarbeiteten personenbezogenen Daten im Rahmen der Datenverarbeitung zu übermitteln. Diesbezüglich gibt es verschiedene Empfängerstellen und Kategorien von Empfängern.",
    ],
  },
  {
    id: 8,
    title: "Marketing",
    description: [
      "Sofern Sie uns Ihre Zustimmung zur Verarbeitung Ihrer personenbezogenen Daten für Marketing- und Werbezwecke erteilt haben, sind wir berechtigt, Sie zu diesen Zwecken über die Kommunikationskanäle zu kontaktieren, zu denen Sie Ihre Zustimmung erteilt haben. Unser Marketing erfolgt in der Regel per E-Mail, kann aber auch andere, weniger traditionelle oder neue Kanäle umfassen. Diese Formen der Kontaktaufnahme werden von uns oder von unseren beauftragten Dienstleistern verwaltet. Jedes direkt adressierte Marketing, das von uns oder in unserem Namen verschickt wird, enthält eine Möglichkeit, mit der Sie sich abmelden oder abmelden können.",
    ],
  },
  {
    id: 9,
    title: "",
  },
  {
    id: 10,
    title: "Soziale Medien",
    description: [
      "Wir sind auf der Grundlage unseres berechtigten Interesses in sozialen Medien präsent. Wenn Sie uns über soziale Medien kontaktieren oder sich mit uns verbinden, sind wir und die betreffende Social-Media-Plattform gemeinsam für die Verarbeitung Ihrer Daten verantwortlich und schließen eine sogenannte Vereinbarung über die gemeinsame Verantwortung ab. Die personenbezogenen Daten, die erhoben werden, wenn Sie mit uns in Kontakt treten, werden zur Bearbeitung Ihrer Anfrage verwendet, und die Grundlage hierfür ist sowohl Ihre Einwilligung als auch unser berechtigtes Interesse.",
    ],
  },
  {
    id: 11,
    title: "Wie lange bewahren wir Ihre persönlichen Daten auf?",
    description: [
      "Manchmal gibt es jedoch gesetzliche oder regulatorische Anforderungen, die uns dazu verpflichten, Ihre personenbezogenen Daten für einen bestimmten Zeitraum aufzubewahren, und in solchen Fällen werden wir Ihre personenbezogenen Daten für einen solchen Zeitraum aufbewahren; und es kann sein, dass wir Ihre personenbezogenen Daten für bestimmte längere Zeiträume im Zusammenhang mit Rechtsstreitigkeiten aufbewahren müssen, und in solchen Fällen werden wir sie für solche längeren Zeiträume aufbewahren, soweit dies erforderlich ist. Je nach Dokument und gesetzlicher Regelung betragen die dort genannten Fristen für die Speicherung und Dokumentation fünf Jahre (HGB), sechs Jahre (A0) oder zehn Jahre (HGB).",
    ],
  },
  {
    id: 12,
    title: "Datensicherheit",
    description: [
      "Unsere Website verwendet eine SSL- oder TLS-Verschlüsselung, um die Sicherheit der Datenverarbeitung zu gewährleisten und die Übertragung vertraulicher Inhalte wie Bestellungen, Login-Daten oder Kontaktanfragen, die Sie an uns senden, zu schützen. Darüber hinaus haben wir zahlreiche Sicherheitsmaßnahmen (technische und organisatorische Maßnahmen") ergriffen, z. B. Verschlüsselung oder Need-to-know-Zugriff, um einen möglichst umfassenden Schutz der über unsere Website verarbeiteten personenbezogenen Daten zu gewährleisten.",
    ],
  },
  { id: 13, title: "Ihre Rechte und Privilegien" },
  {
    id: 14,
    title: "Antrag auf Zugang",
    description: [
      "Falls Sie einen Antrag auf Zugang zu Ihren Daten stellen möchten, kontaktieren Sie uns bitte. Wir werden auf Anfragen bezüglich des Zugangs und der Korrektur so schnell wie möglich antworten. Sollten wir nicht in der Lage sein, Ihre Anfrage innerhalb von dreißig (30) Tagen zu beantworten, werden wir Ihnen mitteilen, warum und wann wir in der Lage sein werden, Ihre Anfrage zu beantworten. Sollten wir nicht in der Lage sein, Ihnen persönliche Daten zur Verfügung zu stellen oder eine von Ihnen angeforderte Korrektur vorzunehmen, werden wir Ihnen die Gründe dafür mitteilen.",
    ],
  },
  {
    id: 15,
    title: "Beschwerde bei einer Aufsichtsbehörde",
    description: [
      "Sie haben das Recht, bei einer für den Datenschutz zuständigen Aufsichtsbehörde Beschwerde über die Verarbeitung personenbezogener Daten einzulegen. Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI) (www.bfdi.bund.de) ist der Bundesbeauftragte für den Datenschutz. Die Berliner Datenschutzbehörde ist die Landesdatenschutzbehörde für das Land Berlin. Die Kontaktdaten der Berliner Datenschutzbehörde finden Sie unter www.datenschutz-berlin.de. Wir würden uns jedoch freuen, wenn wir die Gelegenheit hätten, Ihre Bedenken auszuräumen, bevor Sie sich an den BfDI oder die Berliner Datenschutzbehörde wenden.",
    ],
  },
  {
    id: 16,
    title: "Datenverstöße und Benachrichtigung",
    description: [
      "Datenbanken oder Aufzeichnungen, die personenbezogene Daten enthalten, können versehentlich oder durch unrechtmäßiges Eindringen beschädigt werden. Sobald wir von einer Datenverletzung Kenntnis erlangen, werden wir alle betroffenen Personen, deren persönliche Daten möglicherweise kompromittiert wurden, benachrichtigen. Der Benachrichtigung wird eine Beschreibung der Maßnahmen beigefügt, die zur Behebung des durch die Datenverletzung entstandenen Schadens ergriffen werden. Die Benachrichtigungen werden so schnell wie möglich nach der Entdeckung des Verstoßes versandt.",
    ],
  },
  { id: 17, title: "Was wir nicht tun" },
  {
    id: 18,
    title: "Hilfe und Beschwerden",
    description: [
      "Wenn Sie Fragen zu dieser Richtlinie oder zu den Informationen, die wir über Sie gespeichert haben, haben, wenden Sie sich bitte per E-Mail an info@mietschuldenfreiheitsbescheinigung.de.",
    ],
  },
  {
    id: 19,
    title: "Änderungen",
    description: [
      "Die erste Version dieser Richtlinie wurde am Samstag, den 23. November 2024, veröffentlicht und ist die aktuelle Version. Alle früheren Versionen sind ungültig, und wenn wir Änderungen an dieser Richtlinie vornehmen, werden wir das Datum des Inkrafttretens ändern.",
    ],
  },
];

export default function DataProtectionPage() {
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
    if (!data || data.length === 0) return;

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

    Object.values(refMap.current).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [data]);

  return (
    <>
      <HeroSection />
      {/* Blog Content */}
      <section>
        <div className="bg-white sm:max-w-wider lg:max-w-8xl 2xl:max-w-9xl m-auto px-4 py-10 lg:py-20 space-y-10 grid lg:grid-cols-3 gap-x-20 items-start">
          {/* left section  */}
          <div className="lg:col-span-2 space-y-10">
            {data?.map((section: DataSection, index: number) => (
              <div
                key={index}
                id={section?.title}
                data-title={section.title}
                ref={getRef(section.title)}
                className="space-y-5"
              >
                <h2
                  className={`${
                    activeSection === section.title
                      ? "text-xl lg:text-4xl 2xl:text-52 lg:leading-50 2xl:leading-70"
                      : "text-xl lg:text-3xl 2xl:text-32 lg:leading-45 2xl:leading-70"
                  } break-words tracking-normal lg:tracking-wide font-normal leading-normal`}
                >
                  {section.title}
                </h2>
                {section?.description &&
                  section.description.map((i: string, index: number) => (
                    <p
                      key={index}
                      className="text-base lg:text-xl 2xl:text-28 2xl:leading-50 tracking-normal lg:tracking-wide break-words"
                    >
                      {i}
                    </p>
                  ))}
                <div>
                  {section.subContent &&
                    section.subContent.map((subContent: SubContent, index: number) => (
                      <div
                        key={index}
                        className="space-y-2 lg:space-y-4 2xl:space-y-5"
                      >
                        <h2 className="font-medium lg:text-xl 2xl:text-28 tracking-normal lg:tracking-wide leading-medium 2xl:leading-50 break-words">
                          {subContent.title}
                        </h2>
                        {subContent.description.map((subDescription: string, index: number) => (
                          <p
                            key={index}
                            className="lg:ps-2 text-base lg:text-xl 2xl:text-28 2xl:leading-50 font-normal tracking-normal lg:tracking-wide break-words"
                          >
                            {subDescription}
                          </p>
                        ))}
                        {subContent.list && (
                          <ul className="space-y-4 list-disc list-inside">
                            {subContent.list.map((i: string, lIndex: number) => (
                              <li
                                className="tracking-normal lg:tracking-wide text-base lg:text-xl 2xl:text-28 2xl:leading-50 break-words"
                                key={lIndex}
                              >
                                {i}
                              </li>
                            ))}
                          </ul>
                        )}
                        {subContent.subDescription &&
                          subContent.subDescription.map((i: string, index: number) => (
                            <p
                              key={index}
                              className="text-secondary-text text-base lg:text-xl 2xl:text-28 2xl:leading-50 tracking-normal lg:tracking-wide break-words"
                            >
                              {i}
                            </p>
                          ))}
                      </div>
                    ))}{" "}
                </div>
              </div>
            ))}
          </div>
          {/* Right section  */}
          <div className="hidden lg:block row-span-2 bg-[#fcfcfc] space-y-4 2xl:space-y-5 sticky top-10 self-start p-4">
            <h6 className="text-primary-black opacity-80 mb-8 text-2xl">
              Inhaltsverzeichnis
            </h6>
            {data?.map((section: DataSection, index: number) => (
              <div
                key={index}
                onClick={() => scrollToSection(section.title)}
                className={`relative cursor-pointer block text-start w-full transition-colors duration-300 overflow-visible ${
                  activeSection === section.title
                    ? "text-black"
                    : "text-secondary-black"
                }`}
              >
                <span
                  className={`absolute z-50 -left-5 top-1/2 -translate-y-1/2 h-full w-1.5 bg-primary-green transition-all duration-300 ${
                    activeSection === section.title
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                ></span>
                <h2 className="break-words font-normal text-lg lg:text-base 2xl:text-2xl tracking-wider">
                  {section.title}
                </h2>
                {section.subContent && (
                  <div className="space-y-2 lg:space-y-4 2xl:space-y-5 px-2 mt-2">
                    {section.subContent &&
                      section.subContent.map((subContent: SubContent, index: number) => (
                        <h4
                          key={index}
                          className="text-base 2xl:text-xl break-words tracking-wide font-normal "
                        >
                          {subContent.title}
                        </h4>
                      ))}{" "}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function HeroSection() {
  return (
    <section>
      <div className="h-full mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full">
          <Image
            loading="lazy"
            className="w-full h-full object-cover"
            src="/banner/data-protection.png"
            alt="impressum"
            width={800}
            height={600}
          />
        </div>
        <div className="bg-primary-green text-white content-end">
          <div className="w-full max-w-2xl 2xl:max-w-4xl mx-auto py-10 lg:py-20 space-y-5 lg:space-y-10 px-4 lg:px-4">
            <p className="text-base lg:text-xl 2xl:text-28 font-normal lg:leading-45 2xl:leading-50">
              Ihre Sicherheit und der Schutz Ihrer Daten stehen bei uns an
              erster Stelle. Sie können sich bei uns umfassend zum Thema
              Mietschuldenfreiheitsbescheinigung informieren.
            </p>
            <ul className="text-lg lg:text-xl 2xl:text-3xl space-y-5 2xl:space-y-8">
              {[
                "Wir sind eine reine Informationsseite",
                "Wir speichern keinerlei persönliche Daten",
                "Personenbezogene Daten werden nicht verarbeitet",
              ].map((i: string, index: number) => (
                <li
                  key={index}
                  className="flex items-center gap-x-4 text-base lg:text-xl 2xl:text-32 font-normal"
                >
                  <GoShieldCheck className="flex-shrink-0 font-bold" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 