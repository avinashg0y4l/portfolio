import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "Avinash Goyal | AI, Robotics & STEM Educator",

  description:
    "Avinash Goyal is an AI, Robotics, Embedded Systems and STEM educator working with students through hands-on technology workshops at Jawahar Navodaya Vidyalayas including JNV Sirpur Kagaznagar, JNV Daman, JNV Karimnagar, JNV Pauri Garhwal and JNV Pithoragarh.",

  keywords: [
    "Avinash Goyal",
    "Avinash Goyal Portfolio",
    "Avinash Goyal India",
    "avinashg0y4l",

    "AI Educator",
    "AI Trainer",
    "Robotics Educator",
    "Robotics Trainer",
    "STEM Educator",
    "STEM Trainer",
    "AI ML Workshop",
    "Robotics Workshop",
    "IoT Workshop",
    "Embedded Systems",
    "Artificial Intelligence",
    "Machine Learning",
    "Robotics",
    "IoT",
    "Technology Education",

    "Avinash Goyal JNV",
    "Avinash Goyal Navodaya",
    "Avinash Goyal JNV Workshop",
    "Jawahar Navodaya Vidyalaya",
    "JNV Workshop",
    "JNV Robotics Workshop",
    "JNV AI Workshop",
    "Navodaya Vidyalaya Workshop",
    "Navodaya AI Workshop",
    "Navodaya Robotics Workshop",
    "Navodaya STEM Workshop",
    "Navodaya Vidyalaya Samiti",
    "NVS",

    "JNV Sirpur Kagaznagar",
    "Avinash Goyal JNV Sirpur Kagaznagar",
    "Jawahar Navodaya Vidyalaya Sirpur Kagaznagar",

    "JNV Daman",
    "Avinash Goyal JNV Daman",
    "Jawahar Navodaya Vidyalaya Daman",

    "JNV Karimnagar",
    "Avinash Goyal JNV Karimnagar",
    "Jawahar Navodaya Vidyalaya Karimnagar",

    "JNV Pauri Garhwal",
    "Avinash Goyal JNV Pauri Garhwal",
    "Jawahar Navodaya Vidyalaya Pauri Garhwal",

    "JNV Pithoragarh",
    "Avinash Goyal JNV Pithoragarh",
    "Jawahar Navodaya Vidyalaya Pithoragarh",
  ],

  authors: [
    {
      name: "Avinash Goyal",
      url: "https://avinashg0y4l.github.io/portfolio",
    },
  ],

  creator: "Avinash Goyal",
  publisher: "Avinash Goyal",

  metadataBase: new URL(
    "https://avinashg0y4l.github.io/portfolio/"
  ),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Avinash Goyal | AI, Robotics & STEM Educator",
    description:
      "Portfolio of Avinash Goyal — AI, Robotics, Embedded Systems, IoT and STEM educator working with students through hands-on technology workshops.",
    url: "https://avinashg0y4l.github.io/portfolio/",
    siteName: "Avinash Goyal Portfolio",
    images: [
      {
        url: "/portfolio/assets/work-1.png",
        width: 800,
        height: 600,
        alt: "Avinash Goyal - AI, Robotics and STEM Educator",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Avinash Goyal | AI, Robotics & STEM Educator",
    description:
      "AI, Robotics, Embedded Systems, IoT and STEM educator working with students across Jawahar Navodaya Vidyalayas.",
    images: ["/portfolio/assets/work-1.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "2JlIE7TPnWz99WASUcU3KS8TSEavXDBfBYrDz9Tg3MY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
