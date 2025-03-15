"use client";
import Link from 'next/link';
import React, { useState } from 'react';



export default function ProfileView({ dbData }) {
  console.log('dbData', dbData)
    const [data, setData] = useState(dbData?.data);

  return (
    <>
    {/* LINK */}
    <section className='my-4 mx-auto w-[96%] flex items-center justify-end'>
        <Link href='/client/profile/edit' 
        className='px-4 py-2 link__second'>
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
        <div className='md:w-[80%] w-[100%]'>{data?.name ?? 'Not Added'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Email:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.email ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Role:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.role?.name ?? 'Not Added'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Phone:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.phone ?? 'Not Added'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Address:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.address ?? 'Not Added'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Code:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.code ?? 'Not Added'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Subsidiary:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.subsidiary?.name ?? 'Not Added'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Is Admin:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.is_admin ?? 'Not Added.'}</div>
      </div>
   
    </section>
    </>
  )
}
