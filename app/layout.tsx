import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from ".././components/Header";
import Footer from ".././components/Footer";
import { AuthContextProvider } from "../context/AuthContext";

const jetBrainsMono = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-Manrope",
});

export const metadata: Metadata = {
  title: "CareConnect",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <AuthContextProvider>
          <Header />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
