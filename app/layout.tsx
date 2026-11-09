import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crypton-blue.fragrantcomet2.chatgpt.site"),
  title: "INDRA WIJAYA — Motion Graphic & Web Development",
  description: "Portofolio INDRA WIJAYA. Eksplorasi motion graphic, web development, dan pengalaman digital yang memadukan visual, gerak, dan kode.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "INDRA WIJAYA — Motion Graphic & Web Development",
    description: "Ideas in motion. Experiences in code. Portofolio kreatif INDRA WIJAYA.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
