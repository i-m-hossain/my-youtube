import React from 'react'

function Shimmer() {
  return (
    <div className='w-96 h-84 bg-gray-100 shadow-lg p-4 rounded animate-pulse duration-[10]'>
        <div className='bg-gray-200 h-52 w-80 p-3 mx-auto rounded'></div>
        <div className='bg-gray-200 h-4 w-80 p-3 rounded mx-auto mt-4'></div>
        <div className='bg-gray-200 h-4 w-48 p-3 rounded ml-4 mt-4'></div>
        <div className='bg-gray-200 h-4 w-64 p-3 rounded ml-4 mt-4'></div>
       
    </div>
  )
}

export default Shimmer