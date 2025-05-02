import React from 'react'

function Home() {
  return (
    <div className='grid grid-cols-4'>
        <div className='bg-red-600 h-full'>
            Categories
        </div>
        <div className='col-span-3 bg-blue-400' >
           Articles
        </div>
    </div>
  )
}

export default Home