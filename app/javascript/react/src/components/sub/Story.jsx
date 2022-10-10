import * as React from "react";
import { dots, story } from "../../../../assets";
import { Container, SmallTitle, StoryP, StoryLi, Subtitle } from "../../utils/styles";
import { useTranslation } from "react-i18next";
import { wedding_logo } from "../../../../assets";
export default function Story(){
  const { t, ready } = useTranslation();
  return(
    <section id="story" className=" py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="relative md:mb-8">
              <div className="z-0 w-[90%] absolute top-[-18%] bottom-[-25%] left-0 bg-repeat" style={{ backgroundImage: `url(${dots})`}}/>
              <div className="pb-7 pr-7 pl-4 relative">
                <div className="z-10 absolute top-8 right-0 left-11 bottom-0 border-8 border-twine border-solid"/>
                <img src={story} className="relative z-20 max-w-full"/>
              </div>
              <div className="z-30 w-[120px] h-[120px] absolute top-[15px] right-[45px] bg-cover bg-no-repeat bg-center animate-[spin_12s_infinite_linear]" style={{ backgroundImage: `url(${wedding_logo})` }} />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SmallTitle>{t("Our love.")}</SmallTitle>
            <Subtitle>{t("Our Story")}</Subtitle>
            <ul className="list-disc list-inside mt-5">
              <StoryLi>{t("story_a")}</StoryLi>
              <StoryLi>{t("story_b")}</StoryLi>
              <StoryLi>{t("story_c")}</StoryLi>
            </ul>
            {/*<StoryP>{t("story_1")}</StoryP>*/}
            <StoryP>{t("story_2")}</StoryP>
            <StoryP>{t("story_3")}</StoryP>
            {/*<h4 className="font-garamond mb-5 font-medium text-2xl leading-5">*/}
            {/*  <Trans i18nKey="said_yes">*/}
            {/*    {{ time: ready ? format(MARRIAGE_DATE, t("MMM do, yyyy")) : "" }}, We Said Yes!*/}
            {/*  </Trans>*/}
            {/*</h4>*/}
            <StoryP>{t("story_4")}</StoryP>
            {/*<StoryP>{t("story_ps")}</StoryP>*/}
          </div>
        </div>
      </Container>
    </section>
  )
}