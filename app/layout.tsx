import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/SEO/JsonLd";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slicvidia.com"),
  title: {
    default: "Slicvidia | Smart Digital Solutions for Ambitious Businesses",
    template: "%s | Slicvidia",
  },
  description:
    "Slicvidia by Hakeem Software Solutions provides high-performance web development, digital marketing, and scalable SaaS solutions to help your business grow.",
  keywords: [
    "Web Development",
    "Digital Marketing",
    "SaaS Solutions",
    "Slicvidia",
    "Hakeem Software Solutions",
    "Software Development India",
    "Business Growth",
  ],
  authors: [{ name: "Slicvidia Team", url: "https://slicvidia.com" }],
  creator: "Slicvidia",
  publisher: "Hakeem Software Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/slicvidialogo.jpeg",
    apple: "/slicvidialogo.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://slicvidia.com",
    siteName: "Slicvidia",
    title: "Slicvidia | Smart Digital Solutions",
    description:
      "We build and manage digital solutions that help businesses grow.",
    images: [
      {
        url: "/slicvidialogo.jpeg",
        width: 1200,
        height: 630,
        alt: "Slicvidia Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slicvidia | Smart Digital Solutions",
    description:
      "We build and manage digital solutions that help businesses grow.",
    images: ["/slicvidialogo.jpeg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden`}
      >
        <JsonLd />
        <Toaster richColors position="top-center" theme="dark" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
