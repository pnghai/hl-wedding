import * as React from "react";
import Loading from "./Loading";
import MainView from "./sub/MainView";
import Sidebar from "./sub/Sidebar";
import { MainScreen, NavToggler } from "../utils/styles";
import { IoCloseOutline, IoMenuOutline } from "react-icons/all";
import { useContext, Suspense } from "react";
import { Context } from "./store";
import LangSelector from "./sub/LangSelector";
function Dashboard(){
  const [{ menuOpen }, dispatch] = useContext(Context);
  const toggleMenu = (e)=>{
    dispatch({ type: 'TOGGLE_MENU', value: !menuOpen});
    e.preventDefault();
  }
  return (
    <MainScreen>
      <Sidebar className={menuOpen ? `translate-x-0` :`-translate-x-[270px]`}/>
      <MainView className={ menuOpen ? `translate-x-[270px]` : `` }/>
      <NavToggler className={ menuOpen ? `translate-x-[270px]` : `` } href="#" onClick={toggleMenu}>
        {menuOpen ?
          <IoCloseOutline color="#fff" size="25px"/> : <IoMenuOutline color="#fff" size="25px"/>
        }
      </NavToggler>
      <div className="fixed top-0 right-0 my-3.5 mx-7 md:hidden">
        <LangSelector/>
      </div>
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