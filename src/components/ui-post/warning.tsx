import React from "react";
import { AlertCircle } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

const Warning = ({ children }: Props) => {
  return (
    <div className="relative rounded-lg mt-12 mb-16 py-6 px-4 xl:px-8 ml-[-16px] xl:ml-[-32px] mr-[-16px] xl:mr-0 border-l-4 border-l-blue-600 bg-slate-100 dark:bg-gray-800 [&>*:last-child]:mb-0">
      {children}
    </div>
  );
};

export default Warning;
