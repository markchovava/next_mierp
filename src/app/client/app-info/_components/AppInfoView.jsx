"use client"
import Link from 'next/link'
import React, { useState } from 'react'



export default function AppInfoView({ dbData }) {
  const [data, setData] = useState(dbData?.data)

  return (
    <>
    {/* LINK */}
    <section className='my-4 mx-auto w-[96%] flex items-center justify-end'>
        {/* <Link href='/admin/app-info/edit' 
        className='px-4 py-1 my-4 link__second'>
        Edit
      </Link> */}
    </section>
    
    {/*  */}
    <section className=' mb-[4rem] mx-auto w-[96%] bg-white drop-shadow-md px-6 py-8'>

    <div className='w-[100%] mb-4'>
        <h3 className='font-light text-[2.2rem] border-b border-gray-300'>
          View
        </h3>
    </div>
    
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Name:</div>
      <div className='md:w-[80%] w-[100%]'>
        {data?.name ?? 'Not Added'}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Phone:</div>
      <div className='md:w-[80%] w-[100%]'>
        {data?.phone ?? 'Not Added'}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Address:</div>
      <div className='md:w-[80%] w-[100%]'>
      {data?.address ?? 'Not Added'}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Email:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.email ?? 'Not Added'}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-start justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light mt-1'>Description:</div>
      <div className='md:w-[80%] w-[100%]'>
        {data?.description ?? 'Not Added'}
      </div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Author:</div>
      <div className='md:w-[80%] w-[100%]'>
        {(data?.user?.name ? data?.user?.name : data?.user?.email) ?? 'Not Added'}
      </div>
    </div>
   
   
    </section>
    </>
  )
}
