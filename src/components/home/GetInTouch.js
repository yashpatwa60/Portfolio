import React from "react";

const GetInTouch = () => {
  return (
    <section className="my-9 bg-[#afdbc2] p-4">
      <p className="text-3xl underline ml-8">Get In Touch</p>
      <p className="w-3/4 my-3 p-4 mx-8 border-gray-200 bg-gray-200">
        My inbox is always open whether you have a question, a cool game idea,
        or just <br />
        want to say hi. Let's get in touch!
      </p>
      <button className="mx-8 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Get In Touch
      </button>
    </section>
  );
};

export default GetInTouch;
