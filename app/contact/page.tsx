"use client";
import Button from "@/components/Button";
import SparkGenerator from "@/components/SparkGenerator";
import React from "react";
import { MdSend } from "react-icons/md";

function Contact() {
  // form states
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // form validation states
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");
  const [subjectError, setSubjectError] = React.useState("");

  // form validation functions
  function validateName() {
    if (name.length === 0) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  }

  function validateEmail() {
    if (email.length === 0) {
      setEmailError("Email is required");
      return;
    }
    if (!email.includes("@")) {
      setEmailError("Email is invalid");
      return;
    }

    setEmailError("");
  }

  function validateMessage() {
    if (message.length === 0) {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
  }

  function validateSubject() {
    if (subject.length === 0) {
      setSubjectError("Subject is required");
    } else {
      setSubjectError("");
    }
  }

  function validateForm() {
    validateName();
    validateEmail();
    validateMessage();
    validateSubject();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    validateForm();

    if (nameError || emailError || messageError || subjectError) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    // POST form data to Formspree
    const response = await fetch("https://formspree.io/f/xlekvazn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    if (response.ok) {
      // if HTTP-status is 200-299
      // get the response body (the method explained below)
      const json = await response.json();
      console.log(json);
      // form submission was successful. Reset the form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      console.log("HTTP-Error: " + response.status);
    }

    setIsSubmitting(false);
  }

  return (
    <>
      <SparkGenerator />
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap justify-center md:justify-between min-h-screen xl:min-h-[1080px] py-20">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="text-2xl pr-5 mt-5">
              Ready to start a project or just have a question? Don&apos;t
              hesitate to get in touch! I&apos;d love to hear about your ideas,
              challenges, or any inquiries you may have.
            </p>
          </div>
          <div className="md:w-1/2 px-10 py-20 text-start md:text-left bg-white shadow rounded-3xl mt-5 md:mt-0">
            <form
              className="flex flex-col gap-5 mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 border-gray-300 rounded-md p-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={validateName}
                />
                {nameError && <p className="text-red-500">{nameError}</p>}

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-2 border-gray-300 rounded-md p-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}

                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="border-2 border-gray-300 rounded-md p-2"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onBlur={validateSubject}
                />
                {subjectError && <p className="text-red-500">{subjectError}</p>}

                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="border-2 border-gray-300 rounded-md p-2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={validateMessage}
                />
                {messageError && <p className="text-red-500">{messageError}</p>}
                <div>
                  <small>
                    Please Note: While I strive to respond as quickly as
                    possible, please allow up to 7 days for a response. Your
                    understanding and patience are greatly appreciated. Thank
                    you!
                  </small>
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2"
                  >
                    Submit
                    <MdSend className="text-xl" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
