import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/base.css";
import "@/styles/navbar.css";
import "@/styles/hero.css";
import "@/styles/sections.css";
import "@/styles/contact.css";
import "@/styles/footer.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700", "800"] });

export const metadata = {
  title: "PranaHome Nursing | Professional home nursing in Kerala & Tamil Nadu",
  description: "Verified nurses and caregivers for elder care, mother & baby care, patient care, physiotherapy and home maid services. 24/7 support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.variable}>{children}</body>
    </html>
  );
}
