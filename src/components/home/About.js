import React from "react";
import { VueImg, ReactImg, TailImg, NodeImg, HtmlImg, MongodbImg, ReduxImg, PythonImg, SvelteImg, TypeScriptImg } from "../../assets/stacks.js";

export const About = () => {
  return (
    <section className="relative mt-40" id="about">
      <p className="text-3xl underline ml-8">About me :)</p>
      <div className="flex justify-center p-5 my-4 gap-4">
        <div className="w-1/2">
          <div className="flex">
            <div className="w-40 h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-start items-center">
              <VueImg className="" />
              <span>Vuejs</span>
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-start items-center">
              <ReactImg />
              <span>Reactjs</span>
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-start items-center">
              <NodeImg />
              <span className="ml-2">Nodejs</span>
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-start items-center">
              <TailImg />
              <span className="ml-2">TailwindCSS</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-start items-center">
              <HtmlImg className="" />
              <span className="ml-2">HTML</span>
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-start items-center">
              <MongodbImg />
              <span className="ml-2">MongoDB</span>
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-start items-center">
              <ReduxImg />
              <span className="ml-2">Redux</span>
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-start items-center">
              <PythonImg />
              <span className="ml-2">Python</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-center items-center">
              <SvelteImg className="" />
              <span className="ml-2">Svelte</span>
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-center items-center">
              <TypeScriptImg />
              <span className="ml-2">TypeScipt</span>
            </div>
            <div className=" w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-center items-center">
              {/* <TailImg /> */}
            </div>
            <div className="w-40  h-24 p-4 hover:scale-110 duration-500 bg-white border-2 border-gray-500 flex justify-center items-center">
              {/* <ReactImg /> */}
            </div>
          </div>
        </div>
        <div className="w-1/3 flex items-center">
          <p className="text-lg">
            Hello there! 👋 I'm Yashdeep Patwa, a full stack developer with a
            diverse background. I've had the privilege of working with several
            startups, including frontend and backend roles. During my journey,
            I've had the opportunity to create various projects, such as MVPs,
            hiring platforms, e-learning websites, and personal projects. I have
            Solved 220+ problems on{" "}
            <span className="underline decoration-sky-500">leetcode</span> and a
            total of 250+ problems on various coding platforms. I wanted to
            expand my knowledge in the computer science field, furthermore, I am
            enthusiastic about learning new technologies and working on
            real-life projects
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
