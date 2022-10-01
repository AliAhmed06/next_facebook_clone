import React from 'react'

const HeaderIcon = ({icon, active}) => {
  return (
    <div>
        <i className={`${icon} cursor-pointer lg:text-xl hover:bg-gray-100 hover:text-blue-700 duration-300 sm:p-1 lg:p-6 rounded-full ${active && "text-blue-500"}`}></i>
    </div>
  )
}

export default HeaderIcon