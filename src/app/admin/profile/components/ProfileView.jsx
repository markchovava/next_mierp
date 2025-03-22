"use client";
import Link from 'next/link';
import React, { useState } from 'react';



export default function ProfileView({ dbData }) {
    const [data, setData] = useState(dbData?.data ?? null);

  return (
    <>
    {/* LINK */}
    <section className='mx-auto w-[96%] flex items-center justify-end'>
        <Link href='/admin/profile/edit' 
        className='px-4 my-4 py-2 link__second'>
          Edit
        </Link>
    </section>
    <section className='mx-auto w-[96%] bg-white drop-shadow-md p-6 mb-[4rem]'>
      {/* TITLE */}
      <div className='w-[100%] mb-4'>
          <h3 className='font-light text-[2rem]'>Profile Info</h3>
      </div>
     
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Name:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.name ?? 'N/A'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Email:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.email ?? 'N/A'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Role:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.role?.name ?? 'N/A'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Phone:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.phone ?? 'N/A'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Address:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.address ?? 'N/A'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Occupation:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.occupation ?? 'N/A'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Code:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.code ?? 'N/A'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Subsidiary:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.subsidiary?.name ?? 'N/A'}</div>
      </div>
   
    </section>
    </>
  )
}
