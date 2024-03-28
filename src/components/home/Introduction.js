import React from "react";
import { GitImg, LinkedinImg, InstaImg, LeetcodeImg } from "../../assets/svg";
import ProfileImg from "../../assets/img/profile.png";
import Gif from "../../assets/img/introimg.gif";

export const Introduction = () => {
  return (
    <div className="container h-96  bg-contain">
      <main className="p-5 my-4">
        <p className="text-3xl underline ml-8 mb-2">Introduction </p>

        <div className="flex justify-evenly items-center bg-dot-1 bg-cover pt-5 pb-16">
          <div className="flex">
            <div>
              <div className="flex">
                <img className="w-[200px]" src={Gif} alt="" />
                <div className="mt-10">
                  <p className="mt-1 text-xl">Hey my name is </p>

                  <p className="text-3xl mt-2 hover:underline hover:decoration-sky-500 font-sans font-bold hover:text-gray-700">
                    Yashdeep Patwa
                  </p>
                  <p className="mt-1 text-3xl font-semibold">
                    I'm a Full Stack Developer
                  </p>

                  {/* <p className="mt-1 text-xl">Enthusiastic Developer 🍕 </p> */}
                </div>
              </div>

              <div className="flex items-center">
                <div className="ml-10">
                  <div className="flex mt-2 mb-8 gap-2">
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
                        href="https://leetcode.com/yashpatwa1602/"
                      >
                        <LeetcodeImg />
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
                    <a
                      href="mailto:yashpatwa1602@gmail.com"
                      class="relative m-2 px-6 py-3 font-bold text-black group "
                    >
                      <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                      <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
                      <span class="relative">Get In Touch</span>
                    </a>
                    <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/13Th0RO3x57YvzgORwPHI9JXAjWNDl7QB/view?usp=sharing "
                        download
                      >
                        Resume
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              style={{ height: "320px", width: "300px" }}
              src={ProfileImg}
              alt="profile"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
