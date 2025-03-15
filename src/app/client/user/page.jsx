import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import UserList from './_components/UserList'
import { _userBySubsidiaryApiAction, _userListApiAction } from '@/actions/UserActions'
import { _subsidiaryListAllApiAction } from '@/actions/SubsidiaryActions'
import { _roleListAllApiAction } from '@/actions/RoleActions'



export default async function page() {
  const [usersData, subsidiaryData, roleData ] = await Promise.all([
    _userBySubsidiaryApiAction(), 
    _subsidiaryListAllApiAction(), 
    _roleListAllApiAction(),
  ]) 


  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>User List</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/client'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/client/user' className='font-semibold'>User List</Link></li>
       </ul>
     </section>

    {/* LIST */}
    <UserList 
      dbData={usersData} 
      subsidiaryData={subsidiaryData} 
      roleData={roleData} 
    />


    </div>
    </>
  )
}
