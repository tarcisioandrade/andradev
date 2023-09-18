import React from "react";
import { AlertCircle } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

const Warning = ({ children }: Props) => {
  return (
    <div className="relative rounded mt-12 mb-16 py-6 px-2 xl:px-8 xl:ml-[-32px] border-l-4 border-l-teal-500 bg-blue-50 dark:bg-slate-800 [&>*:last-child]:mb-0">
      <AlertCircle
        fontSize={32}
        className="hidden xl:block absolute left-0 top-0 translate-y-[-50%] translate-x-[-50%] bg-white dark:bg-background rounded-full w-[48px] h-[48px] text-teal-500"
      />
      {children}
    </div>
  );
};

export default Warning;
