import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Ravi Lambe | Full-Stack, AI/ML & Data Science Portfolio",
  description:
    "Portfolio of Ravi Lambe, a B.Tech CSE student building full-stack, AI/ML, and data science projects.",
  keywords: [
    "Ravi Lambe",
    "Portfolio",
    "Full-Stack Developer",
    "AI/ML",
    "Data Science",
    "MERN",
    "B.Tech CSE",
  ],
  openGraph: {
    title: "Ravi Lambe | Full-Stack, AI/ML & Data Science Portfolio",
    description:
      "Explore projects, skills, certifications, and coding profiles across full-stack development, AI/ML, and data science.",
    url: "/",
    siteName: "Ravi Lambe Portfolio",
    images: [
      {
        url: "/shivangi-profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Ravi Lambe Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Lambe | Full-Stack, AI/ML & Data Science Portfolio",
    description:
      "Explore projects, skills, certifications, and coding profiles across full-stack development, AI/ML, and data science.",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
