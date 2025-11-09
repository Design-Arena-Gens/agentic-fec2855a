import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flux.ai Clone",
  description:
    "Flux.ai inspired AI hardware design platform clone built with Next.js",
  metadataBase: new URL("https://agentic-fec2855a.vercel.app"),
  openGraph: {
    title: "Flux.ai Clone",
    description:
      "Explore an AI-first platform for hardware design inspired by Flux.ai",
    url: "https://agentic-fec2855a.vercel.app",
    siteName: "Flux.ai Clone",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Flux.ai Clone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flux.ai Clone",
    description:
      "Explore an AI-first platform for hardware design inspired by Flux.ai",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
