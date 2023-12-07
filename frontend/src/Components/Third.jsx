import React from 'react'

const Third = () => {
  return (
    <div className='container mx-auto relative pb-[8rem]'>
            <img src="layer.png" alt="pic" className='h-126 lg:w-[80rem] md:w-[50rem] sm:w-[40rem]' />
            <div className='top-0 left-0 absolute'>
            <div className="py-12 lg:ml-[12rem] md:ml-[8rem] sm:ml-20 font-bold text-4xl text-white text-center">Prender Contact</div>
            <div className='px-20'>
                <div className='flex sm:space-x-[4rem]   md:space-x-[8rem] lg:space-x-[22rem]' >
                    <div className='flex flex-col space-y-4'>
                    <input type="text" placeholder='Nom et Prénom' className=' h-10 sm:w-30  md:w-60 rounded-lg pl-6 text-black-100  placeholder-black-200' />
                    <input type="text" placeholder='Adresse Email' className='h-10 sm:w-30  md:w-60 rounded-lg pl-6 text-black-100  placeholder-black-200' />
                    <textarea type="text" placeholder='Votre message ici...' className='h-28 sm:w-30  md:w-60 resize-none rounded-lg pl-4 pt-2 text-black-100  placeholder-black-200' />
                    <button className='h-10 sm:w-30  md:w-60 bg-white  font-medium text-lg rounded-lg'>Envoyer </button>
                    </div>
                    {/* <div className='flex items-center mt-10 rounded-full w-52 h-52  bg-white'>
                    <div className='text-red py-20 text-6xl font-bold px-5 '>chili's.</div>
                    </div> */}
                    <img src="layer2.png" alt="pic" className='h-52 lg:w-52 md:w-52 sm:w-30 xsm:shrink-0' />

                </div>
            </div>      
            </div>  
    </div>
    
  )
}

export default Third