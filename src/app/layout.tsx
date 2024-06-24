
import { Metadata } from "next";
import { isAbsolute } from "path";
export const metadata = {
  title: {
    default: "Next.js Tutorial - Codevolution",
    template:" %s | Codevolution",
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: '1rem',
          }}>
           <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: 'ghostwhite',
            padding: '1rem',
          }}>
          <p>Footer</p>
        </footer>
    </body>
    </html>
  );
}
