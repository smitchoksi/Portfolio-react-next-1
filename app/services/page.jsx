"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full Stack-Develop",
    description: 
    "We provide comprehensive full stack development services, delivering end-to-end solutions that seamlessly integrate front-end user experiences with powerful back-end functionality.",
    href: "https://housecarehub.pythonanywhere.com/"
  }, 
  {
    num: "02",
    title: "Python Development",
    description: 
    "Web Development: From Flask to Django, we use Python’s powerful web frameworks to create dynamic, secure, and scalable web applications.",
    href: "https://portreactwithsmit.netlify.app/"
  },
  
  {
    num: "03",
    title: "Web Design",
    description: 
    "Web Design: We create responsive websites that look beautiful and function perfectly on any device, from desktops to smartphones.",
    href: "https://burgerappwithsmit.netlify.app/"
  },
  {
    num: "04",
    title: "Web Development",
    description: 
    "User-Centered: We prioritize user experience, creating intuitive and engaging websites that drive conversions and customer satisfaction.",
    href: "https://foodappsmit.netlify.app/"
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial= {{ opacity: 0 }}
          animate = {{
            opacity: 1,
            transition: { delay: 2.4, duration:0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
            {services.map((service, index)=> {
              return (
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  {/* top */}
                  <div className="w-full flex justify-between items-center" >
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">{service.num}</div>

                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>

                  </div>  
                  {/* title */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  {/* description */}
                  <p className="text-white/60">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full">
                  
                  </div>
                </div>
              ); 
            })}
        </motion.div>
      </div> 
    </section>
  )
}

export default Services
