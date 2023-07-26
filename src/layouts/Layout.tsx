import React ,{ReactNode,useEffect}from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';




interface LayoutProps {
    children: ReactNode;
  }
  

const inter = Inter({ subsets: ['latin'] })
const Layout: React.FC<LayoutProps> = ({ children }) => {

  useEffect(() => {
    AOS.init({
      duration:800,
      once:false
    })
  }, [])

  return (
<div className={`${inter.className}`} data-aos='fade-right'>
  <Navbar/>
  <main className="flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12">
    {children}
  </main>
  <Footer/>
</div>
  )
}


export default Layout  
