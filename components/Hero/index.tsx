import React from 'react'
import MaxWidthWrapper from '../common/MaxWidthWrapper';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { Card } from '../ui/card';
import Image from 'next/image';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-indigo-300'>
      <MaxWidthWrapper>
        <div className='grid lg:grid-cols-2 items-center'>
            <div className='lg:text-left text-center'>
                <h1 className='mb-6 text-4xl font-black leading-tight text-gray-900 lg:text-6xl'>
                    Generate any kind of <span className='text-green-600'>Powerpoint</span> from
                    videos.
                </h1>
                <p className='mb-9 text-lg text-gray-600'>
                  AI-powered PowerPoint generator creates professional slides from videos, 
                  adding relevant visuals, layouts, and themes, saving time and enhancing presentation quality.
                </p>
                <div className='flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4'>
                  <RegisterLink href='/' className={buttonVariants({className: " w-full sm:w-auto",})}>Get started</RegisterLink>
                  <LoginLink href='/' className={buttonVariants({variant: "secondary", className: " w-full sm:w-auto"})}>Generate presentation</LoginLink>
                </div>
            </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Hero;