import React from 'react'

function ButtonList({children}) {
  return (
    <div className='m-4 flex gap-4 flex-wrap'>
        {children}
    </div>
  )
}

export default ButtonList