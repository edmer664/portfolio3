"use client";

import React from "react";
import projects from "@/config/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className="container mx-auto px-5">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-screen py-20">
          {projects.map((project) => (
            <div className="flex flex-col justify-between" key={Math.random()}>
              <div className="flex justify-center">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={550}
                  height={550}
                  onClick={() => {
                    window.open(project.url, "_blank");
                  }}
                  className="rounded-3xl hover:-rotate-1 transition-all duration-300 cursor-pointer md:w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
