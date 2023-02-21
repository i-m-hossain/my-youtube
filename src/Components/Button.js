import React from 'react'

function Button({text}) {
  return (
    <button className="border px-3 py-2 rounded bg-gray-200 hover:scale-110 transition-all">{text}</button>
  )
}

export default Button