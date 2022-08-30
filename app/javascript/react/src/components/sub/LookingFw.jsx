import * as React from "react";
import { BsHeart } from "react-icons/all";
import { format } from "date-fns";
import { MARRIAGE_DATE } from "../../utils/config";
import { useTranslation } from "react-i18next";
import { lookingfw } from "../../../../assets";

export default function LookingFw(){
  const { t } = useTranslation();
  return(
    <section id="looking-fw">
      <div className="py-24 bg-cover bg-scroll md:bg-fixed bg-no-repeat bg-center" style={{ backgroundImage: `url(${lookingfw})`}}>
        <div className="container px-8 lg:px-16">
          <div className="text-center text-white">
            <div className="inline-block">
              <BsHeart color="#fff" size="30px"/>
            </div>
            <h4 className="font-alex text-6xl mb-4">{t("Looking forward to see you!")}</h4>
            <h3 className="font-nunito-sans text-5xl leading-[1em]">
              {format(MARRIAGE_DATE, "dd.MM.yyyy")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}