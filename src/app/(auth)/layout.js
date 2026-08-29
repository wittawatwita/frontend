import { Prompt, Lora } from "next/font/google";
import "../globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "700"],
  variable: "--font-prompt", 
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-lora", 
});

export const metadata = {
  title: "Admin Gateway - เข้าสู่ระบบ",
  description: "ระบบจัดการเทคโนโลยีและนวัตกรรม",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${lora.variable} h-full antialiased`}
    >
      <body className={`${prompt.className} min-h-full bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
