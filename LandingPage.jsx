import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen pt-1 bg-zinc-900'>
        <div className='text-structur mt-52 px-20'>
            {['We Create','Eye Opening','Presentations'].map((element, index)=>{
                return(
                    <div className='Masker' key={index}>
                    <div className='w-fit flex items-center'>
                        {index===1 ? <motion.div initial={{width: 0}} animate={{width: "7.5vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='w-[7.5vw] h-[5.2vw] rounded-md relative top-[0.463vw]  bg-red-500'></motion.div>:null}
                        <h1 className='flex items-center uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-semibold'> {element} </h1>
                    </div>
                    </div>
                )
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {['For Public and private Company', 'From the first pitch to IPO'].map((element, index)=>{
                return(
                    <p key={index} className='text-md font-light tracking-tight leading-none'>{element}</p>
                )
            })}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>Start the process</div>
                <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage