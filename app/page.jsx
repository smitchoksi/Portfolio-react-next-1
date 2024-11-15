"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import {FiDownload } from "react-icons/fi";
//import Pdf from "./Pdf";
import Typed from "typed.js";


const Home = () => {

  const typedRef = useRef(null);

  useEffect(()=>{
    const options = {
      strings:[ "Software Developer", "Front-End Develpoer","React Developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }

  },[])

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl" ref={typedRef}></span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Choksi Smit</span> </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at craftingelegant digital experiences and I am proficient in various programing lanquages and technologies.
            </p>
            {/* btn and socials*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button variant="outline"
                    size="lg" className="uppercase flex items-center gap-2"
                  >
                    <a href="/cv.pdf" download="Smit_CV.pdf"><span>Download CV</span></a>
                    <FiDownload className="text-xl" />
                  </Button>
                  {/*<Pdf /> */}
                  <div className="mb-8 xl:mb-0">
                    <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                  </div>
              </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home

