import { DraftAlert } from "@/components/misc/DraftAlert";
import HeaderNav from "@/components/navigation/HeaderNav";
import FooterNav from "@/components/navigation/FooterNav";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/global.css";

export const metadata: Metadata = {
  title: {
    default: "Next.js for Drupal",
    template: "%s | Next.js for Drupal",
  },
  description: "A Next.js site powered by a Drupal backend.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DraftAlert />
        <div className="max-w-screen-lg px-6 mx-auto">
          <HeaderNav />
          <main className="container py-10 mx-auto">{children}</main>
          <FooterNav />
        </div>
      </body>
    </html>
  );
}
