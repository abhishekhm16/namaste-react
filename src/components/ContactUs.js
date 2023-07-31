import React from "react";

function ContactUs() {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="p-4 m-4 flex justify-center font-bold text-4xl">
        Contact Us
      </h1>
      <form className="mx-auto p-2 flex justify-center flex-col w-6/12">
        <label htmlFor="name">Name</label>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-3 m-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          id="name"
        />
        <label htmlFor="msg">Message</label>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-3 m-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          id="msg"
        />
        <input
          type="submit"
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          value=" Submit"
        />
      </form>
    </div>
  );
}

export default ContactUs;
