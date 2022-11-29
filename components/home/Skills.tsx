import React from "react";
import { skills } from "@/data/content/home";

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative mt-60">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        <p className="mb-5">I got the experience.</p>
        <p className="mb-5">My skills cover <span className="heroShiny1 text-fun-pink">wide</span> range of <span className="heroShiny1 text-fun-pink">JavaScript</span> technologies and frameworks.</p>
        <p>Here is my toolbelt for success.</p>
        <img
          className="sqD bottom-[-50px] left-[-50px] lg:bottom-0 lg:left-[-35px] z-[-10]"
          src="/static/doodles/skills/laptop.svg"
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[-40px]"
          src="/static/doodles/skills/youtube.svg"
        />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-8 sm:gap-4 md:gap-8 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} style={item.style} />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
