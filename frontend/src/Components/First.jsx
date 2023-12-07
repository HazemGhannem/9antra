import React from 'react'

const First = () => {
  return (
    
    <section className='bg-black-100' >
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
        <div className='flex'>
          <img src="peper.png" alt="peper" className='grow-1 md:pl-10 pt-10 sm:pl-2 pt-2'/>
        </div>
      </section>
  )
}

export default First