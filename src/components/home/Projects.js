import React from "react";
import { LinkImg } from "../../assets/svg";

const Projects = () => {
  return (
    <section id="projects">
      <p className="text-3xl underline ml-8">Projects</p>
      <div className="flex justify-center gap-10">
        <div className="h-80 w-72 shadow-md hover:shadow-lg transform hover:-translate-y-4 transition duration-200 border border-gray-300 p-5 space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-2xl ">Cardiocare</p>
            <a
              target="_blank"
              href="https://cardiocarediagnostics.herokuapp.com/"
            >
              <LinkImg />
            </a>
          </div>
          <div>
            ◆ A web application aimed at raising awareness about the risk of
            heart-related problems. This lets you predict the risk of a person
            getting heart disease in the future. ◆ Random Forest Classifier is
            used to predict the risk percentage of developing cardiovascular
            disease
          </div>
          <div className="p-3 border bg-gray-200 border-gray-200">
            Django Python Bootstrap
          </div>
        </div>
        <div className="h-96 w-72 shadow-md hover:shadow-lg transform -translate-y-5 hover:-translate-y-10 transition duration-300 p-5 border border-gray-300 space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-2xl hover:text-red-500">OKHI.in</p>
            <LinkImg />
          </div>
          <div>
            ◆ A single-page web application (SPA) with a powerful & modern
            dashboard that automates and creates a formal card in minutes, which
            is easily shareable. ◆ JWT authentication is used for Login and
            Signup and mongoDB to store users' data. ◆ Admin dashboard with
            registered users list, CRUD functionality, filter and search options
          </div>
          <div className="p-3 border bg-gray-200 border-gray-200 ">
            Mongodb Express Reactjs Nodejs
          </div>
        </div>
        <div className="h-80 w-72 shadow-md hover:shadow-lg transform hover:-translate-y-4 transition ease-in-out duration-300 border p-5 border-gray-300 space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-2xl hover:text-red-500">ChatBot</p>
            <a
              target="_blank"
              href="https://github.com/yashpatwa60/Tkinter-Bot"
            >
              <LinkImg />
            </a>
          </div>
          <div>
            ◆ A Smart bot integrated with the Tkinter application which reduces
            tasks with automation and provides important data as required. ◆ A
            lots of regular expressions are used to enhance interaction with a
            chatbot. ◆ Chat Bot talks with xlsx file and can answer multiple
            questions
          </div>
          <div className="p-3 border bg-gray-200 border-gray-200">
            Tkinter Python regex
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
