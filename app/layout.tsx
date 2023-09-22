import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kennedy |Portfolio ",
  description: "Kennedy is a full-stack engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  text-gray-950 `}>
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem]  h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#90a3da] absolute top-[-1rem] left-[35rem]  h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div> */}
        <div className="bg-gradient-to-t from-cyan-500 to-blue-500 h-96">
          kennedy
        </div>
        {children}
      </body>
    </html>
  );
}
