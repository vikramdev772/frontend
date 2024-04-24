import React from 'react'
import Card from './Card'

const Landing = () => {
  return (
    <div>
        <center>
            <h1  className='text-3xl text-blue-500 '>Landing page</h1>
        </center>
        <br />
        <center>
        <Card/>
        <br />
        <button className='button'>
        <span className="button-content">Download </span>
        </button>

        </center>
        

    </div>
  )
}

export default Landing