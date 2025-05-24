import { DraftAlert } from "@/components/misc/DraftAlert";
import HeaderNav from "@/components/navigation/HeaderNav";
import FooterNav from "@/components/navigation/FooterNav";
import "@/app/global.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "BuitenBijOns - Kamperen",
    template: "",
  },
  description: "Welcome op BuitenBijOns, de meest bezochte kampings website van de benelux.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <DraftAlert />
        <HeaderNav />
        <main className="container max-w-6xl mx-auto py-10">{children}</main>
        <FooterNav />
      </body>
    </html>
  );
}
