import "./globals.css";
import { Cormorant_Garamond, Sora } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const body = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata = {
  title: "Refine Card Waitlist",
  description: "Join the Refine Card waitlist and unlock penalty-free credit with referrals."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${body.variable} font-sans`}>{children}</body>
    </html>
  );
}
