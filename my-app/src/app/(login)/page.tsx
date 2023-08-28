/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter();
  return (
    <>
    <div className='flex min-h-screen flex-col items-center p-24'>
      Login page
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => router.push('/dashboard')}>Goto Dashboard</button>
    </div>
    </>
  )
}

export default page;