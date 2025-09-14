import React from "react";

const AboutME = () => {
  const certificates = [
      //   "/Certificates/certificate (3).jpeg",
      "/Certificates/ibm.jpeg",
      "/Certificates/certificate.jpeg",
      "/Certificates/Certi.jpeg",

      "/Certificates/certificate (1).jpeg",
      "/Certificates/certificate (2).jpeg",
    // "/Certificates/data-analytics-essentials.png",
  ];
  return (
    <div className=" ">
      <div className="m-4">
        <h1 className="md:text-6xl text-4xl font-bold">My Achievements</h1>
      </div>

      <div>
        <div className="flex justify-center items-center md:p-6 flex-wrap border rounded-4xl h-[300px] overflow-y-scroll scrollbar-hide border-gray-300">
          {certificates.map((elem, idx) => (
            <div key={idx} className="w-[350px]">
              <img className="w-[100%] object-contain" src={elem} alt="" />
            </div>
          ))}
        </div>
      </div>

       <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img
            src="/abhi.png" // 👉 apna photo public folder me daalo
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Me Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Hi, I’m <span className="font-semibold">Abhinav Kaushal</span>, a passionate
            web developer who loves building responsive and modern websites. I enjoy
            working with React, Tailwind CSS, and exploring new technologies to
            create clean, user-friendly interfaces.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Apart from coding, I’m interested in design, problem-solving, and always
            learning something new in tech. My goal is to craft digital experiences
            that make an impact.
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition"
          >
            Contact Me
          </a>
         &nbsp;&nbsp;
          <a className="inline-block bg-gray-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition" 
          href="/Resume/abhinav.pdf" download="Abhinav_Kaushal_Resume.pdf">Get Resume</a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutME;
