import React from "react";
import { VueImg, ReactImg, TailImg, NodeImg } from "../../assets/stacks.js";

export const About = () => {
  return (
    <section id="about">
      <p className="text-3xl underline ml-8">About me :)</p>
      <div className="flex justify-center p-5 my-4 gap-4">
        <div className="w-1/2">
          <div className="flex">
            <div className="w-40 h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-start items-center">
              <VueImg className="" />
              <span>Vuejs</span>
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-start items-center">
              <NodeImg />
              <span className="ml-2">Nodejs</span>
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-start items-center">
              <TailImg />
              <span className="ml-2">TailwindCSS</span>
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-start items-center">
              <ReactImg />
              <span>Reactjs</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-start items-center">
              <VueImg className="" />
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-start items-center">
              <NodeImg />
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-start items-center">
              <TailImg />
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-start items-center">
              <ReactImg />
            </div>
          </div>
          <div className="flex">
            <div className="animate-pulse w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-center items-center">
              {/* <VueImg className="" /> */}
            </div>
            <div className="animate-pulse w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-center items-center">
              {/* <NodeImg /> */}
            </div>
            <div className="animate-pulse w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-center items-center">
              {/* <TailImg /> */}
            </div>
            <div className="animate-pulse w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-300 flex justify-center items-center">
              {/* <ReactImg /> */}
            </div>
          </div>
        </div>
        <div className="w-1/3 flex items-center">
          <p className="text-lg">
            Hi, I am Yashdeep Patwa, Undergrad 3rd year student from Jawaharlal
            Nehru University. My main interest lies in Full-stack development
            and software development. I am a highly enthusiastic, hardworking,
            and honest person, I am looking for better work experience and a
            platform with highly talented technical people. Flexible in learning new technologies and building
            applications with Innovative Ideas and design.
          </p>
        </div>
      </div>
      <div className="block bg-[#d8f3dc] p-4 m-3 text-black font-bold">
        <div>
          <span className=" text-black-400">Fluent In -</span>
          <span className="m-3 underline decoration-blue-500">Reactjs</span>
          <span className="m-3 underline decoration-blue-500">Vuejs</span>
          <span className="m-3 underline decoration-blue-500">Svelte</span>
          <span className="m-3 underline decoration-blue-500">Typescript</span>
          <span className="m-3 underline decoration-blue-500">Redux</span>
          <span className="m-3 underline decoration-blue-500">Redux Saga</span>
          <span className="m-3 underline decoration-blue-500">TailwindCss</span>
          <span className="m-3 underline decoration-blue-500">Bootstrap</span>
          <span className="m-3 underline decoration-blue-500">Nodejs</span>
          <span className="m-3 underline decoration-blue-500">Expressjs</span>
          <span className="m-3 underline decoration-blue-500">MongoDb</span>
          <span className="m-3 underline decoration-blue-500">Docker</span>
        </div>
        <div>
          <span className="text-black-400">Novice -</span>
          <span className="m-3 underline decoration-indigo-500">Socketjs</span>
          <span className="m-3 underline decoration-indigo-500">Redis</span>
          <span className="m-3 underline decoration-indigo-500">
            Kubernetes
          </span>
        </div>
      </div>
    </section>
  );
};
