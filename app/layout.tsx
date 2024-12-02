import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata for the application.
 * 
 * This object contains metadata information for SEO and social media sharing.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://aylawhocodes.com"),
  title: "AylaWhoCodes | Building Projects That Spark Joy",
  description: "A collection of my live projects featuring creative solutions, sleek designs, and functional web experiences. Explore and connect!",
  openGraph: {
    title: "AylaWhoCodes | Building Projects That Spark Joy",
    description: "A collection of my live projects featuring creative solutions, sleek designs, and functional web experiences. Explore and connect!",
    url: new URL("https://aylawhocodes.com"),
    siteName: "AylaWhoCodes",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
