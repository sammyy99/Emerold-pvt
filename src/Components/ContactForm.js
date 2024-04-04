import React, { useRef } from "react";
import axios from "axios"

const ContactForm = () => {

  const name = useRef(null)
  const email = useRef(null)
  const message = useRef(null)

  const handleSend = async()=>{

    const formData = {
      name : name.current.value,
      email : email.current.value,
      message : message.current.value
    }
    console.log(formData)

    try {
     
      const response = await axios.post("http://localhost:5000/send",formData);

      if (response.status===200) {
         console.log("Email send succefully")
         name.current.value = ""
         email.current.value = ""
         message.current.value = ""
      } else {
         console.log("Failed to send email")
      }
      
    } catch (error) {
      console.log("Error in sendint mail : "+error)
    }

  }

  return (
    <div className="p-4 md:p-8 border bg-white my-4 md:my-6 md:ml-2 rounded-md shadow-md hover:shadow-gray-600 hover:shadow-lg ">
      <div>
        <input
          ref={name}
          className="w-full  py-2 px-3 border  rounded-md"
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div>
        <input
          ref={email}
          className="w-full  py-2 px-3 border  rounded-md my-4 md:my-6"
          type="text"
          placeholder="E-mail"
        />
      </div>
      <div>
        <textarea
          ref={message}
          className="w-full py-2 px-3 border  rounded-md mb-6 md:mb-10"
          rows={3}
          placeholder="Message"
        />
      </div>
      <div>
        <button
         onClick={()=>{handleSend()}}
        className="border rounded-md py-2 px-4 hover:cursor-pointer hover:shadow-gray-600 hover:shadow-lg hover:border-black">Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;
