import React from "react";
import Button from "../Button";
import { MdMailOutline } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="h-96 py-10 bg-gradient-to-b from-transparent to-black"></div>
      <div className="bg-black">
        <div className="container mx-auto px-5">
          {/* Call to Action */}
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-full md:w-11/12 text-center">
              <h2 className="text-4xl font-bold text-white">
                Let&apos;s Create Something Amazing Together
              </h2>
              <p className="text-white py-5">
                Are you ready to elevate your online presence with a beautifully
                designed, high-performing web app? At Edmer, we&apos;re
                passionate about collaborating with clients to craft digital
                solutions that exceed expectations. Don&apos;t settle for
                anything less than extraordinary when it comes to your web
                development needs.
              </p>
              <div className="flex items-center justify-center">
                <Button className="mt-5" inverted href="/contact">
                  <MdMailOutline className="mr-2" size={20} /> Contact Me
                </Button>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="grid grid-cols-12 gap-y-5 py-20">
            {/* BRAND */}
            <div className="col-span-12 md:col-span-7">
              <Image
                src="/assets/img/expanded_logo_white.svg"
                alt="Edmer"
                width={200}
                height={50}
              />
            </div>
            {/* LINKS */}
            <div className="col-span-12 md:col-span-2">
              <h3 className="text-white font-bold text-xl">Links</h3>
              <ul className="py-5">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-gray-400 transition-all duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white hover:text-gray-400 transition-all duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-white hover:text-gray-400 transition-all duration-300"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-gray-400 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* SOCIAL */}
            <div className="col-span-12 md:col-span-3">
              <div className="flex items-center justify-center md:justify-start gap-5">
                <a
                  href="https://www.linkedin.com/in/edmerpizarra/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-400 transition-all duration-300"
                >
                  <AiFillLinkedin size={30} />
                </a>
                <a
                  href="mailto:edmerpizarra@gmail.com"
                  className="text-white hover:text-gray-400 transition-all duration-300"
                >
                  <MdMailOutline size={30} />
                </a>
                <a
                  href="https://www.facebook.com/EdmerKun/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-400 transition-all duration-300"
                >
                  <AiFillFacebook size={30} />
                </a>
                <a
                  href="https://github.com/edmer664"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-400 transition-all duration-300"
                >
                  <AiFillGithub size={30} />
                </a>
              </div>
            </div>
            <div className="col-span-12">
              <small className="text-white text-center md:text-start block">
                © {new Date().getFullYear()} John Edmerson Pizarra. All rights
                reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
