"use client";

import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";

// export const metadata: Metadata = {
//   title: "improveu",
//   description: "improveu | built yourself today",
// };

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
