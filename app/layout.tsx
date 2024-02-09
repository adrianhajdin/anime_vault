import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117] min-h-screen">
          {children}
          {modal}
          <div id="modal-root" />
        </main>
      </body>
    </html>
  );
}
