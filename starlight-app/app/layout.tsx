import { WishProvider } from "@/context/WishContext";

import type { Metadata } from "next";

import { Poppins, Inter } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
    variable: "--font-heading",
      weight: ["400", "500", "600", "700"],
      });

      const inter = Inter({
        subsets: ["latin"],
          variable: "--font-body",
          });

          export const metadata: Metadata = {
            title: "StarLight",
              description: "Every Wish Becomes a Memory.",
              };

              export default function RootLayout({
                children,
                }: Readonly<{
                  children: React.ReactNode;
                  }>) {
                    return (
                        <html lang="en">
                              <body className={`${poppins.variable} ${inter.variable}`}>
                                      {children}
                                            </body>
                                                </html>
                                                  );
                                                  }