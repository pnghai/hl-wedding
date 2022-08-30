import * as React from "react";
import { dots } from "../../../../assets";
import { format } from "date-fns";
import { Container, SmallTitle, StoryP, Subtitle } from "../../utils/styles";
import { Trans, useTranslation } from "react-i18next";
import { MARRIAGE_DATE } from "../../utils/config";

export default function Story(){
  const { t } = useTranslation();
  return(
    <section id="story" className=" py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="relative md:mb-8">
              <div className="z-0 w-[90%] absolute top-[-18%] bottom-[-25%] left-0 bg-repeat" style={{ backgroundImage: `url(${dots})`}}/>
              <div className="pb-7 pr-7 pl-4 relative">
                <div className="z-10 absolute top-8 right-0 left-11 bottom-0 border-8 border-twine border-solid"/>
                <img src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/story.jpg" className="relative z-20 max-w-full"/>
              </div>
              <div className="z-30 w-[30%] h-[120px] absolute top-[15px] right-[45px] bg-cover bg-no-repeat bg-center animate-[spin_12s_infinite_linear]" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/wedding-logo.png)` }} />
            </div>
          </div>
          <div className="md:col-span-7">
            <SmallTitle>{t("Our love.")}</SmallTitle>
            <Subtitle>{t("Our Story")}</Subtitle>
            <StoryP>{t("story_1")}</StoryP>
            <StoryP>{t("story_2")}</StoryP>
            <StoryP>{t("story_3")}</StoryP>
            <h4 className="font-garamond mb-5 font-medium text-2xl leading-5">
              <Trans i18nKey="said_yes">
                {{ time: format(MARRIAGE_DATE, t("date_format_3")) }}, We Said Yes!
              </Trans>{t("")}</h4>
            <StoryP>{t("story_4")}</StoryP>
          </div>
        </div>
      </Container>
    </section>
  )
}