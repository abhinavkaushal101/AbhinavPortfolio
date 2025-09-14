import React from 'react'

const AutoSplit = () => {
  return (
    <div>
         <div

         ref={scrollimg}
          // ref={imageDivRef}
          className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[30vw] overflow-hidden rounded-3xl"
        >
          <img
            // ref={imageRef}
            className="h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div
          // ref={imageDivRef}
          className="absolute left-[50%] top-[110%] transform -translate-x-1/2 -translate-y-1/2 h-[30vw] overflow-hidden rounded-3xl"
        >
          <img
            // ref={imageRef}
            className="h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
        </div>
    </div>
  )
}

export default AutoSplit