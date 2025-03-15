"use client";
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link'
import React, { useState } from 'react'



export default function ExpenseView({ id, dbData }) {
  const [data, setData] = useState(dbData?.data)


  return (
    <>
      {/* LINK */}
      <section className='mx-auto w-[96%] flex items-center justify-end py-6'>
        <Link href={`/admin/expense/edit/${id}`} 
          className='px-4 py-2 link__second'>
          Edit
        </Link>
      </section>
    <section className='mx-auto w-[96%] bg-white drop-shadow-md px-6 py-8 text-lg'>

    <div className='w-[100%] mb-4'>
          <h3 className='font-light text-[2.2rem] border-b border-gray-300'>
            View
          </h3>
      </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Details:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.detail ?? 'Not Added.'}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Total:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.total ? '$' + data?.total : 'Not Added.'}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Author:</div>
      <div className='md:w-[80%] w-[100%]'>
      {(data?.user?.name ? data?.user?.name : data?.user?.email) ?? 'Not Added'}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Subsidiary:</div>
      <div className='md:w-[80%] w-[100%]'>
        {data?.subsidiary?.name ?? 'Not Added.'}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Date:</div>
      <div className='md:w-[80%] w-[100%]'>
        {formatDate(data?.created_at)}</div>
    </div>
  
    </section>
    </>
  )
}
