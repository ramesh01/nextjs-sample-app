"use client"

import React from 'react'
import Link from '../../../node_modules/next/link';
import { usePathname } from 'next/navigation'

const pagesRouter = [
  {
    url: '/dashboard',
    name: 'Dashboard'
  },
  {
    url: '/user',
    name: 'User'
  }]
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="p-5 bg-yellow-600">
      <div className="flex">
        <div className="flex-1">
          <span>Next.js App header</span></div>
        <div className="text-right" >
          <ul className='flex'>
            {pagesRouter.map((link, index) => (
              <li key={index} className={`pr-3 ${pathname === link.url ? "text-blue" : "text-black"}`}>
                <Link href={link.url} >{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;