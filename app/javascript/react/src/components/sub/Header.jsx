import * as React from "react";
import { couple, rings } from "../../../../assets";
import { GiClover } from "react-icons/all";

export default function Header(){
  return (
    <header id="home" className="relative min-h-screen overflow-hidden flex items-center bg-[length:180%] bg-30%-center lg:bg-cover bg-no-repeat lg:bg-center" style={{ backgroundImage: `url(${couple})`}}>
      <div className="md:hidden container px-8 lg:px-16 mt-64 pt-32">
        <h1 className="font-alex text-4xl md:text-8xl text-twine-700 mx-auto text-center">
          Mỹ Linh
          <img src={rings} className="block mx-auto w-5 md:inline md:mx-5"/>
          Nguyễn Hải
        </h1>
      </div>
    </header>
  )
}