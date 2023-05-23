"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";
import projects from "@/config/projects";
import { useEffect, useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import SparkGenerator from "@/components/SparkGenerator";
import { InlineWidget } from "react-calendly";
import Loader from "@/components/Loader";

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const openCalendly = () => {
    setShowCalendly(true);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      <Loader show={showLoader} />
      {showCalendly && (
        <div
          style={{
            position: "fixed", // Position as fixed
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a dark overlay
          }}
          onClick={closeCalendly}
        >
          <div
            style={{
              position: "relative",
              width: "80%",
              height: "80%",
              backgroundColor: "white",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling up
          >
            <AiOutlineClose
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}
              onClick={closeCalendly}
            />
            <InlineWidget
              url="https://calendly.com/edmer-is-dev/15min"
              styles={{ height: "80vh" }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "00a2ff",
                textColor: "4d5055",
              }}
              prefill={{
                email: "",
                firstName: "",
                lastName: "",
                name: "",
              }}
              utm={{
                utmCampaign: "",
                utmContent: "",
                utmMedium: "",
                utmSource: "",
                utmTerm: "",
              }}
            />
          </div>
        </div>
      )}
      <SparkGenerator />
      <div className="container mx-auto px-5">
        {/* HERO */}
        <div className="flex flex-col text-center md:text-left md:flex-row min-h-screen 2xl:min-h-[1080px] items-center">
          {/* LEFT SIDE */}
          <div className="md:w-1/2 flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-bold">
              Innovative Web Solutions by a Passionate Full Stack Developer
            </h1>
            <p>
              Discover the value Edmer brings as a Full Stack Developer,
              creating powerful web solutions that propel your business forward.
              Don&apos;t miss out – click to schedule a meeting and let&apos;s
              build your digital success together!
            </p>
            <div className="mx-auto md:mx-0">
              <Button className="" onClick={openCalendly}>
                <AiOutlineCalendar className="mr-2" /> Schedule a Meeting
              </Button>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              className="transition-all duration-300 cursor-pointer mr-0"
              src="/assets/img/hero_img.png"
              alt="Hero Image"
              width={250}
              height={350}
            />
          </div>
        </div>
        {/* FEATURED */}
        <div className="min-h-screen 2xl:min-h-[1080px] py-10">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <div className="w-full py-10">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl">
                <Image
                  src={projects[0].image}
                  alt={projects[0].name}
                  width={isMobile ? 270 : 550}
                  height={isMobile ? 270 : 550}
                  onClick={() => {
                    window.open(projects[0].url, "_blank");
                  }}
                  className="rounded-3xl mx-auto md:mx-0 hover:scale-105 transition-all duration-300 cursor-pointer md:w-full"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-wrap gap-5 items-center lg:justify-start justify-center md:justify-evenly">
                {projects.slice(1, 4).map((project) => (
                  <div
                    key={project.name}
                    className="overflow-hidden rounded-3xl cursor-pointer"
                  >
                    <Image
                      className="hover:scale-105 transition-all duration-300"
                      src={project.image}
                      alt={project.name}
                      width={270}
                      height={270}
                      onClick={() => {
                        window.open(project.url, "_blank");
                      }}
                    />
                  </div>
                ))}
                <div className="flex items-center justify-center w-64">
                  <div className="mx-auto">
                    <Button className="mt-5" href="/projects">
                      See All
                      <MdOutlineChevronRight className="ml-2" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SERVICES */}
        <div className="min-h-screen 2xl:min-h-[1080px] py-10">
          <h2 className="text-4xl font-bold">Services</h2>
          <p className="py-5">
            I, Edmer, take pride in being an individual who delivers outstanding
            web solutions tailored to your specific needs. With a strong
            background in UI/UX design and full-stack development, my
            comprehensive services guarantee that your web applications not only
            possess stunning visuals but also function flawlessly.
          </p>
          <div className="w-full py-10">
            <div className="flex flex-col md:flex-row justify-center gap-10">
              <div className="w-full md:w-1/2 p-10 rounded-3xl bg-white h-full shadow-xl">
                {/* Card 1 */}
                <div className="flex flex-col gap-5 justify-between lg:flex-row">
                  <Image
                    src="/assets/img/dev.svg"
                    alt="Service 1"
                    className="object-contain w-80 h-80"
                    width={300}
                    height={300}
                  />

                  <div className="w-full flex flex-col justify-between h-full">
                    <h3 className="text-2xl font-bold">
                      Full-Stack Development/
                    </h3>
                    <p>
                      I create web apps for multiple platforms, delivering
                      robust and scalable solutions. Trust me to exceed your
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-10 rounded-3xl bg-white h-full shadow-xl">
                {/* Card 2 */}
                <div className="flex flex-col gap-5 justify-between lg:flex-row">
                  <Image
                    src="/assets/img/ui.svg"
                    alt="Service 1"
                    className="object-contain w-80 h-80"
                    width={300}
                    height={300}
                  />
                  <div className="w-full flex flex-col justify-between h-full">
                    <h3 className="text-2xl font-bold">UI/UX Design</h3>
                    <p>
                      I create stunning, intuitive UI designs that are visually
                      appealing and highly functional for your web apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center py-20">
              <p className="text-center md:w-1/2">
                Ready to bring your vision to life? Get in touch with me, Edmer,
                and discover how my comprehensive services can transform your
                ideas into impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
