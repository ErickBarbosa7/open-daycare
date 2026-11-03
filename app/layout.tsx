import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenDaycare | Feed de padres",
  description: "El día a día de tu familia en OpenDaycare.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
