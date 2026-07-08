import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const outfit = Outfit({ subsets: ['latin'], weight: ['500', '700', '800', '900'], variable: '--font-heading' })

export const metadata = {
  title: 'GymOS - Premium Gym Management Software India',
  description: 'India\'s Smartest Gym Management Software that automatically creates a personal website for every gym member in just 3 seconds. CRM, Attendance, and more.',
  keywords: 'Gym Management Software India, Gym Software, Fitness Management Software, Gym CRM, Gym ERP, Attendance Software, Member Management Software',
  openGraph: {
    title: 'GymOS - Premium Gym Management Software India',
    description: 'India\'s Smartest Gym Management Software that automatically creates a personal website for every gym member in just 3 seconds.',
    url: 'https://gymos.com',
    siteName: 'GymOS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GymOS - Premium Gym Management Software India',
    description: 'India\'s Smartest Gym Management Software.',
  },
  alternates: {
    canonical: 'https://gymos.com',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
