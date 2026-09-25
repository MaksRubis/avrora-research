import type { Metadata } from "next";
import { Inter, Sora, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Аврора — Маркетингове дослідження мережі магазинів в Україні",
  description:
    "Комплексне маркетингове дослідження мережі мультимаркетів «Аврора»: ринок роздрібної торгівлі України, конкурентний аналіз, сегментація аудиторії, SWOT, маркетинг-мікс 7P та стратегічні рекомендації.",
  keywords: [
    "Аврора",
    "маркетингове дослідження",
    "роздрібна торгівля Україна",
    "дискаунтер",
    "SWOT",
    "конкурентний аналіз",
    "ритейл",
  ],
  authors: [{ name: "Маркетингове дослідження" }],
  openGraph: {
    title: "Аврора — Маркетингове дослідження",
    description:
      "Аналіз мережі мультимаркетів «Аврора» в Україні: ринок, конкуренти, аудиторія, стратегія.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
