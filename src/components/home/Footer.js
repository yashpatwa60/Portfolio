import React from "react";
import {
  LinkedinImg,
  DiscordImg,
  GmailImg,
  FacebookImg,
  TwitterImg,
  InstaImg,
} from "../../assets/svg";
import heartImg from "../../assets/heart.svg"

import bgImg from "../../assets/img/more-leaves.png";
import patternImg from "../../assets/pattern1.svg"
import manImg from "../../assets/img/standing.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="h-96 w-full p-4"
    >
      <div className="flex justify-evenly">
        <div>
          <img
            style={{ height: "380px", width: "125px" }}
            src={manImg}
            alt=""
          />
        </div>
        <div className="my-12">
          <p className="text-2xl border-b-2 border-gray-700">
            Made with <div className="animate-bounce inline-block">❤️</div> by Yash | 2022{" "}
          </p>
          {/* <img className="" src={heartImg} alt="" /> */}
          <p className="text-lg my-3">
            login to know Tech stack used <br />
            in making this portfolio, Get Web dev <br />
            resources, Tips for web <br />
            development
          </p>
        </div>
        <div className="my-12">
          <div className="flex gap-4">
            <div className="space-y-4">
              <div className="flex w-10 h-10 justify-center items-center">
                <DiscordImg />
              </div>
              <div className="flex  w-10 h-10 justify-center items-center">
                <LinkedinImg />
              </div>
              <div className="flex  w-10 h-10 justify-center items-center">
                <FacebookImg />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex  w-10 h-10 justify-center items-center">
                <GmailImg />
              </div>
              <div className="flex  w-10 h-10 justify-center items-center">
                <InstaImg />
              </div>
              <div className="flex  w-10 h-10 justify-center items-center">
                <TwitterImg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
