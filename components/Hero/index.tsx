import React from 'react'
import MaxWidthWrapper from '../common/MaxWidthWrapper';

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-indigo-100'>
      <MaxWidthWrapper>
        <div className='text-center lg:grid-cols-2 items-center'>
            <div className='lg:text-left text-center'>
                <h1 className='mb-6 text-4xl font-black leading-tight text-gray-900 lg:text-6xl'>
                    Genreate educational <span className='text-green-600'>Powerpoints</span> from
                    Youtbe videos.
                </h1>
                  <p className='text-4xl font-black leading-tight text-gray-900 lg:text-6xl'>
                     AI-powered PowerPoint generator creates professional slides from text, 
                     adding relevant visuals, layouts, and themes, saving time and enhancing presentation quality.
                  </p>
            </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Hero;