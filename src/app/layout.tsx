import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import DevCursor from "./DevCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srishti Agarwal | Founding Engineer",
  description: "Founding Engineer specializing in backend systems and AI/ML integration. Exploring the intersection of multi-tenant microservices and generative AI.",
  openGraph: {
    title: "Srishti Agarwal | Founding Engineer",
    description: "Founding Engineer specializing in backend systems and AI/ML integration. Exploring the intersection of multi-tenant microservices and generative AI.",
    url: "https://srishti.dev",
    siteName: "Srishti Agarwal Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srishti Agarwal | Founding Engineer",
    description: "Founding Engineer specializing in backend systems and AI/ML integration.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <DevCursor />
        {children}
      </body>
    </html>
  );
}
