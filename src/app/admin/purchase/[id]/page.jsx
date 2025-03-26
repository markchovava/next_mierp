import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import PurchaseView from './_components/PurchaseView';
import { _purchaseViewApiAction } from '@/actions/PurchaseActions';
import { _purchaseItemByPurchaseApiAction } from '@/actions/PurchaseItemActions';
import { _checkAdmin } from '@/cookies/AdminCookie';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientRedirect from '@/app/_components/ClientRedirect';





export default async function page({ params: {id} }) {
  const cookieStore = await cookies();
  const adminCookie = await cookieStore.get('MIERP_ADMIN_COOKIE');
  if(!adminCookie?.value){ redirect('/login') }
  if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
  /*  */
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
         <li><Link href='/admin'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/purchase'>Purchase List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href={`/admin/purchase/${id}`} className='font-semibold'>View Purchase</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <PurchaseView id={id} dbData={purchaseData} purchaseItemsData={purchaseItemsData} />


    </div>
    </>
  )
}
