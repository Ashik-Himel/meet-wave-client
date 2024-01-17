import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export const metadata = {
  title: 'MeetWave - Online Meeting Conference',
  description: 'MeetWave is an online meeting platform which is containing video conference, audio conference, screen sharing, chat and messaging, meeting controlling and others feature to arrange a meeting online.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#0D141E] text-white flex flex-col [&>*:nth-child(2)]:flex-1 min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
