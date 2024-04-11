import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-[4vw] leading-[3.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach</h1>
                <button className='flex gap-10 items-center px-10 py-6 mt-10 rounded-full bg-zinc-900 text-white'>Read More
                <div className='w-2 h-2 rounded-full bg-zinc-100'>
                </div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] rounded-3xl bg-[#b0c859]'>
            <img className="bg-gray-200 w-full max-w-full rounded entered loaded" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" width="663" height="469" alt="image description"/>
            </div>
        </div>
    </div>
  );
}

export default About