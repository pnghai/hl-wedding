import * as React from "react";
import { useContext } from "react";
import tw from "tailwind-styled-components";
import { useTranslation } from "react-i18next";

const Li = tw.li`my-1 pb-1`
const A = tw.a`font-garamond text-lg leading-loose  tracking-wider duration-300 transition-all ease-in-out border-b border-transparent hover:border-twine hover:duration-500`
import menuData from '../data/menu.json';
import { Context } from "../store";
export default function Menu(){
  const [_,dispatch] = useContext(Context);
  const { t } = useTranslation();
  return(
    <nav className="my-7 md:my-16">
      <ul>
        {menuData.menu.map(({ title, anchor, text }, id) => (
          <Li key={id}>
            <A href={anchor} onClick={(e)=>{
              const el = document.querySelector(anchor);
              dispatch({ type: 'TOGGLE_MENU', value: false });
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              e.preventDefault()
            }}>
              {t(text)}
            </A>
          </Li>
        ))}
      </ul>
    </nav>
  )
}