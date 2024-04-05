import React, { useRef, useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [emailStatus, setEmailStatus] = useState(false); // to show hide message box
  const [sendAction, setSendAction] = useState(false); // to show hide sending

  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const handleMesaageClose = () => {
    setEmailStatus(false);
  };

  const handleSend = async () => {
    setSendAction(true);

    const formData = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    };
    console.log(formData);

    try {
      const response = await axios.post("http://localhost:5000/send", formData);

      if (response.status === 200) {
        setSendAction(false);
        setEmailStatus(true);

        setTimeout(() => {
          setEmailStatus(false);
        }, 3000);

        console.log(emailStatus);
        console.log("Email send succefully");
        name.current.value = "";
        email.current.value = "";
        message.current.value = "";
      } else {
        console.log("Failed to send email");
      }
    } catch (error) {
      console.log("Error in sendint mail : " + error);
    }
  };

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
      <div className="flex justify-between">
        <button
          onClick={() => {
            handleSend();
          }}
          className={`${sendAction?"opacity-50 pointer-events-none":""} border rounded-md py-2 px-4 hover:cursor-pointer hover:shadow-gray-600 hover:shadow-lg hover:border-black`}
        >
          Submit
        </button>

        <div
          className={` ${sendAction?"block":"hidden"} flex w-fit rounded-md py-2 px-4 bg-neutral-300`}
        >
          <img className="w-6 " alt="" src="loading.svg"></img>
          <h1 className="px-2  font-thin"> Submitting query....</h1>
        </div>

        <div
          className={`${emailStatus?"block":"hidden"} flex blockx w-fit rounded-md py-2 px-4 bg-green-500 bg-opacity-70`}
          onClick={() => {
            handleMesaageClose();
          }}
        >
            <img
              className="w-6  hover:cursor-pointer"
              alt=""
              src="done.svg"
            ></img>
          <h1 className="px-1">Query submitted.</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
