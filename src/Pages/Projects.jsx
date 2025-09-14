import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import ProjectsCard from "../Components/ProjectsCard";

const Projects = () => {
  // const ImageRef = useRef(null);

  const ProjectArray = [
    {  image1:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",//
      // image1:"/video1.mp4",
      head:"verdinexus",
      des:"Worked as a Web Development Intern on a service-oriented platform. Contributed to designing responsive pages, improving UI/UX, and integrating features to deliver a seamless user experience.",
      // image2:"/video5.mp4",
      head2:"Fanta",
      des2:"Designed and developed an animated landing page inspired by Fanta, using GSAP ScrollTrigger for smooth scroll-based animations. Implemented parallax effects, interactive transitions, and a modern UI to create an engaging user experience",

      // image2:"Screenshot (24).png",//
      image2:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"//
    },
    {
      image1:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",//
      // image1:"/video3.mp4",
      head:"School",
      des:"Developed a fully responsive school website featuring homepage, about, courses, faculty, and contact pages. Focused on clean UI/UX design, easy navigation, and mobile-friendly layout to provide students and parents with quick access to information.",
      // image2:"/video4.mp4",
      head2:"Marketing",
      des2:"Created a service-based marketing website designed to showcase business solutions, campaigns, and client services. Implemented responsive layouts, interactive sections, and optimized performance to enhance brand visibility and user engagement.",

      image2:"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"//
    },
    {
      // image1:"/video2.mp4",
      head:"Marketing",
      des:"Created a service-based marketing website designed to showcase business solutions, campaigns, and client services. Implemented responsive layouts, interactive sections, and optimized performance to enhance brand visibility and user engagement.",

      // image2:"/video6.mp4",
      head2:"Jayris",
      des2:"Worked as a Web Development Intern where I contributed to building and enhancing a professional service-based website. Focused on developing responsive UI components, optimizing performance, and integrating service-related features to improve user experience."
,
      image1:"https://img.freepik.com/free-photo/animal-lizard-nature-multi-colored-close-up-generative-ai_188544-9072.jpg?semt=ais_hybrid&w=740&q=80",
      image2:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"//
    },
  ]

  const ProjectImage=[
    {
      img:"/dashboard.png",
      title:"Data analysis",

      img2:"/dashboard.png",
      title2:'creating dashboard'
    }
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.from('.ProjectAnimation',{
      height:"50px",
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.lol',
        start:'top 100%',
        end:'top -150%',
        scrub:true,
        

      }
    })
  })
 
  return (

<div className="mb-[10vh]">
    <div className="pt-[45vh]">
      <h1 className="md:text-8xl text-5xl uppercase font-[font1] font-extrabold">Projects</h1>
    </div>

    <div className="lol">
     {ProjectArray.map(function(elem,idx){
     return <div key={idx} className="ProjectAnimation gap-2 p-2 md:h-[400px] h-full w-screen md:flex-row flex-col  flex">
        <ProjectsCard img1={elem.image1} head={elem.head} des={elem.des} img2={elem.image2} head2={elem.head2} des2={elem.des2}/>
      </div>
})}
    </div>
</div>
  );
};

export default Projects;
