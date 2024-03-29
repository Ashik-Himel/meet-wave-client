import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContextProvider from '@/lib/ContextProvider'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export const metadata = {
  title: 'MeetWave - Online Meeting Conference',
  description: 'MeetWave is an online meeting platform which is containing video conference, audio conference, screen sharing, chat and messaging, meeting controlling and others feature to arrange a meeting online.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-bgColor text-white`}>
        <ContextProvider>
          <div className='flex flex-col [&>*:nth-child(2)]:flex-1 min-h-screen'>
            <Header />
            {children}
            <Footer />
          </div>
          
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </ContextProvider>
      </body>
    </html>
  );
}
