import React from "react";
import { Code as BrightCode } from "bright";

type Props = {
  code: string;
  language?: string;
  filename?: string;
};

BrightCode.theme = {
  dark: "material-palenight",
  light: "material-lighter",
};

const Code = ({ code, language, filename }: Props) => {
  return (
    <BrightCode
      code={code}
      title={filename}
      lang={language}
      style={{ margin: "48px 0 80px 0" }}
      className="[&>pre]:xl:!px-4 xl:!ml-[-32px]"
    />
  );
};

export default Code;
