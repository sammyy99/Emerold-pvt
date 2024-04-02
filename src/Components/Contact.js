import React from "react";
import ContactForm from "./ContactForm";
import ContactDetailsCard from "./ContactDetailsCard";
import { contactDetails } from "../Utils/constants";

const Contact = () => {


  return (
    <div className="flex justify-center font-serif bg-slate-200">
      <div className="md:w-2/3 py-6 md:py-10 ">
        <div className="text-2xl text-center md:text-left">GET IN TOUCH </div>
        <div className="grid grid-cols-5">
          <div className="col-span-5 md:col-span-2 md:flex md:flex-col">
            {contactDetails.map((card) => {
              return <ContactDetailsCard key={card.name} details={card} />;
            })}
          </div>
          <div className="col-span-5 md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
