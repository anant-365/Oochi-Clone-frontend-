import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap'

const Featured = () => {
    const cards = [useAnimation(), useAnimation()]
    function HandleHover(index){
        cards[index].start({y:"0"})
    }
    function HandleHoverEnd(index){
        cards[index].start({y:"100%"})
    }
  return (
    <div className='w-full py-20'>
    <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-7xl tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
                <motion.div onHoverStart={()=>HandleHover(0)} onHoverEnd={()=>HandleHoverEnd(0)} className="cardContainer relative w-1/2 h-[75vh]">
                    <div className=' card w-full h-full rounded-xl overflow-hidden bg-green-600'>
                    <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-8xl leading-none tracking-tighter text-[#CDEA68]'>
                        {'FYDE'.split().map((element, index)=>{
                            return <motion.span initial={{y: "100%"}} animate={cards[0]} transition ={{ease:[0.22, 1, 0.36, 1], delay:index*0.05}}className='inline-block'>{element}</motion.span>
                        })}
                        </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=>HandleHover(1)} onHoverEnd={()=>HandleHoverEnd(1)}   className="cardContainer relative w-1/2 h-[75vh]">
                    <div className=' card w-full h-full rounded-xl overflow-hidden bg-green-600'>
                    <h1 className='absolute flex right-full overflow-hidden translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-8xl leading-none tracking-tighter text-[#CDEA68]'>
                        {'VISE'.split().map((element, index)=>{
                            return <motion.span initial={{y: "100%"}} animate={cards[1]} transition ={{ease:[0.22, 1, 0.36, 1], delay:index*0.05}}className='inline-block'>{element}</motion.span>
                        })}
                        </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Featured