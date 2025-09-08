import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const About = () => {
  // const ImageRef = useRef(null);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  
  gsap.registerPlugin(ScrollTrigger);


  const ImageArray = [
    "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
    "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOu9csnXn2aDWJ3BdFjNbKShviB_n1U-daWg&s"
  ]
  useGSAP(function(){

    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger:imageDivRef.current,
        // markers:true,
        start:"top 16%",
        end:"top -80%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate:(elem)=>{
          // console.log(Math.floor(elem.progress * ImageArray.length))
          let ImageIndex;
            if(elem.progress<1){
              ImageIndex = Math.floor(elem.progress * ImageArray.length)

            }else{
              ImageIndex = ImageArray.length-1
            }
          // console.log(ImageIndex)
          imageRef.current.src = ImageArray[ImageIndex]
        }
      }
    })
  })
  return (
    <div> 
      &nbsp;
     <div className="section1">
       <div ref={imageDivRef} className="absolute left-[30%] top-[10%] h-[20vw] overflow-hidden rounded-3xl">
        <img ref={imageRef} className="h-full w-full object-cover" src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww" alt="" />
      </div>

     <div className="relative">
       <div className=" mt-[40vh]">
        <h1 className="text-[22vw] leading-[16vw] font-[font1] text-center uppercase">Abhinav <br/><span className="text-[19vw]">Kaushal</span></h1>
      </div>
      <div className="pl-[45%]">
        <p className="text-5xl ">“ &nbsp;&nbsp;&nbsp;I specialize in creating clean, functional, and visually appealing digital experiences. With skills in React, Power BI, and full-stack development, I love solving real-world problems with code.”</p>
      </div>
     </div>
     </div>

     <div className="section2 relative h-screen"></div>
    </div>
  );
};

export default About;
