import "./globals.css";
import type { Metadata, Viewport } from "next";
export const metadata: Metadata = { title: "Feliz Aniversário, Pai", description: "Uma homenagem especial", robots: { index: false, follow: false } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#1a1210" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt-BR"><body>{children}</body></html>);
}
