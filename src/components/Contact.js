import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BiMessageRounded } from "react-icons/bi";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_39qcii8",
      "template_ljqtull",
      {
        from_name: form.current[0].value,
        email: form.current[1].value,
        message: form.current[2].value,
      },
      "AKvW-V-FDAUloRsAV"
    );
    form.current[0].value = "";
    form.current[1].value = "";
    form.current[2].value = "";
  };

  return (
    <div
      id="contact"
      className="md:w-9/12 w-11/12 m-auto md:pt-40 pt-[80px] pb-20 "
    >
      <h1 className="text-center font-bold text-4xl">Contact</h1>
      <p className="text-center font-normal text-sm text-[var(--text-color-desc)]">
        Get in touch
      </p>
      <div className="grid md:grid-cols-2 pt-20 grid-cols-1 md:gap-0 gap-20">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center gap-2">
            <BiMessageRounded size={20} />
            <h3 className="font-bold">Talk to me</h3>
          </div>
          <div className="flex flex-col md:gap-10 gap-5 pt-10">
            <span>
              <h4 className="text-[var(--text-color-desc)] text-sm">Email</h4>
              <p className="font-medium">trnanhvu.dev@gmail.com</p>
            </span>
            <span>
              <h4 className="text-[var(--text-color-desc)] text-sm">Phone</h4>
              <p className="font-medium">+84 969721480</p>
              <a
                href="tel:+84969721480"
                className="flex items-center gap-1 group pt-2"
              >
                <p className="font-bold">Call me</p>
                <span className="group-hover:translate-x-1 transition-transform ease-linear duration-200">
                  <BsArrowRightShort size={25} />
                </span>
              </a>
            </span>
            <span>
              <h4 className="text-[var(--text-color-desc)] text-sm">
                Messenger
              </h4>
              <p className="font-medium">Vukunnn</p>
              <a
                href="https://www.facebook.com/messages/t/100011980750726"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 group pt-2"
              >
                <p className="font-bold">Write me</p>
                <span className="group-hover:translate-x-1 transition-transform ease-linear duration-200">
                  <BsArrowRightShort size={25} />
                </span>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center gap-2">
            <RiSendPlaneLine size={20} />
            <h3 className="font-bold">Tell me anything!</h3>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 pt-10 gap-10"
          >
            <div className="relative">
              <label
                htmlFor=""
                className="absolute p-2 bg-white dark:bg-[var(--color-bg-dark)] text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] ease-in-out duration-500 top-[-20px] left-5"
              >
                Name
              </label>
              <input
                required
                placeholder="Write your name"
                type="text"
                className="border-2 w-[360px] bg-transparent border-gray-500 focus:outline-none p-5 rounded-full"
              />
            </div>
            <div className="relative">
              <label
                htmlFor=""
                className="absolute p-2 bg-white dark:bg-[var(--color-bg-dark)] text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] ease-in-out duration-500 top-[-20px] left-5"
              >
                Email
              </label>
              <input
                required
                placeholder="Write your email"
                type="email"
                className="border-2 w-[360px] bg-transparent border-gray-500 focus:outline-none p-5 rounded-full"
              />
            </div>
            <div className="relative">
              <label
                htmlFor=""
                className="absolute p-2 bg-white dark:bg-[var(--color-bg-dark)] text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] ease-in-out duration-500 top-[-20px] left-5"
              >
                Your message
              </label>
              <textarea
                required
                placeholder="Write your message"
                type="text"
                className="border-2 w-[360px] bg-transparent border-gray-500 focus:outline-none p-5 resize-none  rounded-3xl"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-1 group"
            >
              <h3 className="font-semibold text-2xl">Submit</h3>
              <span className="group-hover:translate-x-2 transition-transform ease-linear duration-200">
                <FiArrowUpRight size={25} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
