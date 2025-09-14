import React from 'react'

const Videobg = () => {
  return (
    <div className='fixed top-0 w-screen h-[100%] min-h-screen'>
        <video className='h-full w-full object-cover' muted loop autoPlay src="/bg.mp4"></video>
    </div>
  )
}

export default Videobg