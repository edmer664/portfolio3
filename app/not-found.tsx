import Button from "../components/Button";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function NotFound() {
  return (
    <main className="container mx-auto px-5 md:py-12 py-6">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-2xl font-bold">Page not found</p>
        </div>
        <Button oldHref="/" className="mt-4">
          <AiOutlineArrowLeft className="inline-block mr-2" />
          Go back home
        </Button>
      </div>
    </main>
  );
}
