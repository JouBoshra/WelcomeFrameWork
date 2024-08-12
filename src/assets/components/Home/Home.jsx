import React from "react";
import avataaars from "../img/avataaars.png";
import "./Home.css";
import { Minus } from "lucide-react";
import { Star } from "lucide-react";
export default function Home() {
  return (
    <>
      <main className="main h-screen flex align-middle flex-col justify-center text-center m-auto">
        <div className=" homeContent text-center align-middle justify-center">
          <div className=" w-full homeImg p-10 m-auto text-center">
            <img
              className="w-fit text-center m-auto"
              src={avataaars}
              alt="home-image"
            />
          </div>
          <h1 className="font-bold text-4xl">START FRAMEWORK</h1>
          <div className="lineHome flex flex-row items-center justify-center w-fit text-center m-auto">
            <Minus size={100} strokeWidth={1.75} />
            <Star size={50} strokeWidth={1.75} />
            <Minus size={100} strokeWidth={1.75} />
          </div>
          <p className="text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </main>
    </>
  );
}
