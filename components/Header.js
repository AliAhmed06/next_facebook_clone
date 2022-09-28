import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 w-full left-0 flex items-center justify-between p-4 px-6 border-b border-solid border-white'>
        <h1 className='text-3xl sm:text-6xl select-none'>Todo List</h1>
        <i className="fa-solid fa-user text-xl sm:text-3xl hover:opacity-40 duration-300 cursor-pointer"  ></i>
    </div>
  )
}

export default Header