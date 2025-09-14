import React from 'react'

const ProjectsCard = (props) => {
    return (
        <>
        
            <div className='md:w-1/2 group border-gray-400 border transition-all relative rounded-none hover:rounded-[20px] overflow-hidden h-full '>
                <img  className='h-full w-full object-cover' src={props.img1} alt="" />
                {/* <img className='h-full w-full object-cover' src={props.img3} alt="" /> */}
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center flex-col text-center justify-center left-0 h-full w-full bg-black/60'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>{props.head}</h2>
                    <br/>
                    <p className='w-[80%] text-gray-200'>{props.des}</p>
                </div>
            </div>
            <div className='md:w-1/2 group transition-all border-gray-400 border relative rounded-none hover:rounded-[20px] overflow-hidden h-full '>
                <img  className='h-full w-full object-cover' src={props.img2} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center flex-col text-center justify-center left-0 h-full w-full bg-black/60'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>{props.head2}</h2>
                    <br/>
                    <p className='w-[80%] text-gray-200'>{props.des2}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectsCard