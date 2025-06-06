import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function NavbarLink(props: Props) {
  return (
    <Link
      className="hover:-rotate-3 transition-all duration-500"
      href={props.href}
      onClick={props.onClick}
    >
      <span
        className={`font-bold hover:text-black transition-all duration-150 ${
          props.isActive ? "text-black" : "text-gray-500"
        }`}
      >
        {props.name}
      </span>
    </Link>
  );
}
