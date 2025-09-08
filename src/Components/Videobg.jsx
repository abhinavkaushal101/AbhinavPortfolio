import React from 'react'

const Videobg = () => {
  return (
    <div className='fixed top-0 w-full h-screen'>
        <video muted loop autoPlay src="/bg.mp4"></video>
    </div>
  )
}

export default Videobg