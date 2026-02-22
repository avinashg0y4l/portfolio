import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Avinash Goyal | Portfolio",
  description: "Portfolio of Avinash Goyal - Robotics, Embedded Systems, AI-driven Automation, and Software Development. Currently working with CoGrad.",
  keywords: [
    "Avinash Goyal",
    "Portfolio",
    "Robotics",
    "Embedded Systems",
    "AI",
    "Software Development",
    "React",
    "Next.js",
    "CoGrad",
    "Tinkering Sir",
    "Avinash Goyal Bihar",
    "Tinkering Sir",
    "ATL Sir",
    "Cograd",
    "Avinash Goyal India",
    "Avinash Goyal CoGrad",
    "avinash goyal jnv",
    "avinash goyal JNV pauri",
    "Avinash Goyal Pauri Garhwal",
    "avinashg0y4l",
    "paurigarhwal",
    "pithoragarh",
    "NVS",
    "Navodaya Vidyalaya Samiti",
    "Jawahar Navodaya Vidyalaya",
    "JNV Workshop",
    "Robotics Workshop",
  ],
  authors: [{ name: "Avinash Goyal" }],
  creator: "Avinash Goyal",
  publisher: "Avinash Goyal",
  metadataBase: new URL("https://avinashg0y4l.github.io/portfolio"),
  openGraph: {
    title: "Avinash Goyal | Portfolio",
    description: "Portfolio of Avinash Goyal - Robotics, Embedded Systems, AI-driven Automation, and Software Development",
    url: "https://avinashg0y4l.github.io/portfolio",
    siteName: "Avinash Goyal Portfolio",
    images: [
      {
        url: "/assets/work-1.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Goyal | Portfolio",
    description: "Portfolio of Avinash Goyal - Robotics, Embedded Systems, AI-driven Automation, and Software Development",
    images: ["/assets/work-1.png"],
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
