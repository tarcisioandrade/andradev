import React from "react";

type Props = {
  children: React.ReactNode;
};

const Warning = ({ children }: Props) => {
  return (
    <div className="relative mb-16 ml-[-16px] mr-[-16px] mt-12 rounded-lg border-l-4 border-l-blue-600 bg-slate-100 px-4 py-6 dark:bg-gray-800 xl:ml-[-32px] xl:mr-0 xl:px-8 [&>*:last-child]:mb-0">
      {children}
    </div>
  );
};

export default Warning;
