import React from 'react'

const First = () => {
  return (
    
    <section className='bg-black-100 h-[57rem]' >
           {/* <div className='bg-black-100'>
          <div className='flex justify-between '>
          <img src="peper.png" alt="peper" className='pl-10 pt-10 h-full'/>
          <div className="relative bottom-20 left-80 bg-black-200  rounded-tl-full  rounded-tr-full rotate-180" style={{height: "400px", width: "800px"}}></div>
          <div className="grow h-14 relative bg-black-200 left-10 rounded-tr-full  rounded-br-full rotate-180" style={{height: "900px", width: "450px"}}></div>
          </div>
          <div className='pl-14 '>
          <img src="pic.jpg" alt="peper" className=' border-orange border-6 rounded-full ' style={{height: "500px", width: "500px"}}/>
          </div>
        </div> */}
        <div className='grid grid-rows-3 grid-flow-col gap-4'>
          <img src="peper.png" alt="peper" className='row-span-3  md:pl-10 pt-8 sm:pl-2 pt-2'/>
        </div>
        <img src="pic.jpg" alt="peper" className='absolute z-10 top-12 left-12 border-orange border-6 rounded-full w-2/5 h-4/5'/>
             
        <div>
        <div className="absolute bottom-0 z-10 left-0 bg-green-300   rounded-tl-lg  rounded-bl-full rotate-180 w-44 h-44" ></div>
        <div className="absolute bottom-0 z-0 left-0 bg-green-400   rounded-tl-lg  rounded-bl-full rotate-180 w-52 h-52" ></div>
        </div>

        <div>
        <div className="absolute bottom-0 z-50 right-[40.1rem] bg-green-300  rounded-tl-full  rounded-tr-full w-52 h-24" ></div>
        <div className="absolute bottom-0 z-40 right-1/3 bg-green-400  rounded-tl-full  rounded-tr-full w-56 h-28" ></div>
        </div>
        
        <div className='z-0'>
        <div className="absolute top-0 right-1/4 bg-black-200 opacity-75 rounded-tl-full  rounded-tr-full rotate-180 w-[500px] h-[250px]" ></div>
        </div>
        <div className='z-0'>
          
        <div className="absolute top-0 z-40  right-0 bg-black-200 opacity-50 rounded-tr-full  rounded-br-full rotate-180 w-5/12 h-full" ></div>
        <div className="absolute top-0 z-30  right-0 bg-black-300  opacity-40 rounded-tr-full  rounded-br-full rotate-180 w-3/5 h-full" ></div>
        <div className="absolute top-0 z-20 right-0 bg-black-300 opacity-25 shadow-gray  rounded-tr-full  rounded-br-full rotate-180 w-4/6 h-full" ></div>
        </div>

        <div className="flex justify-end">
        <div className="flex flex-col z-50 py-16 ">
        <div className="shrink w-[64rem] px-52">
        <div className="text-white text-3xl py-6">Chili's Tunisie </div>
        <div className="text-green-100 text-7xl  font-Lobster ">Decouvrez les </div>
        <div className="text-green-100 text-7xl  font-Lobster "> meilleures recettes </div>
        <div className="text-green-100 text-7xl   font-Lobster "> syriennes</div>
        <div className='py-12 '>
        <button className='h-[3rem] w-[15rem] text-white bg-red  font-medium text-lg rounded-lg'>Voir notre menu </button>
        </div>
        
        </div>
        <div className='absolute right-20 flex justify-end z-50'>
              <div class="space-y-4  px-2">
                <div class="w-2 h-2 rounded-full bg-white"></div>
                <div class="w-2 h-2 rounded-full bg-white"></div>
                <div class="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div class="space-y-4 px-2">
                <div class="w-2 h-2 rounded-full bg-white"></div>
                <div class="w-2 h-2 rounded-full bg-white"></div>
                <div class="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div class="space-y-4 px-2">
                <div class="w-2 h-2 rounded-full bg-white"></div>
                <div class="w-2 h-2 rounded-full bg-white"></div>
                <div class="w-2 h-2 rounded-full bg-white"></div>
              </div>
             </div>
            <div className='absolute right-60  bottom-60 flex justify-end z-50  border-white rounded-full border-4 w-40 h-40 '></div>
            <div className='absolute right-40  bottom-[22rem] flex justify-end z-50  border-white rounded-full border-4 w-20 h-20 '></div>
        </div>
        </div>
      </section>
  )
}

export default First