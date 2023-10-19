import React from "react";
import { Code as BrightCode } from "bright";

type Props = {
  code: string;
  filename?: string;
  language?: string;
};

BrightCode.theme = {
  dark: "material-palenight",
  light: "slack-ochin",
  lightSelector: "html.light",
};

const Code = ({ code, filename, language }: Props) => {
  return (
    <BrightCode
      className="xl:!ml-[-32px] [&>pre]:xl:!px-4"
      code={code}
      lang={language}
      style={{ margin: "48px 0 80px 0" }}
      title={filename}
    />
  );
};

export default Code;
