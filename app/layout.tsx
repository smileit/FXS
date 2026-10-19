import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "风响树科技 | 深圳风响树科技有限公司 - 软件开发 · 系统集成 · 技术服务",
  description:
    "深圳市风响树科技有限公司，2014 年成立于深圳。专注软件定制开发、系统集成与技术服务外包，提供平安城市、小区安防、酒店安防、人脸识别、无人值守地磅及小程序定制等一体化解决方案。",
  keywords:
    "风响树科技,安防解决方案,人脸识别,海康威视,平安城市,智慧地磅,小程序开发,深圳",
  openGraph: {
    title: "风响树科技 | 软件开发 · 系统集成 · 技术服务",
    description: "软件开发、系统集成与技术服务外包的一体化交付。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#050b1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
