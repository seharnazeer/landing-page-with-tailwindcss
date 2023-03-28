import React from "react";
import CarImage from "../assets/car-image.png";
const HeroSection = () => {
  return (
    <div className=" lg:h-screen flex xl:h-screen h-full lg:flex-row xl:flex-row flex-col bg-slate-400">
      <div className="basis-1/3 flex justify-center flex-col p-10 md:p-10 lg:pl-5 xl:pl-5 ">
        <p className="text-5xl font-extrabold pb-4">We Provide Quality</p>
        <p className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          alias. Animi ad alias, odio expedita fuga inventore deserunt sint
          facere.
        </p>
        <button className="text-black bg-slate-600 rounded-full p-4 w-40 flex">
          Read More
          <span className="pl-2 animate-pulse text-slate-400 font-extrabold text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 drop-shadow-2xl"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="basis-1/2 ">
        <img src={CarImage} />
      </div>
      <div className="basis-1/4 flex flex-col justify-center p-5 drop-shadow-2xl ">
        <div className="flex justify-center p-4 rounded-3xl bg-slate-300 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-black mr-4"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>

          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex justify-center p-4 rounded-3xl bg-slate-300 mb-5 drop-shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-black mr-4"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>

          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex justify-center p-4 rounded-3xl bg-slate-300 mb-5 drop-shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-black mr-4"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>

          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
