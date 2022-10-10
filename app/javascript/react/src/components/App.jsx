import * as React from "react";
import Loading from "./Loading";
import MainView from "./sub/MainView";
import Sidebar from "./sub/Sidebar";
import { MainScreen, NavToggler } from "../utils/styles";
import { IoCloseOutline, IoMenuOutline } from "react-icons/all";
import { useContext, Suspense } from "react";
import { Context } from "./store";
import LangSelector from "./sub/LangSelector";
import ReactCountryFlag from "react-country-flag/src";
import { useTranslation } from "react-i18next";
import { countriesMap } from "../utils/config";
function Dashboard(){
  const [{ menuOpen }, dispatch] = useContext(Context);
  const toggleMenu = (e)=>{
    dispatch({ type: 'TOGGLE_MENU', value: !menuOpen});
    e.preventDefault();
  }
  const { i18n } = useTranslation();
  return (
    <MainScreen>
      <Sidebar className={menuOpen ? `translate-x-0` :`-translate-x-[270px]`}/>
      <MainView className={ menuOpen ? `translate-x-[270px]` : `` }/>
      <NavToggler className={ menuOpen ? `translate-x-[270px]` : `` } href="#" onClick={toggleMenu}>
        {menuOpen ?
          <IoCloseOutline color="#fff" size="25px"/> :
          <ReactCountryFlag
            countryCode={countriesMap[i18n.language]}
            style={{
              fontSize: "1.8em",
              // lineHeight: "0.1em",
            }}
          />
          // <IoMenuOutline color="#fff" size="25px"/>
        }
      </NavToggler>
    </MainScreen>
  )
}

export default function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Dashboard/>
    </Suspense>
  )
}