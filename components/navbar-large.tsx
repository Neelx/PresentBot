import React from 'react'
import MaxWidthWrapper from './common/MaxWidthWrapper'
import Link from 'next/link'
import Navbarmobile from './navbar-mobile'
import{ LayoutDashboardIcon, Bot } from 'lucide-react'
import { buttonVariants } from './ui/button'

const Navbarlarge = () => {
    const user = false;

  return (
    <MaxWidthWrapper className='flex items-center justify-between px-8 py-4 w-full text-gray-900 border-b border-gray-300' >
        <div className='flex items-center space-x-8'>
        <Link href='/'
        className='text-normal font-semibold flex gap-2 items-center'
        >
            <Bot/>
          <span>PresentGen</span>
        </Link>
        <div className='sapce-x-8 hidden md:flex text-sm'>
          <Link href='/generate'>Generate</Link>
          <Link href='guidelines'>guidelines</Link>
        </div>
        <Navbarmobile/>

        </div>
        <Navbarmobile/>
        <div className='space-x-4 flex items-center'>
            {user ? (<Link 
            href={"/dashboard"} className={buttonVariants()}>
            Dashboard<LayoutDashboardIcon className="h-6 w-6"/>
            </Link>) : (
                <div>
                
                <Link href={'/login'} className={buttonVariants({ variant: "ghost" })}>Login</Link>
                <Link href={'/register'} className={buttonVariants()}>Create Account</Link>
                </div>
                )}
            </div>        
    </MaxWidthWrapper>
  )
}

export default Navbarlarge;
