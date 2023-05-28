import "./globals.css";
import { Poppins } from "next/font/google";

export const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "InfoJobs Lite",
  description: "Mas pequeño, mas rapido, mas cool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
