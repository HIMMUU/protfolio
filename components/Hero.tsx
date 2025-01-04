import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
//import {shimmerbtn} from './ui/shimmerbtn';
const Hero = () => {
    return (
        <div id ="home">
            <div>

                <Spotlight className="top-40 -left-10 md:-left-32 md:top-20 h-screen" fill="white" />
                <Spotlight className="top-10 -left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 -left-80 h-[80vh] w-[50vw]" fill="blue" />

                <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center absolute top-0 left-0">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-centern dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                    <div className='flex justify-center relative my-20 z-10'>
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
  
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Welcome to my Portfolio</h2>
<TextGenerateEffect  className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Transforming Concepts into Seamless Websites"/>
 <p className='text-center md : tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
    Hi! I am Himesh Gupta Full Stack Web  Devloper
 </p>
 <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3b3d4e,45%,#1e2631,55%,#3b3d4e)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
 ><a href='#project'>

          Show My Work
 </a>
          
        </button>               </div>
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
