"use client";
import React, { useState } from "react";
import Draggable from "react-draggable";
import Image from "next/image";

export default function Home() {
  const [logoSkew, setLogoSkew] = useState({
    x: 0,
    y: 0,
  });

  function handleLogoSkew(index: string) {
    if (index === "x+") {
      setLogoSkew((prev) => ({
        ...prev,
        x: prev.x + 1,
      }));
    } else if (index === "x-") {
      setLogoSkew((prev) => ({
        ...prev,
        x: prev.x - 1,
      }));
    } else if (index === "y+") {
      setLogoSkew((prev) => ({
        ...prev,
        y: prev.y + 1,
      }));
    } else {
      setLogoSkew((prev) => ({
        ...prev,
        y: prev.y - 1,
      }));
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg- justify-between py-20">
      <div className="relative bg-[url('/box.png')] bg-no-repeat bg-center bg-cover w-[500px] h-[500px] ">
        <Draggable bounds="parent">
          <div className="h-10 w-20">
            <p className="cursor-grab text-6xl whitespace-nowrap font-bold">
              DOTA 2
            </p>
          </div>
        </Draggable>
        <Draggable bounds="parent">
          <div className="w-32 h-32 bg-red-400 flex justify-center items-center relative z-20">
            <img
              className="cursor-grab w-full select-none relative z-10"
              style={{
                transform: `skewX(${logoSkew.x}deg) skewY(${logoSkew.y}deg)`,
              }}
              src={"/dota.png"}
              alt="dota 2"
            />
          </div>
        </Draggable>
      </div>
      

      <div className="w-[200px] h-[200px] flex justify-center flex-col items-center">
        <button
          onMouseDownCapture={() => handleLogoSkew("y+")}
          className="opacity-50 hover:opacity-100 transition-all"
        >
          <Image
            className="rotate-180"
            src={"/arrow.png"}
            alt="arrow"
            width={70}
            height={70}
          />
        </button>
        <div className="w-full  flex justify-between">
          <button
            onClick={() => handleLogoSkew("x-")}
            className="opacity-50 hover:opacity-100 transition-all"
          >
            <Image
              className="rotate-90"
              src={"/arrow.png"}
              alt="arrow"
              width={70}
              height={70}
            />
          </button>
          <button
            onClick={() => handleLogoSkew("x+")}
            className="opacity-50 hover:opacity-100 transition-all"
          >
            <Image
              className="-rotate-90"
              src={"/arrow.png"}
              alt="arrow"
              width={70}
              height={70}
            />
          </button>
        </div>
        <button
          onClick={() => handleLogoSkew("y-")}
          className="opacity-50 hover:opacity-100 transition-all"
        >
          <Image src={"/arrow.png"} alt="arrow" width={70} height={70} />
        </button>
      </div>
    </main>
  );
}
