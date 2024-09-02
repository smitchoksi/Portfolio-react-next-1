"use client";


import { Button } from "@/components/ui/button";
import { Input } from  "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import{
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 937 4418 071",
    
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "smitchoksi219@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Maninagar, Ahemedabad 380008",
  },
];

import { motion } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ltbxg4a', 'template_xmhgher', form.current, 'q_I0sBa_GSWFp6rV1')
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Sent Successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <motion.section 
    initial={{opacity: 0}}
    animate= {{
    opacity: 1, 
    transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},  
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" ref={form} onSubmit={sendEmail} >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit dolorum dolorem placeat consequuntur necessitatibus?
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input required type="firstname" placeholder="Firstname" name='your_firstsname'  />
                <Input required type="lastname" placeholder="Lastname" name="your_lastname" />
                <Input required type="email" placeholder="Email address"  pattern="[a-z0-9._%+\-]+@[-z0-9.\-]+\.[a-z]{2,}$" name='your_email' 
                  
                />
                <Input required type="phone" placeholder="Phone number" name="your_phonenumber"/>
              </div>
              {/* select */}
              <Select required  name="your_service">
                <SelectTrigger  className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development" >Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea required className="h-[200px]" placeholder="Type your message here." name='message' />
              {/*btn */}
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return(
                  <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                       <h3 className="text-xl">{item.description}</h3> 
                      </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
