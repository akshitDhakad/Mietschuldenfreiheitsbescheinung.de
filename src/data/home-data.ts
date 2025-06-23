const bannerData = [
  {
    id: 0,
    description:
      "Deine Mietschuldenfreiheitsbescheinigung: Online erstellt und direkt verfügbar",
    img: "/assets/banners/home-banner.png",
  },
  {
    id: 1,
    description:
      "Erstellen Sie Mietschuldenfreiheitsbescheinigungen für Ihre Mieter in nur wenigen Minuten",
    img: "/assets/banners/home-banner2.png",
  },
];

const verifiyData = [
  {
    title: "schnelles Verfahren",
    description:
      "Dank digitalem Prozess und ohne Papierkram schneller zur Mietbescheinigung",
    img: "/assets/icons/credibility.png",
  },
  {
    title: "seriöser Nachweis",
    description:
      "Schluss mit improvisierten Lösungen: Eine professionelle Mietschuldenfreiheitsbescheinigung sorgt für ein seriöses Auftreten.",
    img: "/assets/icons/certificate.png",
  },
  {
    title: "verlässlicher Beleg",
    description:
      "Die Sicherheitsmerkmale der Bescheinigung sorgen für eine verlässliche Grundlage für alle Beteiligten.",
    img: "/assets/icons/data-security.png",
  },
];

const securityData = [
  {
    title: "Verschlüsselung und Speicherung",
    description:
      "Um unbefugten Zugriff zu verhindern, werden alle Daten mit modernsten Technologien verschlüsselt. Alle Daten speichern wir ausschließlich auf europäischen Servern.",
    icon: "/assets/icons/data-security-icon1.png",
    img: "/assets/img/data-security-img1.png",
  },
  {
    title: "Datenschutz",
    description:
      "Wir halten uns an strenge Datenschutzrichtlinien und garantieren, dass alle Informationen ausschließlich zwischen Mietern und Vermietern ausgetauscht werden.",
    icon: "/assets/icons/data-security-icon2.png",
    img: "/assets/img/data-security-img2.png",
  },
  {
    title: "Regelmäßige Sicherheitsüberprüfungen",
    description:
      "Unser System unterliegt regelmäßigen Sicherheitsprüfungen und Audits, um potenzielle Schwachstellen zu identifizieren und zu beheben.",
    icon: "/assets/icons/data-security-icon3.png",
    img: "/assets/img/data-security-img3.png",
  },
];

const certificateSteps = {
  0: [
    {
      title: "Eingabe deiner Daten",
      description:
        "Erfasse deine persönlichen Daten und gebe Informationen zu deiner gemieteten Wohnung und der Mietdauer an. Von deinem Vermieter oder Vermieterin benötigen wir nur den Namen und die E-Mail-Adresse.",
    },
    {
      title: "Anfrage absenden",
      description:
        "Um deine Identität sicher zu verifizieren, erhältst du eine SMS mit einer einmaligen TAN. Damit startest du den unkomplizierten Prozess um deine Mietschuldenfreiheitsbescheinigung zu erstellen.",
    },
    {
      title: "Bestätigung durch den Vermieter",
      description:
        "Wir bitten deine/n Vermieter/in, uns bei der Erstellung deiner Bescheinigung zu unterstützen. Er bzw. sie prüft alle Daten und bestätigt, ob alle Mieten gezahlt worden sind und ob Rückstände bestehen. Als Nachweis wird das Dokument anschließend unterschrieben und dein/e Vermieterin mit einer SMS-TAN identifiziert.",
    },
    {
      title: "Zahlung",
      description:
        "Deine Bescheinigung steht nun schon bereit. Die Zahlung für unseren Service kannst du ganz bequem über verschiedene sichere Zahlungsmethoden erledigen. Sobald du das erledigt hast, erstellen wir deine Bescheinigung.",
    },
    {
      title: "Bescheinigung erhalten",
      description:
        "Nach deiner Zahlung hast du zwei Optionen: Du kannst die Bescheinigung als PDF-Dokument herunterladen oder wir schicken sie, wenn du möchtest, zusätzlich bequem per Post zu dir nach Hause. Damit hast du schnell und ohne großen Aufwand den erforderlichen Nachweis für deinen neuen Mietvertrag in den Händen.",
    },
  ],
  1: [
    {
      title: "Vermieter-Konto einrichten",
      description:
        "Erstellen Sie kostenlos und unverbindlich ein Vermieter-Konto. Darüber erstellen Sie künftig alle Bescheinigungen. Außerdem können Sie auf bisher erstellte Bescheinigungen zugreifen und neu versenden. Außerdem finden Sie hier alle dazugehörigen Rechnungen.",
    },
    {
      title: "Bescheinigung erstellen",
      description:
        "Erfassen Sie alle Details zu Ihren Mietern, der gemieteten Wohnung und der Mietdauer.",
    },
    {
      title: "Bescheinigen Sie die Zuverlässigkeit Ihrer Mieter",
      description:
        "Bewerten Sie die Verlässlichkeit Ihrer Mieter und erfassen Sie gegebenenfalls Mietrückstände. Ihre Eingaben bestätigen Sie mit Ihrer Unterschrift und einer SMS-TAN.",
    },
    {
      title: "Zahlung",
      description:
        "Die Zahlung für unseren Service können Sie ganz bequem online über verschiedene sichere Zahlungsmethoden tätigen. Nach erfolgter Zahlung steht die Bescheinigung bereit.",
    },
    {
      title: "Bescheinigung erhalten",
      description:
        "Sie können die Mietbescheinigung als PDF-Dokument herunterladen oder wir senden sie, wenn Sie möchten, Ihren Mietern direkt per Post nach Hause. ",
    },
  ],
};

const certificateSteps2 = [
  {
    title: "Du bist Mieter?",
    description:
      "Mit den richtigen Unterlagen schneller zur Traumwohnung: Detaillierte Informationen zur Mietschuldenfreiheitsbescheinigung für dich als Mieter.",
    img: "/assets/img/certificate-step-img2.png",
    link: "/blog/mieter",
  },
  {
    title: "Sind Sie Vermieter?",
    description:
      "So können sich Vermieter mit einer Mietschuldenfreiheitsbescheinigung vor Zahlungsausfällen schützen.",
    img: "/assets/img/certificate-step-img3.png",
    link: "/blog/vermieter",
  },
];

const certificateSteps3 = {
  0: [
    {
      icon: "/assets/icons/flash.png",
      title: "Schnelle Abwicklung",
      description:
        "Die Teilnahme deines Vermieters vorausgesetzt, vergehen von der Beantragung bis zur Ausstellung deiner Mietschuldenfreiheitsbescheinigung nur wenige Minuten.",
    },
    {
      icon: "/assets/icons/lamp-charge.png",
      title: "Einfacher Beantragungsprozess",
      description:
        "Unsere Plattform wurde entwickelt, um den gesamten Prozess für Mieter und Vermieter so einfach wie möglich zu gestalten.",
    },
    {
      icon: "/assets/icons/medal-star.png",
      title: "Zuverlässigkeit und Rechtskonformität",
      description:
        "Unsere Bescheinigung erfüllt alle rechtlichen Anforderungen und wird von künftigen Vermietern anstandslos anerkannt.",
    },
    {
      icon: "/assets/icons/security-user.png",
      title: "Datenschutz und Sicherheit",
      description:
        "Alle Daten sind bei uns durch moderne Verschlüsselungstechniken geschützt und gemäß den Vorgaben der Datenschutz-Grundverordnung (DSGVO) verarbeitet.",
    },
    {
      icon: "/assets/icons/cards.png",
      title: "Flexible Zahlungsmöglichkeiten",
      description:
        "Wir machen es dir leicht: Wähle aus unseren verschiedenen Zahlungsmöglichkeiten die für dich passende aus.",
    },
    {
      icon: "/assets/icons/like.png",
      title: "Zuverlässiger Support",
      description:
        "Sollten zu irgendeinem Zeitpunkt Fragen entstehen, steht dir unser Support jederzeit für alle deine Fragen zur Verfügung.",
    },
  ],
  1: [
    {
      icon: "/assets/icons/flash.png",
      title: "Schnelle Abwicklung",
      description:
        "Für die Erstellung der Mietschuldenfreiheitsbescheinigung benötigen Sie nur wenige Minuten.",
    },
    {
      icon: "/assets/icons/lamp-charge.png",
      title: "Einfacher Beantragungsprozess",
      description:
        "Unsere Plattform wurde entwickelt, um den gesamten Prozess, von der Erstellung bis zum Versand, so einfach wie möglich zu gestalten.",
    },
    {
      icon: "/assets/icons/medal-star.png",
      title: "Zuverlässigkeit und Rechtskonformität",
      description:
        "Unsere Bescheinigung erfüllt alle rechtlichen Anforderungen und wird von künftigen Vermietern anstandslos anerkannt.",
    },
    {
      icon: "/assets/icons/security-user.png",
      title: "Datenschutz und Sicherheit",
      description:
        "Alle Daten sind bei uns durch moderne Verschlüsselungstechniken geschützt und werden gemäß den Vorgaben der Datenschutz-Grundverordnung (DSGVO) verarbeitet.",
    },
    {
      icon: "/assets/icons/cards.png",
      title: "Flexible Zahlungsmöglichkeiten",
      description:
        "Um Ihren Wünschen gerecht zu werden, stehen Ihnen diverse Zahlungsoptionen zur Verfügung.",
    },
    {
      icon: "/assets/icons/like.png",
      title: "Zuverlässiger Support",
      description:
        "Falls Sie Unterstützung benötigen, sind wir jederzeit für Sie da.",
    },
  ],
};

export {
  bannerData,
  verifiyData,
  securityData,
  certificateSteps,
  certificateSteps2,
  certificateSteps3,
};
