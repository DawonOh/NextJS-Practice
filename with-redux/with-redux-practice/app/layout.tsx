import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import StoreProvider from "./StoreProvider";
export const metadata: Metadata = {
  title: "Practice",
  description: "Redux-counter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <header className="flex-1 flexCenter">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="animate-float"
            />
          </header>
          <main className="flex-1 flexCenter">
            <StoreProvider>{children}</StoreProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
