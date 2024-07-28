import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import reCAPTCHA, { ReCAPTCHA } from "react-google-recaptcha";
import GitHub from "./../svgs/github";
import Linkedin from "./../svgs/linkedin";

const Contact = ({ className }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const refCaptcha = useRef();

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    const token = refCaptcha.current.getValue();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
        token
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage(
            "Message cannot be sent, please try again later or reach out via social media"
          );
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 7000); // hide message after 5 seconds
        }
      );
    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div className="dark:bg-slate-500 bg-white h-min-screen py-32 projects">
      <div className="container flex flex-col justify-between">
        <h3 className="text-4xl font-semibold mb-4">Connect with me</h3>
        <form class="" onSubmit={sendEmail}>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-7 group">
              <input
                type="text"
                name="user_name"
                id="user_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="user_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div class="relative z-0 w-full mb-7 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>

          <div class="relative z-0 w-full mb-7 group">
            <input
              type="email"
              name="user_email"
              id="user_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="user_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-7 group">
            <textarea
              name="message"
              id="message"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            ></textarea>
            <label
              for="message"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            class="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Submit
          </button>
          {stateMessage && <p>{stateMessage}</p>}
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            ref={refCaptcha}
          />
        </form>
        <div className="socials flex flex-row w-full mt-6">
          <a
            href="https://github.com/kiasambrook"
            aria-label="Visit my GitHub page"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            <GitHub className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/kiasambrook"
            target="_blank"
            aria-label="Visit my personal Linkedin page"
            className="hover:text-blue-500"
          >
            <Linkedin className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
