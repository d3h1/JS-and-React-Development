import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cabaravdic Industries',
  description: 'Software Solutions for every Situation',
  keywords:
    'web development, AI, back-end, front-end, freelance, etc'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>PAGE</h1>
        {children}
        </body>
    </html>
  )
}
