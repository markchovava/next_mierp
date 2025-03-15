"use client"
import Link from 'next/link'
import React, { useState } from 'react'



export default function PurchaseView({ id, dbData, purchaseItemsData}) {
  console.log('purchaseItemsData', purchaseItemsData)
  const [data, setData] = useState(dbData?.data)
  const [purchaseItems, setPurchaseItems] = useState(purchaseItemsData?.data)

  return (
    <>
    {/* LINK */}
    <section className='my-4 mx-auto w-[96%] flex items-center justify-end'>
     {/*  <Link href={`/admin/purchase/edit/${id}`} 
      className='px-4 py-1 link__second'>
        Edit
      </Link> */}
    </section>

    <section className='mx-auto w-[96%] bg-white drop-shadow-md px-6 pb-[3rem] pt-6 mb-[6rem]'>
    
      <div className='w-[100%] mb-4'>
          <h3 className='font-light text-[2.2rem] border-b border-gray-300'>
            View
          </h3>
      </div>
      
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Supplier Name:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.supplier_name ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Supplier Email:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.supplier_email ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Supplier Phone:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.supplier_phone ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Supplier Address:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.supplier_address ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Quantity:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.quantity ?? 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-start justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light mt-1'>Subsidiary:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.subsidiary?.name ?? 'Not Added.' }</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Total:</div>
        <div className='md:w-[80%] w-[100%]'>
          {data?.total ? '$' + data?.total : 'Not Added.'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Author:</div>
        <div className='md:w-[80%] w-[100%]'>
          {(data?.user?.name ? data?.user?.name : data?.user?.email) ?? 'Not Added'}</div>
      </div>
      {/*  */}
      <div className='w-[100%] mb-4 flex flex-col items-start justify-start gap-1'>
        <div className=' w-[100%] font-light'>Products:</div>
        <div className='w-[100%]'>
            <section className='W-[100%] flex items-center justify-start font-bold bg-slate-200'>
              <div className='w-[25%] p-3 border-r border-white'>NAME</div>
              <div className='w-[25%] p-3 border-r border-white'>PRICE</div>
              <div className='w-[25%] p-3 border-r border-white'>QUANTITY</div>
              <div className='w-[25%] p-3'>TOTAL</div>
            </section>
            {purchaseItems?.length > 0 &&
              purchaseItems?.map((i, key) => (
                <section key={key} className='W-[100%] flex items-center justify-start border border-slate-200'>
                  <div className='w-[25%] p-3 border-r border-slate-300'>{i?.product?.name ? i?.product?.name : 'Not Added.'}</div>
                  <div className='w-[25%] p-3 border-r border-slate-300'>{i?.price ? '$' + i?.price : 'Not Added.'}</div>
                  <div className='w-[25%] p-3 border-r border-slate-300'>{i?.quantity ? i?.quantity : 'Not Added.'}</div>
                  <div className='w-[25%] p-3'>{i?.total ? '$' + i?.total : 'Not Added.'}</div>
                </section>

              ))
            }
           
        </div>
      </div>

   
    </section>
    </>
  )
}
