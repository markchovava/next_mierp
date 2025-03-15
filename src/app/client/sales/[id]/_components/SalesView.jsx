"use client"
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link'
import React, { useState } from 'react'



export default function SalesView({ id, dbData, salesItemsData }) {

  console.log('salesItemsData', salesItemsData)
  const [data, setData] = useState(dbData?.data);
  const [salesItems, setSalesItems] = useState(salesItemsData?.data);

  return (
    <>
    {/* LINK */}
    <section className='my-4 mx-auto w-[96%] flex items-center justify-end'>
      {/* <Link href='/client/sales/edit/1' 
      className='px-4 py-1 link__second'>
        Edit
      </Link> */}
    </section>

    <section className='mx-auto w-[96%] bg-white drop-shadow-md px-6 pb-[3rem] pt-6 mb-[6rem]'>
      {/* PARENT / GUARDIAN */}
      <div className='w-[100%] mb-4'>
          <h3 className='font-light text-[2.2rem] border-b border-gray-300'>
            View
          </h3>
      </div>

      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Total:</div>
        <div className='md:w-[80%] w-[100%]'>{ '$' + data?.total ?? 'Not Added'}</div>
      </div>
      
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Date:</div>
        <div className='md:w-[80%] w-[100%]'>{formatDate(data?.created_at) ?? 'Not Added'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Quantity:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.quantity ?? 'Not Added'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-start justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light mt-1'>Subsidiary:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.subsidiary?.name ?? 'Not Added'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Author:</div>
        <div className='md:w-[80%] w-[100%]'>
          {(data?.user?.name ? data?.user?.name : data?.user?.email) ?? 'Not Added'}
        </div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex flex-col items-start justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Products:</div>
        <div className='w-[100%]'>
          {/* HEADER */}
            <section className='W-[100%] flex items-center justify-start font-bold bg-slate-200'>
              <div className='w-[25%] p-3 border-r border-white'>NAME</div>
              <div className='w-[25%] p-3 border-r border-white'>PRICE</div>
              <div className='w-[25%] p-3  border-r border-white'></div>
              <div className='w-[25%] p-3'>TOTAL</div>
            </section>
            {/* BODY */}
             {salesItems?.length > 0 &&
              salesItems?.map((i, key) => (
              <section key={key} className='W-[100%] flex items-center justify-start border border-slate-200'>
                <div className='w-[25%] p-3 border-r border-slate-300'>{i?.product?.name ?? 'Not Added'}</div>
                <div className='w-[25%] p-3 border-r border-slate-300'>{i?.price ? '$' + i?.price : 'Not Added'}</div>
                <div className='w-[25%] p-3 border-r border-slate-300'>{i?.quantity ?? 'Not Added.'}</div>
                <div className='w-[25%] p-3'>{ i?.total ?? '$' + i?.total?.toFixed(2) }</div>
              </section>

            ))}
           
           
        </div>
      </div>

   
    </section>
    </>
  )
}
