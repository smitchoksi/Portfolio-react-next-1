"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaBootstrap,
    FaPython,
} from "react-icons/fa";

import { DiDjango } from "react-icons/di";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


// about data
const about = {
  title: "About me",
  description: "I am a passionate Web developer with a strong background in Front-End Developement, dedicated to delivering innovative solutions that drive success and create lasting impact.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Smit Choksi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 937 4418 071",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "luke.01",
    },
    {
      fieldName: "Email",
      fieldValue: "smitchoksi219@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Lanquages",
      fieldValue: "English, Hindi",
    },
  ],
};


const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:"With 2 years of experience in web development, I have successfully delivered my web projects, consistently exceeding client and organizational expectations.",
  items: [
    {
      company: "Infolabze.",
      position: "Python Intern",
      duration: "2023 - 2024",
    },
    {
      company: "Sharda Computer",
      position: "Front-End Developer Intern",
      duration: "2024 - Present",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2023 - 2024",
    },
    {
      company: "Tech Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2020 - 2021",
    },
  ],
}

{/* education data */}
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit repellendus, ratione similique libero accusantium quis maiores",
  items: [
    {
      institution: "Khayti Foundation",
      degree: "BCA",
      duration: "2021 - 2023",
    },
    {
      institution: "Infolabze",
      degree: "Certified Python Developer",
      duration: "2023",
    },
    {
      institution: "Sharda Computer",
      degree: "Certified React Developer",
      duration: "2023",
    },
    {
      institution: "Sharda computer",
      degree: "Certified Advanced JS ",
      duration: "2023",
    },
    {
      institution: "Infolabze",
      degree: "Certified Python Developer",
      duration: "2023",
    },
    {
      institution: "Infolabze",
      degree: "Certified Python Developer",
      duration: "2023",
    },
  ],

};

// skills data
const skills = {
  title:"My skills",
  description: "I excel at identifying complex challenges and developing innovative solutions that drive project success...",
        
    
    
   
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <DiDjango />,
      name: "Django",
    },
  ]
};


import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
}from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";



const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
    }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-ayto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" >Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

    {/* content */}
             <div className="min-h-[70vh].w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                      <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                          {experience.description}
                        </p>
                        <ScrollArea className="h-[400px]">
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {experience.items.map((item, index)=>{
                              return(
                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" >
                                  <span className="text-accent">{item.duration}</span>
                                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                    <div className="flex items-center gap-3">
                                    {/* dot */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className="text-white/60">{item.company}</p>
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </ScrollArea>
                      </div>

                    </TabsContent>
                  {/* education  */}
                  <TabsContent value="education" className="w-full">
                     <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{education.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                          {education.description}
                        </p>
                        <ScrollArea className="h-[400px]">
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {education.items.map((item, index)=>{
                              return(
                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" >
                                  <span className="text-accent">{item.duration}</span>
                                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                    <div className="flex items-center gap-3">
                                    {/* dot */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className="text-white/60">{item.institution}</p>
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </ScrollArea>
                      </div>
                  </TabsContent>

                {/* skills  */}
                <TabsContent value="skills" className="w-full h-full">
                    <div className="flex flex-col gap-[30px]">
                       <div className="flex flex-col gap-[30px] text-center xl:text-left">
                          <h3 className="text-4xl font-bold">{skills.title}</h3>
                          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                       </div> 
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                          {skills.skillList.map((skill, index)=>{
                            return(
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                      <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{skill.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            )
                          })}
                        </ul>
                     </div>  
                </TabsContent>

                  {/* about  */}
                  <TabsContent value="about" className="w-full text-center xl:text-left">
                          <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                              {about.info.map((item, index) => {
                                return (
                                  <li key={index} className="flex pl-20 xl:pl-0  xl:justify-start gap-3">
                                    <span className="text-white/60" >{item.fieldName}  </span>
                                    <span className="text-xl">{item.fieldValue}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                  </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume

