"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_88kdf1h",
        "template_vrpjiaq",
        form.current,
        "_tmtIIYaWk57hSsgf"
      )
      .then(
        (result) => {
          setOpen(true)
          form.current.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* container */}
      <div
        id="contact"
        className="flex flex-col justify-center items-center relative z-1 max-lg:p-0"
      >
        {/* wrapper */}
        <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] pt-[80px] gap-[12px] mb-12">
          {/* title */}
          <div className="text-[42px] text-center font-[600] mt-[20px] text-[#F2F3F4] max-md:mt-[12px] max-md:text-[42px]">
            Contact
          </div>
          {/* desc */}
          <div className="text-[18px] text-center max-w-[600px] text-[#b1b2b3] max-md:mt-[12px] max-md:text-[16px] max-sm:text-center max-sm:px-[18px]">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </div>
          {/* ContactFrom */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-[95%] max-w-[600px] flex flex-col bg-[#171721] p-[32px] rounded-[16px] shadow-md mt-[28px] gap-[12px]"
          >
            {/* ContactTitle */}
            <div className="text-center text-[24px] mb-[12px] font-[600] text-[#F2F3F4]">
              Email Me 📩
            </div>
            {/* ContactInput */}
            <input
              type="text"
              placeholder="Your Email"
              name="from_email"
              className="flex-1 bg-transparent border border-[#b1b2b3] outline-none text-[#F2F3F4] 
                font-[18px] rounded-[12px] py-[12px] px-[10px] focus:border-[#854CE6]"
            />
            {/* ContactInput */}
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              className="flex-1 bg-transparent border border-[#b1b2b3] outline-none text-[#F2F3F4] 
                font-[18px] rounded-[12px] py-[12px] px-[10px] focus:border-[#854CE6]"
            />
            {/* ContactInput */}
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="flex-1 bg-transparent border border-[#b1b2b3] outline-none text-[#F2F3F4] 
                font-[18px] rounded-[12px] py-[12px] px-[10px] focus:border-[#854CE6]"
            />
            {/* ContactInputMessage */}
            <textarea
              placeholder="Message"
              rows="4"
              name="message"
              className="flex-1 bg-transparent border border-[#b1b2b3] outline-none 
                text-[18px] text-[#F2F3F4] rounded-[12px] py-[12px] px-[16px] focus:border-[1px] focus:border-solid focus:border-[#854CE6]"
            />
            {/*  */}
            <input
              type="submit"
              className="w-full text-decoration-none text-center bg-[#dc00ff]
                  px-[16px] py-[13px] mt-[2px] rounded-[12px] border-none text-[#F2F3F4] text-[18px] font-[600] 
                  hover:cursor-pointer hover:bg-[#8b00ff] transform active:scale-95 transition duration-300 ease-in-out"
              value="Send"
            />
          </form>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Email sent successfully!"
        severity="success"
      />
    </>
  );
};

export default Contact;
