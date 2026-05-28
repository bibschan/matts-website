import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Matt Carolan — Cloud & AI Technology Leader",
  description:
    "Matt Carolan is a Cloud & AI Technology Leader based in Vancouver, Canada. Microsoft MVP and Google Leader with 13+ years in cloud technology.",
  openGraph: {
    title: "Matt Carolan — Cloud & AI Technology Leader",
    description:
      "Microsoft MVP and Google Leader enabling businesses globally to gain a competitive advantage with Cloud and AI.",
    url: "https://www.mattcarolan.com",
    siteName: "Matt Carolan",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-navy font-sans">{children}</body>
    </html>
  );
}
