import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './lib/AntdRegistry';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Starklink',
  description: 'The marketplace for your friends',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
