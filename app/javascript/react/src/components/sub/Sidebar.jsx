import * as React from "react";
import { olive } from "../../../../assets";
import { format } from "date-fns";
import { MARRIAGE_DATE } from "../../utils/config";
import Menu from "./Menu";
import { A2, Aside } from "../../utils/styles";
import LangSelector from "./LangSelector";
import { useTranslation } from "react-i18next";

export default function Sidebar({ className }){
  const { t, ready } = useTranslation();
  return(
    <Aside className={className}>
      <div>
        <div>
          <img src={olive} alt="wedding symbol" className="h-8 mx-auto"/>
        </div>
        <p className="font-alex text-twine text-2xl md:text-3xl leading-loose md:my-4">Mỹ Linh & Nguyễn Hải</p>
        <h6 className="font-nunito-sans text-xs tracking-[5px] mb-1.5">
          {ready && format(MARRIAGE_DATE, t('yyyy-MM-dd'))}
          <br/>
          {t("Lunar Date")}
        </h6>
      </div>
      <Menu/>
      <LangSelector/>
      <div className="mt-3 font-nunito-sans text-sm text-zinc-400 tracking-wider">
        <div className="w-16 h-px bg-[#bd945a66] w-16 mx-auto my-1.5"/>
        <small className="text-center">
          <A2 href="https://github.com/pnghai/hl-wedding" target="_blank">
            Hai & Linh Wedding
          </A2>
          <br/>2022, HCMC
        </small>
      </div>
    </Aside>
  )
}