'use client';
import { useEffect } from 'react';
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'
import Link from 'next/link'
import { useAnimate } from "framer-motion";

const Navbar = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("div", { y: [-100, -1], scale: [0, 1] }, { type: "spring" },)
  }, [])

  return (
    <nav className='relative container mx-auto p-6'>

      <div ref={scope} className='flex justify-between items-center'>
        <div className='flex items-center space-x-20'>
          <Image src={Logo} alt='Logo' />
          <div className='hidden space-x-8 font-bold lg:flex'>
            <Link href="/" className='text-grayishViolet hover:text-veryDarkViolet'>Features</Link>
            <Link href="/" className='text-grayishViolet hover:text-veryDarkViolet'>Pricing</Link>
            <Link href="/" className='text-grayishViolet hover:text-veryDarkViolet'>Resourses</Link>
          </div>
        </div>

        <div className='hidden items-center space-x-6 font-bold text-grayishViolet lg:flex'>
          <Link href="/" className='text-grayishViolet hover:text-veryDarkViolet'>Login</Link>
          <Link href="/" className='text-white bg-cyan hover:opacity-70 rounded-full py-3 px-8'>Sign Up</Link>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
