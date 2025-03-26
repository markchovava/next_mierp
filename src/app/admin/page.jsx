import React from 'react'
import MainArea from './_components/MainArea'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import { _adminTotalsApiAction } from '@/actions/DashboardActions';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import ClientRedirect from '../_components/ClientRedirect';



export default async function page() {
  const cookieStore = await cookies();
  const adminCookie = await cookieStore.get('MIERP_ADMIN_COOKIE');
  if(!adminCookie?.value){ redirect('/login') }
  if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }

  const [totalsData, ] = await Promise.all([ _adminTotalsApiAction(), ])

  return (
    <>

     <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width'>
      {/*  */}
      <section className='px-8 pt-8 pb-3'>
        <h1 className='text-[2.5rem] font-light leading-none'>Admin Dashboard</h1>
      </section>
      {/*  */}
      <section className='px-8'>
        <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
          <li><Link href='/' className=''>Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href='/admin' className='font-semibold'>Dashboard</Link></li>
        </ul>
      </section>

      <MainArea dbData={totalsData} />
     </div>
    </>
  )
}
