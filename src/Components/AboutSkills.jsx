import React from "react";

const AboutSkills = () => {


  const LogoArray=[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png",
        "https://media.licdn.com/dms/image/v2/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=zrcrB8lfoVmZo0LcSLgut3A_4PwE6YFe9EK3iy17L2Y",
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s',
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        "https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        "https://www.developer-tech.com/wp-content/uploads/2021/02/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2.jpg",
        "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/databases/relational/approved/images/45329abe-a8cf-4c45-8536-095f89bb38f1.35d34371b7e33232bb7e9f493536b8823c93c832.png",
        "https://images.ctfassets.net/sw4ojjqn6qvl/5R62FOx0RmA0PBkO9ITozF/1117b386f6d0f386eacd99b2eec91b7c/gsap-logo.png?",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
        "https://www.gstatic.com/devrel-devsite/prod/v55e81371229cf93fbb4781915f01d3bef8e4cb4b674c7c839a1879ebb706855a/firebase/images/touchicon-180.png",
        "https://pipedream.com/s.v0/app_XaLh2x/logo/orig",
        "https://locusit.se/wp-content/uploads/2020/05/Microsoft-Power-BI-Symbol.png"

    ]

    const design=[
            "https://521324.fs1.hubspotusercontent-na1.net/hubfs/521324/__hs-marketplace__/Canva_Circle_Gradient%20(1).jpeg",
            "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxjeeMeR_QZ3ewKpujC90DLP9U6zxjiaj6e7MrVR10sZGGYfrQKYFLceMYhNujaTgIsWWF6DmVxuiMZ.uwWBpWWc-&format=source",
            "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format"
    ]

  return (
    <div className="mx-5 mt-10 font-bold">
      <div className="md:px-5 text-start py-4 font-[font1] text-5xl md:h-[35vh] space-y-2">
        <h1 className="md:text-7xl text-2xl">
          Things I'm <span className="text-blue-500">good</span> at
        </h1>
        <h3 className="md:text-4xl text-xl"> <span className="text-purple-500">skills</span>, interests,  <span className="text-orange-400">passion</span> and hobbies</h3>
      </div>

      <div className="md:py-3 md:px-5">
        <div className="section1">
            <div className=" my-10 md:my-0 ">
          <h1 className="md:text-2xl border-2 rounded-md  md:w-[20%] w-[50%] p-2 text-center">
            DEVELOPMENT
          </h1>
        </div>

        <div>
          <div className="m-4 flex items-center flex-wrap gap-4 ">
          {LogoArray.map((elem,idx)=>(
            <div key={idx} className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] bg-white rounded-xl">
             <img 
                className="p-2 w-[100%] h-[100%] object-contain"
                src={elem}
                alt=""
              />
          </div>
          ))}  
          
          </div>
        </div>
        </div>

         <div className="section2">
            <div className="my-10  ">
          <h1 className="md:text-2xl border-2 rounded-md md:w-[20%] w-[50%] p-2 text-center">
            Desigining / Editing
          </h1>
        </div>

        <div>
          <div className="m-4 flex items-center flex-wrap gap-4 ">
          {design.map((elem,idx)=>(
            <div key={idx} className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] bg-white rounded-xl">
             <img 
                className="p-2 w-[100%] h-[100%] object-contain"
                src={elem}
                alt=""
              />
          </div>
          ))}  
          
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
