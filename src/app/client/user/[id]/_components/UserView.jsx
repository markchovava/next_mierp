"use client"
import Link from 'next/link'
import React, { useState } from 'react'



export default function UserView({ id, dbData }) {
  console.log(dbData, dbData)
  const [data, setData] = useState(dbData?.data)

  return (
    <>
    {/* LINK */}
    <section className='my-4 mx-auto w-[96%] flex items-center justify-end'>
      <Link href={`/client/user/edit/${id}`} 
      className='px-4 py-2 link__second'>
        Edit
      </Link>
    </section>

    <section className='mx-auto w-[96%] bg-white drop-shadow-md px-6 py-6 mb-[4rem]'>
      {/*  */}
      <h3 className='font-light text-[2.2rem] mb-4 border-b border-slate-300'>
          View
      </h3>  
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Name:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.name ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Email:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.email ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Role:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.role?.name ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Phone:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.phone ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Address:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.address ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Position:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.position ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Code:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.code ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      {data?.subsidiary?.name &&
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Subsidiary:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.subsidiary?.name ?? 'Not Added.'}</div>
      </div>
      }
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Is Admin:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.is_admin ?? 'Not Added.'}</div>
      </div>
   
    </section>
    </>
  )
}
