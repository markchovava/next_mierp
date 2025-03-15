import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import PurchaseView from './_components/PurchaseView';
import { _purchaseViewApiAction } from '@/actions/PurchaseActions';
import { _purchaseItemByPurchaseApiAction } from '@/actions/PurchaseItemActions';




export default async function page({ params: {id} }) {
  const [purchaseData, purchaseItemsData] = await Promise.all([_purchaseViewApiAction(id), _purchaseItemByPurchaseApiAction(id)])


  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>View Purchase</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/client'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/client/purchase'>Purchase List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href={`/client/purchase/${id}`} className='font-semibold'>View Purchase</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <PurchaseView id={id} dbData={purchaseData} purchaseItemsData={purchaseItemsData} />


    </div>
    </>
  )
}
