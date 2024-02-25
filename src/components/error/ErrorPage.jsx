import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='error-page-container'>
        <h1>Error 404</h1>
       <Link to='/'>Go to home page</Link>
    </div>
  )
}
