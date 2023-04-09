import './globals.css'
import { Poppins } from 'next/font/google'
import { Navbar } from './components'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})
export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
        <title>Shortly</title>
      </head>
      <body>
        <main className={poppins.className}>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
