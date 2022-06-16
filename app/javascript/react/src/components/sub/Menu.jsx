import * as React from "react";
import tw from "tailwind-styled-components";
const Li = tw.li`my-1 pb-1`
const A = tw.a`font-garamond text-lg leading-loose  tracking-wider duration-300 transition-all ease-in-out border-b border-transparent hover:border-twine hover:duration-500`
import menuData from '../data/menu.json';
export default function Menu(){
  return(
    <nav className="my-16">
      <ul>
        {menuData.menu.map(({ title, anchor, text }, id) => (
          <Li key={id}>
            <A href={anchor} onClick={(e)=>{
              const el = document.querySelector(anchor);
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              e.preventDefault()
            }}>
              {text}
            </A>
          </Li>
        ))}
      </ul>
    </nav>
  )
}