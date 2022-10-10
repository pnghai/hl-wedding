import * as React from "react";
import { useTranslation } from "react-i18next";
import { langChangedHandle } from "../../i18n";
import ReactCountryFlag from "react-country-flag/src";
import { countries } from "../../utils/config";

export default function LangSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = async ( value ) => {
    await i18n.changeLanguage(value, langChangedHandle);
  };
  // i18n.language
  return (
    <div className="mt-auto flex justify-center gap-4">
      {countries.map(({ lang, text, country }) => (
        <a key={lang} onClick={()=>changeLanguage(lang)} className={lang===i18n.language ? "cursor-pointer border-2 border-twine": "cursor-pointer"}>
          <ReactCountryFlag
            countryCode={country}
            style={{
              fontSize: "2em",
              lineHeight: "1em",
            }}
          />
        </a>
      ))}
    </div>
  );
}
