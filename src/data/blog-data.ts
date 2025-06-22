// Blog data types
export interface BlogSection {
  title: string;
  img?: string;
  description?: string[];
  content?: {
    heading?: string;
    description?: string;
    list?: string[];
    table?: {
      th: string;
      td: string[];
    }[];
  }[];
  section?: boolean;
  list?: string[];
  tickList?: string[];
  subDescription?: string[];
  para?: {
    title: string;
    description: string;
  }[];
}

// Blog data
export const blogData: Record<string, BlogSection[]> = {
  "0": [
    {
      title: "Mietschuldenfreiheitsbescheinigung - Was ist das?",
      description: [
        "Eine Mietschuldenfreiheitsbescheinigung ist ein Dokument, das bestätigt, dass du als Mieter keine offenen Zahlungen oder Schulden bei deinem aktuellen oder früheren Vermieter hast.",
        "Diese Bescheinigung ist ein wichtiger Teil deiner Bewerbungsunterlagen für eine neue Wohnung und erhöht deine Chancen erheblich."
      ],
      content: [
        {
          heading: "Warum ist die Bescheinigung wichtig?",
          description: "Für potenzielle Vermieter ist diese Bescheinigung ein Nachweis deiner Zuverlässigkeit als Mieter.",
          list: [
            "Bestätigt deine Zahlungsmoral",
            "Zeigt, dass du ein zuverlässiger Mieter bist",
            "Erhöht deine Chancen bei der Wohnungssuche"
          ]
        }
      ]
    },
    {
      title: "Wie bekomme ich eine Mietschuldenfreiheitsbescheinigung?",
      description: [
        "Die Bescheinigung kannst du bei deinem aktuellen oder früheren Vermieter anfordern. Es gibt verschiedene Wege, dies zu tun."
      ],
      content: [
        {
          heading: "Persönliche Anfrage",
          description: "Du kannst deinen Vermieter direkt ansprechen und um die Bescheinigung bitten."
        },
        {
          heading: "Schriftliche Anfrage",
          description: "Eine formelle schriftliche Anfrage ist oft der sicherste Weg."
        },
        {
          heading: "Digitale Lösung",
          description: "Moderne Plattformen bieten digitale Lösungen für die Erstellung der Bescheinigung."
        }
      ],
      section: true
    }
  ],
  "1": [
    {
      title: "Häufige Fehler bei der Wohnungssuche",
      description: [
        "Bei der Wohnungssuche können viele Fehler passieren, die deine Chancen auf eine Wunschimmobilie verringern."
      ]
    },
    {
      title: "Fehler 1: Unvollständige Unterlagen",
      content: [
        {
          heading: "Warum das ein Problem ist",
          description: "Vermieter erhalten oft Dutzende Bewerbungen. Unvollständige Unterlagen landen schnell auf dem Absage-Stapel.",
          list: [
            "Fehlende Einkommensnachweise",
            "Keine Mietschuldenfreiheitsbescheinigung",
            "Unvollständige Selbstauskunft"
          ]
        }
      ]
    },
    {
      title: "Fehler 2: Zu spät reagieren",
      content: [
        {
          heading: "Warum Timing entscheidend ist",
          description: "Gute Wohnungen sind oft innerhalb von Stunden vergeben."
        },
        {
          heading: "Lösung",
          list: [
            "Push-Benachrichtigungen aktivieren",
            "Vorlagen für Bewerbungen bereithalten",
            "Schnell handeln - innerhalb von 24 Stunden"
          ]
        }
      ]
    }
  ],
  "2": [
    {
      title: "Digitale Lösung: Schnell & sicher",
      description: [
        "Mit einer digitalen Abwicklung kannst du dir viel Zeit und Aufwand sparen. Du gibst deine Daten ein, bestätigst deine Identität und dein Vermieter erhält eine vorformulierte Anfrage.",
        "Vorteile dieser Methode:"
      ],
      tickList: [
        "Kein Papierkram",
        "Verifizierte Identitäten",
        "Digitale Unterschrift und sofortiger PDF-Download",
        "Sichere und nachvollziehbare Kommunikation",
        "Optionaler Postversand"
      ],
      subDescription: [
        "Gerade wenn du Wert auf eine professionelle und rechtssichere Lösung legst, ist das eine moderne Alternative zum klassischen Weg."
      ]
    },
    {
      section: true
    }
  ],
  "3": [
    {
      title: "Interview mit einem Vermieter",
      description: [
        "Wir haben nachgefragt: Welche Eigenschaften machen einen Mieter zum Wunschmieter? Franco ist Eigentümer von drei Immobilien und erzählt im Interview, worauf es ihm bei der Mieterauswahl ankommt."
      ]
    },
    {
      title: "Von Versprechungen und dem ersten Eindruck",
      para: [
        {
          title: "Redaktion:",
          description: "Franco, du vermietest seit über 20 Jahren Wohnungen. Gibt es etwas, das du in all der Zeit über Mieter gelernt hast?"
        },
        {
          title: "Franco:",
          description: "Oh, eine Menge! Zum Beispiel, dass der Satz 'Ich hab meine Unterlagen gerade nicht dabei, aber ich reiche sie gleich nach' in 89% der Fälle bedeutet: Die kommen nie. Ich sage immer: Wer schon bei der Bewerbung unzuverlässig ist, macht mir keine Hoffnung auf Pünktlichkeit bei der Miete."
        }
      ]
    },
    {
      img: "/img/blog003_001.png"
    },
    {
      section: true
    }
  ]
}; 