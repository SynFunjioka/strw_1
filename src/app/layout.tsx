import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

//H1 Styles
import '../styles/bootstrap/bootstrap-grid.min.css';
import '../styles/bootstrap/bootstrap-utilities.min.css';
import '../styles/main.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kiuone',
  description: 'Licenses by Kiuone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
