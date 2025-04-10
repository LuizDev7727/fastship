import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { enableMSW } from "@/mocks";
import Providers from "./providers";

enableMSW()

const inter = Inter()

export const metadata: Metadata = {
  title: "Fastship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
