"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkType {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkType) {
  const path = usePathname();
  return (
    <Link href={href}>
      {children}
      {path === href && " (current page)"}
    </Link>
  );
}
