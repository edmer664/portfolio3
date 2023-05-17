"use client";
import React, { useEffect } from "react";
import NavbarLink from "./NavbarLink";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface Props {
  links: {
    name: string;
    href: string;
  }[];
  logo: {
    alt: string;
    src: string;
  };
  mobileLogo: {
    alt: string;
    src: string;
  };
}

export default function Navbar(props: Props) {
  const [activeLink, setActiveLink] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const path = usePathname();

  function setCurrentActiveLink() {
    const currentActiveLink = props.links.findIndex(
      (link) => link.href === path
    );
    setActiveLink(currentActiveLink);
  }

  useEffect(() => {
    setCurrentActiveLink();
  }, [path]);

  return (
    <>
      <div className="w-full">
        <nav className="container px-5 md:py-12 py-6 flex justify-between items-center mx-auto">
          <div>
            <Image
              className="hidden md:block"
              src={props.logo.src}
              alt={props.logo.alt}
              width={180}
              height={52.5}
            />
            <Image
              className="block md:hidden"
              src={props.mobileLogo.src}
              alt={props.mobileLogo.alt}
              width={32}
              height={32}
            />
          </div>

          <div className="hidden md:flex gap-12">
            {props.links.map((link) => (
              <NavbarLink
                key={link.href}
                name={link.name}
                href={link.href}
                isActive={props.links.indexOf(link) === activeLink}
              />
            ))}
          </div>

          <div className="md:hidden">
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AiOutlineMenu size={24} />
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white fixed top-0 left-0 z-50 w-full h-screen`}
      >
        <div className="container px-5 py-12 mx-auto">
          <div className="absolute top-0 right-0 mt-6 mr-6">
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <AiOutlineClose size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-12">
            {props.links.map((link) => (
              <NavbarLink
                key={link.href}
                name={link.name}
                href={link.href}
                isActive={props.links.indexOf(link) === activeLink}
                onClick={() => {
                  setTimeout(() => {
                    setIsMenuOpen(false);
                  }, 500);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
