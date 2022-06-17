import * as React from "react";
import { olive } from "../../../../assets";
import { format } from "date-fns";
import { MARRIAGE_DATE } from "../../utils/config";
import Menu from "./Menu";
import { Aside } from "../../utils/styles";

export default function Sidebar({ className }){
  return(
    <Aside className={className}>
      <div>
        <div>
          <img src={olive} alt="wedding symbol" className="h-8 mx-auto"/>
        </div>
        <p className="font-alex text-twine text-2xl md:text-3xl leading-loose">Mỹ Linh & Nguyễn Hải</p>
        <h6 className="font-nunito-sans text-xs tracking-[5px] mb-1.5">
          {format(MARRIAGE_DATE, "dd.MM.yyyy 'DL'")}
          <br/>
          (20-10-2022 Â.L)
        </h6>
      </div>
      <Menu/>
      <div className="mt-auto font-nunito-sans text-sm text-zinc-400 tracking-wider">
        <div className="w-16 h-px bg-[#bd945a66] w-16 mx-auto my-1.5"/>
        <small className="text-center">
          Hai & Linh Wedding
          <br/>2022, HCMC
        </small>
      </div>
    </Aside>
  )
}