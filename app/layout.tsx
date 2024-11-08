import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { Metadata } from 'next';
import { Roboto } from "@next/font/google";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "improveu",
  description: "improveu | built yourself today",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
