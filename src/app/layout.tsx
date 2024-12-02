import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/src/app/_components/navbar";

const poppins = Poppins({
  style: "normal",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | SherpaBank",
    default: "SherpaBank",
  },
  description: "Your trusted guide for your financial journey",
  authors: [{ name: "favour oghenekowho", url: "https://newtonfav.xyz" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-primary-100 text-black min-h-screen flex flex-col`}
      >
        <NavBar />

        <div className="flex-1 grid">
          <main className="mx-auto w-full overflow-x-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
