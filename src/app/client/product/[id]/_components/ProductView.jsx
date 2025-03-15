"use client"
import Link from 'next/link'
import React, { useState } from 'react'



export default function ProductView({ id, dbData }) {
    const [data, setData] = useState(dbData?.data)

    console.log(data, data)

  return (
    <>
    {/* LINK */}
    <section className='my-4 mx-auto w-[96%] flex items-center justify-end'>
      <Link href={`/client/product/edit/${id}`} 
      className='px-4 py-2 link__second'>
        Edit
      </Link>
    </section>

    <section className='mx-auto w-[96%] bg-white drop-shadow-md px-6 py-6 mb-[4rem]'>
      {/* PARENT / GUARDIAN */}
      <div className='w-[100%] mb-4'>
          <h3 className='font-light text-[2.2rem] border-b border-gray-300'>
            View
          </h3>
      </div>
      
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Name:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.name ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Quantity:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.quantity ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Price:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.price ? '$' + data?.price : 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-start justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light mt-1'>Description:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.description ? data?.description : 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-start justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light mt-1'>Subsidiary:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.subsidiary?.name ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Author:</div>
        <div className='md:w-[80%] w-[100%]'>
          {(data?.user?.name ? data?.user?.name : data?.user?.email) ?? 'Not Added'}</div>
      </div>
   
    </section>
    </>
  )
}
