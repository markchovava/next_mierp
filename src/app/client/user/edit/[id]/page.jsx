import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import UserEdit from './components/UserEdit'
import { _userViewApiAction } from '@/actions/UserActions'
import { _subsidiaryListAllApiAction } from '@/actions/SubsidiaryActions'
import { _roleListAllApiAction } from '@/actions/RoleActions'



export default async function page({params: {id} }) {
  const [usersData, subsidiaryData, roleData ] = await Promise.all([
      _userViewApiAction(id), 
      _subsidiaryListAllApiAction(), 
      _roleListAllApiAction(),
    ])

  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>Edit User</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/client'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/client/user'>User List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href={`/client/user/edit/${id}`} className='font-semibold'>Edit User</Link></li>
       </ul>
     </section>

     {/*  */}
     <UserEdit 
      id={id}
      dbData={usersData} 
      subsidiaryData={subsidiaryData} 
      roleData={roleData} 
    />


    </div>
    </>
  )
}
