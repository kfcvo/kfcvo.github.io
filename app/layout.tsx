import type { Metadata } from "next";
import "./globals.css";

const description = "陈知雨的个人作品集：产品策略、AI 产品、复杂系统与视觉实践。";

export const metadata: Metadata = {
  metadataBase: new URL("https://kfcvo.github.io"),
  title: { default: "陈知雨 · Product & AI Portfolio", template: "%s · 陈知雨" },
  description,
  openGraph: {
    type: "website",
    title: "陈知雨 · Product & AI Portfolio",
    description,
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "陈知雨的产品与 AI 作品集" }],
  },
  twitter: { card: "summary_large_image", title: "陈知雨 · Product & AI Portfolio", description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
