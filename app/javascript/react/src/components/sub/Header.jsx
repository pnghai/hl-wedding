import * as React from "react";
import { couple, rings } from "../../../../assets";
import { GiClover } from "react-icons/all";

export default function Header(){
  return (
    <header id="home" className="relative min-h-screen overflow-hidden flex items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${couple})`}}>
      <div className="container px-8 lg:px-16">
        <h1 className="font-alex text-8xl text-white mx-auto text-center">
          Mỹ Linh
          <img src={rings} className="inline w-10 mx-5"/>
          Nguyễn Hải
        </h1>
      </div>
      <div className="absolute bottom-12 left-1/2">
        <a href="#couple">
          <GiClover color="#4aa314" size="28px"/>
        </a>
      </div>
    </header>
  )
}