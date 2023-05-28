import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
