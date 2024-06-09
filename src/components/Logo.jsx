import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/">
      <p className="font-bold text-3xl text-black">
            Ca<span className="text-red-700">toon</span>
          </p>
    </Link>
  )
}

export default Logo
