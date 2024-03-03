import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { Metadata } from 'next';

export const metadata: Metadata = {
  // icons: {
  //   icon: "https://example.com/icon.png",
  //   apple: "https://example.com/apple-icon.png"
  // },
  title: "improveu",
  description: "improveu | built yourself today",
};

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
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
