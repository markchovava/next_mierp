import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import SalesView from './_components/SalesView';
import { _salesViewApiAction } from '@/actions/SalesActions';
import { _salesItemBySalesApiAction } from '@/actions/SalesItemActions';
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
  const [salesData, salesItemsData] = await Promise.all([_salesViewApiAction(id), _salesItemBySalesApiAction(id)])
  
  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>View Sales</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/sales'>Sales List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href={`/admin/sales/${id}`} className='font-semibold'>View Sales</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <SalesView id={id} dbData={salesData} salesItemsData={salesItemsData} />


    </div>
    </>
  )
}
