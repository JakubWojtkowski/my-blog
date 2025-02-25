import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { Metadata } from 'next';
import { Roboto } from "@next/font/google";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "improveu",
  description: "improveu | build yourself today",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0ZSBMEQ515" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0ZSBMEQ515', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className={roboto.className}>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
