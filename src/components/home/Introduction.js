import React from "react";
import { GitImg, LinkedinImg, InstaImg } from "../../assets/svg";
import ProfileImg from "../../assets/img/profile.png";
import Gif from "../../assets/img/introimg.gif";

export const Introduction = () => {
  return (
    <main className="p-5 my-4">
      <p className="text-3xl underline ml-8">Introduction</p>
      <p className="text-5xl mt-2 ml-56 hover:underline hover:decoration-sky-500 font-sans font-bold hover:text-gray-700">
        Hey ! I am Yashdeep Patwa
      </p>
      <div className="flex justify-evenly items-center ">
        <div className="flex">
          <div>
            <img src={Gif} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <p className="mt-1 text-xl">Enthusiastic Developer 🍕 </p>

              <div className="flex my-4 gap-2">
                <div style={{ height: "30px", width: "30px" }}>
                  <a target="_black" href="https://github.com/yashpatwa60">
                    <GitImg />
                  </a>
                </div>
                <div style={{ height: "30px", width: "30px" }}>
                  <a
                    target="_black"
                    href="https://www.linkedin.com/in/yashpatwa/"
                  >
                    <LinkedinImg />
                  </a>
                </div>
                <div style={{ height: "30px", width: "30px" }}>
                  <a
                    target="_black"
                    href="https://www.instagram.com/myflowisslow"
                  >
                    <InstaImg />
                  </a>
                </div>
              </div>
              <div className="mt-3">
                {/* <button className="px-3 py-2 rounded-full bg-gray-200 border-2 border-gray-300 tracking-wider">
                  Get In Touch
                </button> */}
                <a
                  href="mailto:yashpatwa1602@gmail.com"
                  class="relative m-2 px-6 py-3 font-bold text-black group "
                >
                  <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span class="relative">Get In Touch</span>
                </a>
                <button className="px-3 py-2 rounded-full border-2 border-gray-300 tracking-wider">
                  <a target="_blank" href="src/assets/Yash_Patwa.pdf" download>
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            style={{ height: "350px", width: "300px" }}
            src={ProfileImg}
            alt="profile"
          />
        </div>
      </div>
    </main>
  );
};
