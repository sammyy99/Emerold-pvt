import React from "react";

const ContactForm = () => {
  return (
    <div className="p-4 md:p-8 border bg-white my-4 md:my-6 md:ml-2 rounded-md shadow-md hover:shadow-gray-600 hover:shadow-lg ">
      <div>
        <input
          className="w-full  py-2 px-3 border  rounded-md"
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div>
        <input
          className="w-full  py-2 px-3 border  rounded-md my-4 md:my-6"
          type="text"
          placeholder="E-mail"
        />
      </div>
      <div>
        <textarea
          className="w-full py-2 px-3 border  rounded-md mb-6 md:mb-10"
          rows={3}
          placeholder="Message"
        />
      </div>
      <div>
        <button className="border rounded-md py-2 px-4 hover:cursor-pointer hover:shadow-gray-600 hover:shadow-lg hover:border-black">Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;
