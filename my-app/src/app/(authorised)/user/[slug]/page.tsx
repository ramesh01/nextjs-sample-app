import React from 'react'

const page = ({params}: {params: {slug: string}}) => {
  return (
    <>user {params.slug}</>
  )
}

export default page