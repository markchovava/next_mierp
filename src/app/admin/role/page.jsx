import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import RoleList from './_components/RoleList'
import { _roleListApiAction } from '@/actions/RoleActions'
import { _checkAdmin } from '@/cookies/AdminCookie'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import ClientRedirect from '@/app/_components/ClientRedirect'




export default async function page() {
  const cookieStore = await cookies();
  const adminCookie = await cookieStore.get('MIERP_ADMIN_COOKIE');
  if(!adminCookie?.value){ redirect('/login') }
  if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
  /*  */
  const [rolesData, ] = await Promise.all([_roleListApiAction(), ])
  


  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>Role List</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/role' className='font-semibold'>Role List</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <RoleList dbData={rolesData} />


    </div>
    </>
  )
}
