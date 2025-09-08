import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Transition = (props) => {

const locate = useLocation().pathname
const stairParentRef = useRef(null)
const PageRef = useRef(null)

useGSAP(function(){
    const tl = gsap.timeline()

      tl.to(stairParentRef.current,{
        display:'block'
    })
    tl.from('.stairs',{
        height:0,
        stagger:{
            amount:0.25
        }
    })

    tl.to('.stairs',{
        y:'100%',
        stagger:{
            amount:-0.25
        }
    })

    tl.to(stairParentRef.current,{
        display:'none'
    })
     tl.to('.stairs',{
        y:'0%',
       
    })

    gsap.from(PageRef.current,{
        opacity:0,
        delay:1.5,
        scale:1.1
    })

},[locate])
  return (
    <>
    <div ref={stairParentRef} className='h-screen w-full fixed top-0 '>
        <div className='w-full h-full flex'>
        <div className="stairs w-1/5 bg-black"></div>
        <div className="stairs w-1/5 bg-black"></div>
        <div className="stairs w-1/5 bg-black"></div>
        <div className="stairs w-1/5 bg-black"></div>
        <div className="stairs w-1/5 bg-black"></div>
        <div className="stairs w-1/5 bg-black"></div>
        <div className="stairs w-1/5 bg-black"></div>
        <div className="stairs w-1/5 bg-black"></div>
    </div>
    </div>
   <div ref={PageRef}> {props.children}</div>
    </>
  )
}

export default Transition