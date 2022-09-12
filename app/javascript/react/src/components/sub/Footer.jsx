import * as React from "react";
import { olive } from "../../../../assets";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-hint-of-red py-24">
      <img src={olive} alt="wedding symbol" className="h-8 mb-2.5 mx-auto" />
      <div className="text-center">
        <p>
          Developer: bạn chồng <span className="font-alex font-medium">Phan Nguyễn Hải</span>
          <br/>
          Content: bạn vợ <span className="font-alex font-medium">"Nhân Mã luôn vui tươi" Đào Mỹ Linh</span>
          <br/>
          Designer: Hai đứa mình <small className="font-alex text-[80%]">&</small> 101 lần ỏm tỏi.
        </p>
        <p className="text-slate-400 font-garamond text-lg mb-5 italic">© 2022 {t("HCMC. All Rights Reserved.")}</p>
      </div>
    </footer>
  );
}