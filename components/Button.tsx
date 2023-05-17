"use client";
import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href?: string;
  oldHref?: string;
  className?: string;
  onClick?: () => void;
  inverted?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button(props: Props) {
  const {
    children,
    href,
    oldHref,
    className,
    inverted,
    disabled,
    ...otherProps
  } = props;

  const bgClass = inverted
    ? "bg-white hover:bg-black"
    : "bg-black hover:bg-white";
  const textClass = inverted
    ? "text-black hover:text-white"
    : "text-white hover:text-black";

  const classes = `uppercase flex gap-2 px-5 py-2.5 items-center rounded-2xl transition-all duration-150 shadow font-bold ${bgClass} ${textClass} ${className}`;

  if (oldHref) {
    return (
      <a
        href={oldHref}
        className={`${classes} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        {...otherProps}
      >
        {children}
      </a>
    );
  } else if (href) {
    return (
      <Link href={href}>
        <div
          className={`${classes} ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          {...otherProps}
        >
          {children}
        </div>
      </Link>
    );
  }

  return (
    <button
      className={`${classes} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
}
