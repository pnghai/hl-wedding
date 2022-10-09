import * as React from "react";
import { olive } from "../../../../assets";
import { useTranslation } from "react-i18next";
import { A, A2 } from "../../utils/styles";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-hint-of-red py-24">
      <img src={olive} alt="wedding symbol" className="h-8 mb-2.5 mx-auto" />
      <div className="text-center font-garamond">
        <p>
          <A2 href="https://github.com/pnghai/hl-wedding" target="_blank">{t("Developer")} <span className="font-alex">{t("husband")}</span></A2>
          <br/>
          {t("Content")} <span className="font-alex">{t("wife")}</span>
          <br/>
          {t("Designer")} <span className="font-alex">{t("together")}</span>
        </p>
        <p className="text-slate-400 font-garamond text-lg mb-5 italic">© 2022 {t("HCMC. All Rights Reserved.")}</p>
      </div>
    </footer>
  );
}