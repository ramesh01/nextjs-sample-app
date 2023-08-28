import React from 'react'
import Header from '../components/Header'

const layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Header />
      <div className='flex min-h-screen flex-col items-center p-24'>
        {children}
      </div>
    </>
  )
}

export default layout