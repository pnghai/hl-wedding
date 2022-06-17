import * as React from "react";
import { olive } from "../../../../assets";

export default function Footer() {
  return (
    <footer className="bg-hint-of-red py-24">
      <img src={olive} alt="wedding symbol" className="h-8 mb-2.5 mx-auto" />
      <div className="text-center">
        <span className="font-alex text-3xl font-medium">Mỹ Linh <small
          className="text-[80%]">&</small> Nguyễn Hải</span>
        <p className="text-slate-400 font-garamond text-lg mb-5 italic">© 2022 HCMC. All Rights Reserved.</p>
      </div>
    </footer>
  );
}