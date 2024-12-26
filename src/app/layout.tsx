"use client";

import { usePathname } from "next/navigation";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${geist.className} dark bg-[#020817] flex items-center justify-center h-screen`}>
        {pathname !== "/analytics" && (
          <Link href="/analytics">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Go to Analytics Dashboard
            </button>
          </Link>
        )}
        {children}
      </body>
    </html>
  );
}