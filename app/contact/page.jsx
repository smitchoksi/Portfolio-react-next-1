"use client";

import React, { useState } from 'react';

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
    href: "tel:+919374418071",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "smitchoksi219@gmail.com",
    href: "mailto:smitchoksi219@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Maninagar-380008, Ahmedabad",
    href: "https://www.google.co.in/maps/place/Chandranagar+Society,+Basant+Nagar,+Maninagar,+Ahmedabad,+Gujarat+380008/@22.9902167,72.5972728,17z/data=!3m1!4b1!4m6!3m5!1s0x395e85eed0f3af17:0x1bae4995dcf4dc14!8m2!3d22.9902118!4d72.5998477!16s%2Fg%2F11c63zbfqt?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
  },
];

import { motion } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    select: '',
    Textarea: '',
  };

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    select: '',
    Textarea: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formValues.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (formValues.firstName.length < 3) {
      errors.firstName = 'First name must contain at least 3 word';
    }

    if (!formValues.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (formValues.lastName.length < 3) {
      errors.lastName = 'Last name must contain at least 3 word';
    }


    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!formValues.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!phonePattern.test(formValues.phoneNumber)) {
      errors.phoneNumber = 'Phone number is invalid';
    }


    return errors;
  };

  

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
      .sendForm('service_ltbxg4a', 'template_xmhgher', form.current, 'q_I0sBa_GSWFp6rV1')
      // No errors, proceed with form submission
      alert('Form submitted successfully', setFormValues(initialFormState));
      // You can perform further actions like sending the form data to a server here.
      
    }
    else{
      alert("!!Something Went's Wrong!!");
    }
      
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
              <p className="text-white/60" >By leveraging our team's diverse expertise and innovative approach, we will deliver exceptional results that exceed client expectations.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input required type="text" placeholder="First name"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}  />     {errors.firstName && <p>{errors.firstName}</p>}

                <Input required type="text" placeholder="last name"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange} />              {errors.lastName && <p>{errors.lastName}</p>}

                <Input required type="email" placeholder="Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange} 
                />        {errors.email && <p>{errors.email}</p>}

                <Input required type="text" placeholder="Phone number"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}/>         {errors.phoneNumber && <p>{errors.phoneNumber}</p>}

              </div>
              {/* select */}
              <Select required name="service" >
                <SelectTrigger  className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent >
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Web Design">Web Design</SelectItem>
                    <SelectItem value="Python Development">Python Development</SelectItem>
                    <SelectItem value="Front-End Development">Front-End Development</SelectItem>
                    <SelectItem value="Full-Stack Development">Full-Stack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea required className="h-[200px]" placeholder="Type your message here." name='message' />
              {/*btn */}
              <Button type="submit" size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return(
                  <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]" onClick={() => window.location.href = item.href } style={{cursor:"pointer"}}>{item.icon}</div>
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
