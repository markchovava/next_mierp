import React from 'react'
import SidebarNav from './SidebarNav'
import Link from 'next/link'
import { RiPlantFill } from "react-icons/ri";
import Logo from '@/app/_components/Logo';


export default function Sidebar() {
  return (
    <div className='text-white h-[100vh] overflow-auto scroll__width'>
       <Logo link='/admin' />
        <SidebarNav />
    </div>
  )
}
