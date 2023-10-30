import React from "react";
import TocItem from "./toc-item";
import { Toc } from "@/types/toc";

type Props = {
  toc: Toc[];
};

const MenuToc = ({ toc }: Props) => {
  return (
    <aside className="text-dark dark:text-light sticky top-1 hidden max-h-[80vh] overflow-hidden overflow-y-auto rounded-lg xl:block">
      <details open>
        <summary className="text-md mt-[164px] cursor-pointer font-semibold uppercase tracking-widest">
          Tabela de Conteúdo
        </summary>
        <TocItem toc={toc} />
      </details>
    </aside>
  );
};

export default MenuToc;
