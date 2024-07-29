import { Analytics } from "@vercel/analytics/react";
import "./global.css";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GreenBuilders Limited",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          {children}
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}
