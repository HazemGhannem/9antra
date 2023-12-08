import React from 'react'

const Second = ({data}) => {
  return (
    <>
    <section className='bg-white py-16'>
    <div className='flex place-content-center'>
    <img src="leftpeper.png" alt="peper" className='px-10'/>
    <div className='font-bold font-Lobster text-center text-4xl text-pink'>Notre Menu</div>
    <img src="rightpeper.png" alt="peper" className='px-10'/>
    </div>
    <div className='flex justify-center'>
      <div className=' my-5 h-0.5 border w-3/6  opacity-100 rounded-full border-pink'></div>
    </div>
    <div className="container mx-auto pt-8 font-Lobster text-4xl text-green-300	">Nos Fajitas</div>
    <div className="container mx-auto">
                  <div className='flex flex-wrap justify-between'>
    {data.map((e)=>
            <>
                
                    <div className='py-10 '>
                    <a className='cursor-pointer '>
                      <img src={e.image} alt="product" className='rounded-lg w-80 h-[320px]'/>
                      <div className="text-pink text-2xl font-bold font-Lobster">{e.title}</div>
                      <div className="text-green-300 text-xl ">{e.price} DT</div>
                    </a>
                    </div>
                   
            </>

    )}
                </div>
                </div>
    <div className='font-mono text-center text-xl underline text-pink'><a className='cursor-pointer'>Voir Plus</a> </div>
  </section>
  <section className='bg-white'>
    <div className="container mx-auto text-3xl  font-mono text-4xl text-green-300 font-Lobster	">Nos Fajitas</div>
    <div className=" container mx-auto ">
      <div className='flex flex-wrap justify-between'>
      <div className='py-10 '>
      <a className='cursor-pointer '>
        <img src="pic.jpg" alt="product" className='rounded-lg w-80'/>
        <div className="text-pink text-2xl font-bold font-Lobster">Trio Fajitas</div>
        <div className="text-green-300 text-xl ">49,90  DT</div>
      </a>
      </div>
      
      <div className='py-10'>
         <a className='cursor-pointer'>
        <img src="pic.jpg" alt="product" className='rounded-lg w-80'/>
        <div className="text-pink text-2xl font-bold font-Lobster">Trio Fajitas</div>
        <div className="text-green-300 text-xl ">49,90  DT</div>
      </a>
      </div>
      <div className='py-10'>
         <a className='cursor-pointer'>
        <img src="pic.jpg" alt="product" className='rounded-lg w-80'/>
        <div className="text-pink text-2xl font-bold font-Lobster">Trio Fajitas</div>
        <div className="text-green-300 text-xl ">49,90  DT</div>
      </a>
      </div>
    </div>
    </div>
    <div className=" container mx-auto ">
      <div className='flex flex-wrap justify-between'>
      <div className='py-10 '>
      <a className='cursor-pointer '>
        <img src="pic.jpg" alt="product" className='rounded-lg w-80'/>
        <div className="text-pink text-2xl font-bold font-Lobster">Trio Fajitas</div>
        <div className="text-green-300 text-xl ">49,90  DT</div>
      </a>
      </div>
      
      <div className='py-10'>
         <a className='cursor-pointer'>
        <img src="pic.jpg" alt="product" className='rounded-lg w-80'/>
        <div className="text-pink text-2xl font-bold font-Lobster">Trio Fajitas</div>
        <div className="text-green-300 text-xl ">49,90  DT</div>
      </a>
      </div>
      <div className='py-10'>
         <a className='cursor-pointer'>
        <img src="pic.jpg" alt="product" className='rounded-lg w-80'/>
        <div className="text-pink text-2xl font-bold font-Lobster">Trio Fajitas</div>
        <div className="text-green-300 text-xl ">49,90  DT</div>
      </a>
      </div>
    </div>
    </div>
    <div className='font-mono text-center text-xl underline text-pink pb-24'><a className='cursor-pointer'>Voir Plus</a></div>
  </section>
    </>
  )
}

export default Second