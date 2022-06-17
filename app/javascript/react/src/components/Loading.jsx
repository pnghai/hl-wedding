import {BsFillHeartFill} from "react-icons/bs";
import * as React from "react";

export default function Loading() {
  return (
    <div className="w-full h-full bg-white flex fixed top-0 left-0 items-center justify-center">
      <BsFillHeartFill color="#BD945A" size="50px"/>
    </div>
  );
}