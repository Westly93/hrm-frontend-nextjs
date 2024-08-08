import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from '@/redux/provider'
import {Setup} from '@/components/utils'
import {Navbar} from '@/components/common';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Auth App",
  description: "Full Auth application that provides jwt application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar/>
          <Setup/>
          {children}
        </Provider>
        </body>
    </html>
  );
}
