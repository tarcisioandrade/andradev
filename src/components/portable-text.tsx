import React, { ReactElement } from "react";
import Image from "next/image";
import Code from "./ui-post/code";
import { PortableText as Portable } from "@portabletext/react";
import Highlight from "./ui-post/highlight";
import Warning from "./ui-post/warning";

type Props = {
  content: {
    [key: string]: any;
  };
};

const portableCodeComponent = {
  types: {
    code: (props: any) => (
      <Code
        code={props.value.code}
        language={props.value.language}
        filename={props.value.filename}
      />
    ),
  },
  marks: {
    highlight: (props: any) => <Highlight>{props.text}</Highlight>,
    warning: (props: any) => {
      // console.log("props", props);

      return <Warning>{props.text}</Warning>;
    },
  },
  list: {
    number: (props: any) => {
      return <ol className="pl-8 mb-9">{props.children}</ol>;
    },
  },
  listItem: {
    number: (props: any) => {
      return (
        <li className="list-decimal mb-4 pl-2 post-li">{props.children}</li>
      );
    },
  },
  block: {
    normal: (props: any) => (
      <p className="mb-6 leading-relaxed post-paragraph">{props.children}</p>
    ),
    h2: (props: any) => (
      <h2 className="mt-[96px] mb-[32px] font-bold text-3xl text-teal-500">
        {props.children}
      </h2>
    ),
    blockquote: (props: any) => (
      <blockquote className="text-slate-500 my-12 px-8 post-blockquote relative w-fit">
        {props.children}
      </blockquote>
    ),
  },
};

const PortableText = ({ content }: Props) => {
  return <Portable value={content} components={portableCodeComponent} />;
};

export default PortableText;
