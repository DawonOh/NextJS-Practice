import type { Metadata } from "next";
import NavLink from "@/components/nav-link";

export const metadata: Metadata = {
  title: "practice",
  description: "active-class-name-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/dynamic-route">Dynamic Route</NavLink>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
