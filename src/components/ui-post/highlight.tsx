import React from "react";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <mark className="dark:bg-slate-800 bg-slate-100 text-black  dark:text-white rounded py-[4.5px] px-[6px]">
    {children}
  </mark>
);

export default Highlight;
