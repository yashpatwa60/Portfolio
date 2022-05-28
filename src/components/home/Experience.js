import React, { useState } from "react";
import RightArrow from "../../assets/img/right-arrow.png";

export const Experience = () => {
  const [index, setIndex] = useState(0);

  const handleIndex = (index) => {
    setIndex(index);
  };

  return (
    <section id="experience">
      <p className="text-3xl underline ml-8">Experience</p>
      <div className="flex gap-10 border border-gray-300 p-4 my-10 mx-4">
        <div className="space-y-3">
          <p
            onClick={() => handleIndex(0)}
            className="underline p-2 bg-gray-200 rounded-lg cursor-pointer text-xl"
          >
            MIDAS@IIITD
          </p>
          <p
            onClick={() => handleIndex(1)}
            className="underline p-2 bg-gray-200 rounded-lg cursor-pointer text-xl"
          >
            @UpSkool
          </p>
          <p
            onClick={() => handleIndex(2)}
            className="underline p-2 bg-gray-200 rounded-lg cursor-pointer text-xl"
          >
            @HackJnu 2.0
          </p>
        </div>
        {0 === index && (
          <>
            <div className="border-dashed hover:border-2 border-red-500 p-3">
              <p className="text-3xl">
                Research Intern
                <span className="text-red-600 ml-2">
                  <a target="_blank" href="https://midas.iiitd.edu.in/">
                    MIDAS@IIITD
                  </a>
                </span>
              </p>
              <p className="p-2 inline-block rounded-lg bg-gray-200 border border-gray-200">
                February 2022 - March 2022
              </p>
              <ul className="my-3">
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />A hiring
                  platform where you can create tests, give tests, proctor
                  tests, assign tests, delete tests, Remodelled the entire user
                  interface with tailwindcss from scratch.
                </li>
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />
                  Added user form, Google Auth2.0 and JWT authentication.
                </li>
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />
                  Integrated MIDAS Code Editor in PARIKSHA with an improved user
                  interface.
                </li>
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />
                  Closely worked on question creator tool and Added features
                  like Random shuffling, filtering, and navigation
                </li>
              </ul>
            </div>
          </>
        )}
        {1 === index && (
          <>
            <div className="border-dashed hover:border-2 border-red-500 p-3">
              <p className="text-3xl">
                Frontend developer
                <span className="text-red-600 ml-2">
                  <a target="_black" href="https://manage.up-skool.com/">
                    @ UpSkool
                  </a>
                </span>
              </p>
              <p className="p-2 inline-block  bg-gray-200 border border-gray-200">
                November 2021 - February 2022
              </p>
              <ul className="my-3">
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />
                  E-learning website for students of I-X grade, more than
                  40,000+ questions are formed till now.
                </li>
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />
                  Closely worked on the question editor tool and released 10+
                  features.
                </li>
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />
                  Made Our Own style editor and remodeled the user interface.
                </li>
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />
                  Fully customizable feature for charts, drag box, Venn diagram,
                  thermometer, Ruler etc.
                </li>
              </ul>
            </div>
          </>
        )}
        {2 === index && (
          <>
            <div className="border-dashed hover:border-2 border-red-500 p-3">
              <p className="text-3xl">
                Frontend developer
                <span className="text-red-600 ml-2">
                  <a target="_blank" href="https://hackjnu.ml/">
                    @ HackJnu 2.0
                  </a>
                </span>
              </p>
              <p className="p-2 inline-block bg-gray-200 border border-gray-200">
                July 2019 - September 2020
              </p>
              <ul className="my-3">
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />A virtual
                  24-hours Hackathon website with 300+ participants.
                </li>
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />
                  Developed a major section of the user interfaces from scratch.
                </li>
                <li className="flex gap-2 items-center">
                  <img className="h-10 w-10" src={RightArrow} alt="" />
                  Integrated some popular javascript libraries like partical.js
                  and tilt.js.
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
