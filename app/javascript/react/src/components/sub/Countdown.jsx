import * as React from "react";
import { MARRIAGE_DATE } from "../../utils/config";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (<p>Save the date</p>);
  } else {
    // Render a countdown
    return (
      <ul className="font-nunito-sans uppercase tracking-wider leading-[3em]">
        <li className="p-4 inline-block"><span id="days" className="block text-6xl tracking-tighter">{days}</span>Days</li>
        <li className="p-4 inline-block"><span id="hours" className="block text-6xl tracking-tighter">{hours}</span>Hours</li>
        <li className="p-4 inline-block "><span id="minutes" className="block text-6xl tracking-tighter">{minutes}</span>Minutes</li>
        <li className="p-4 inline-block"><span id="seconds" className="block text-6xl tracking-tighter">{seconds}</span>Seconds</li>
      </ul>
    );
  }
};

export default function Countdown(){
  return(
    <section id="count-down">
      <div className="py-24 bg-cover bg-no-repeat bg-scroll md:bg-fixed" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/banner-1.jpg)`}}>
        <div className="container px-8 lg:px-16">
          <div className="text-center text-white">
            <h4 className="font-alex text-6xl mb-4">We will become a family in</h4>
            <Countdown date={MARRIAGE_DATE} renderer={renderer}/>
          </div>
        </div>
      </div>
    </section>
  )
}