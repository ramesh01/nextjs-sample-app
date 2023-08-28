import React from 'react'

const DashboardLayout = (props: {
  children: React.ReactNode
  analytics: React.ReactNode
  list: React.ReactNode
}) => {
  return (
    <>
      {props.children}
      {props.analytics}
      {props.list}
    </>
  )
}

export default DashboardLayout;