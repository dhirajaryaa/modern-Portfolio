import SectionHeader from "./SectionHeader";
import Card from "./Card";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
   
  }
  return (
    <section id="contact">
      <div className="container py-20 max-w-5xl w-full">
        <SectionHeader
          tag="Contact us"
          title="Get in touch with me"
          description="Let's build something great together!"
        />
        <Card>
          <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4 md:gap-8">
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              aria-label="Full Name"
              className="px-4 py-2 rounded-xl bg-transparent border-2 border-white/20 focus:outline-none text-sm w-full"
            />
            <label htmlFor="email" className="sr-only">
              Email Address
              
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="px-4 py-2 rounded-xl bg-transparent border-2 border-white/20 focus:outline-none text-sm w-full"
            />
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              aria-label="Subject"
              className="col-span-2
              px-4 py-2 rounded-xl bg-transparent border-2 border-white/20 focus:outline-none text-sm w-full"
            />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              aria-label="Message"
              className="col-span-2 px-4 py-2 rounded-xl bg-transparent border-2 border-white/20 focus:outline-none text-sm w-full h-40"
            ></textarea>
            <button
              type="submit"
              className="col-span-2 px-8 md:px-12 md:py-4 py-2 rounded-xl bg-emerald-500/80 text-white font-bold text-sm hover:bg-emerald-700 transition duration-300 tracking-wide"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <FaSpinner className="animate-spin" size={"20"} />
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
