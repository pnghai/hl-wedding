import * as React from "react";
import { BsHeart, TbBrandInstagram, TbBrandTwitter, TiSocialFacebook } from "react-icons/all";
import { A, A2, Avatar, Container, SocialLink } from "../../utils/styles";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { MARRIAGE_DATE } from "../../utils/config";
import { bride, groom } from "../../../../assets";
export default function Couples(){
  const { t, ready } = useTranslation();
  return(
    <section className="bg-hint-of-red py-24" id="couple">
      <Container>
        <div className="grid gap-8 grid-cols-1 md:gap-4 md:grid-cols-2 mb-16">
          <div className="p-8 bg-white flex flex-col xl:flex-row-reverse">
            <div>
              <Avatar className="mb-8 xl:mb-0 xl:ml-6">
                <img src={bride} alt="bride"/>
              </Avatar>
            </div>
            <div className="text-center xl:text-right">
              <div className="mb-3 text-2xl font-garamond flex items-center justify-center xl:justify-end">
                Đào Mỹ Linh
                <span className="ml-2"><BsHeart color="#BD945A" size="16px"/></span>
              </div>
              {/*<span className="font-alex text-2xl text-twine mt-1 mb-3">{t("Eldest Daughter")}</span>*/}
              <p>{t("couple_1")}</p>
              {/*<div className="mt-4">*/}
              {/*  <SocialLink href="https://www.facebook.com/akuma.san.12" className="mr-2"> <TiSocialFacebook size="18px"/> </SocialLink>*/}
              {/*  <SocialLink href="https://www.instagram.com/daomylinh.kt"> <TbBrandInstagram size="18px"/> </SocialLink>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="p-8 bg-white flex flex-col xl:flex-row">
            <div>
              <Avatar className="mb-8 xl:mb-0 xl:mr-6">
                <img src={groom} alt="groom"/>
              </Avatar>
            </div>
            <div className="text-center xl:text-left">
              <div className="mb-3 text-2xl font-garamond flex items-center justify-center xl:justify-start">
                <span className="mr-2"><BsHeart color="#BD945A" size="16px"/></span>
                <A2 href="https://www.linkedin.com/in/pnghai" target="_blank">Phan Nguyễn Hải</A2>
              </div>
              {/*<span className="font-alex text-2xl text-twine mt-1 mb-3">{t("Eldest Son")}</span>*/}
              <p>{t("couple_2")}</p>
              {/*<div className="mt-4">*/}
              {/*  <SocialLink href="https://www.facebook.com/phnghai" className="mr-2"> <TiSocialFacebook size="18px"/> </SocialLink>*/}
              {/*  <SocialLink href="http://twitter.com/pnghai" className="mr-2"> <TbBrandTwitter size="18px"/> </SocialLink>*/}
              {/*  <SocialLink href="https://www.instagram.com/pnghai"> <TbBrandInstagram size="18px"/> </SocialLink>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-twine text-6xl font-alex">
            {t("Are getting married!")}
          </h3>
          <h4 className="text-lg font-garamond">
            {ready && format(MARRIAGE_DATE, t('MMMM d, yyyy'))} — {t("D10, HCMC")}
          </h4>
        </div>
      </Container>
    </section>
  )
}