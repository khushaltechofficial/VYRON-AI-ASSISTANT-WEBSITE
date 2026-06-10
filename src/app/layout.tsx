import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "VYRON AI — The Autonomous Neural OS Agent",
  description:
    "VYRON is a local-first AI Operating System layer that executes real-world actions across your system, apps, and devices. Turn intent into execution.",
  keywords: [
    "VYRON AI",
    "vyron ai",
    "neural os",
    "autonomous agent",
    "AI automation",
    "local AI assistant",
    "desktop AI agent",
    "VYRON Neural OS",
    "AI OS layer",
    "Khushal",
    "system automation AI",
  ],
  authors: [{ name: "Khushal" }],
  creator: "Khushal",
  robots: "index, follow",
  openGraph: {
    title: "VYRON AI — Autonomous Neural OS Execution",
    description:
      "Beyond conversation: A local-first AI system that controls your OS, automates workflows, and manages files with neural precision.",
    siteName: "VYRON AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VYRON AI — Autonomous Neural OS Execution",
    description:
      "Beyond conversation: A local-first AI system that controls your OS, automates workflows, and manages files with neural precision.",
  },
  icons: {
    icon: "/img/Logo.png",
    shortcut: "/img/Logo.png",
    apple: "/img/Logo.png",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <body className="min-h-screen flex flex-col font-sans text-[#ffffff]" style={{ background: '#050505' }}>
        <Navbar />
        <SmoothScroll>
          <main className="flex-1 relative">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
