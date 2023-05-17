"use client";
import SparkGenerator from "@/components/SparkGenerator";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <SparkGenerator />
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap items-center justify-center md:justify-between min-h-screen">
          <div className="md:w-1/2">
            <Image
              src="/assets/img/hero_about.png"
              alt="Hero Image"
              width={450}
              height={450}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-20 py-10 md:py-0 text-center md:text-left">
            <h1 className="text-4xl font-bold">About</h1>
            <p className="text-2xl  mt-5">
              Hello, and welcome! I&apos;m John Edmerson Pizarra, also known as{" "}
              <span className="font-bold text-blue-500">
                Edmer - a Full Stack Developer
              </span>{" "}
              with a knack for creating dynamic, user-friendly web applications.
              Hailing from Limay, Central Luzon in the Philippines, I transform
              abstract concepts into digital realities, one line of code at a
              time.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center min-h-screen py-20">
          <div
            className="flex flex-col justify-center items-center h-[600px] w-full py-28 rounded-3xl bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/img/exp_bg.png')",
            }}
          >
            <h2 className="text-4xl font-bold text-center text-white">
              Expertise
            </h2>

            <p className="text-lg md:text-2xl text-white mt-5 text-center lg:w-5/6 px-5">
              With a solid skillset spanning JavaScript, PHP, MySQL, and Python,
              I have a comprehensive understanding of both the aesthetic and
              functional aspects of web development. My passion for coding is
              backed by several certifications, including Responsive Web Design
              and JavaScript Algorithms and Data Structures.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap-reverse items-center justify-center md:justify-between min-h-screen py-20">
          <div className="md:w-1/2 md:pr-20 py-10 md:py-0 text-center md:text-left">
            <h1 className="text-4xl font-bold">Experience</h1>
            <p className="text-2xl  mt-5">
              My professional journey started at PocketDevs, where I contributed
              to various stages of the software lifecycle, from design to
              deployment. My work has helped businesses enhance their online
              presence, streamline operations, and deliver a more engaging user
              experience. I&apos;ve worked on projects that span from designing
              robust content management systems to enhancing web app performance
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/assets/img/exp_about.png"
              alt="Hero Image"
              width={450}
              height={450}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-between min-h-screen py-20">
          <div className="md:w-1/2">
            <Image
              src="/assets/img/edu_about.png"
              alt="Hero Image"
              width={350}
              height={550}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-20 py-10 md:py-0 text-center md:text-left">
            <h1 className="text-4xl font-bold">Education</h1>
            <p className="text-2xl  mt-5">
              In addition to my professional experience, I&apos;m currently
              expanding my knowledge in Computer Science at Bataan Peninsula
              State University. This ongoing education helps me stay abreast of
              the latest trends and innovations in the tech industry
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
