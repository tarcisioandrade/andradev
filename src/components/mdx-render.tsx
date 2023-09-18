import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Warning from "./ui-post/warning";
import Code from "./ui-post/code";
import { MDXComponents } from "mdx/types";
import Highlight from "./ui-post/highlight";
import Image from "next/image";

type Props = {
  code: string;
};

const mdxComponents: MDXComponents = {
  p: ({ children }) => (
    <p className="mb-6 leading-relaxed post-paragraph">{children}</p>
  ),
  Warning: ({ children }) => <Warning>{children}</Warning>,
  code: (props) => {
    const classNames = props.className?.split("-") || [];
    return (
      <Code
        code={props.children!.toString().trim()}
        language={classNames[1]}
        filename={classNames[2]}
      />
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="text-slate-500 my-12 px-8 post-blockquote relative w-fit">
      {children}
    </blockquote>
  ),
  h1: ({ children, id }) => (
    <h2
      id={id}
      className="mt-[96px] mb-[32px] font-bold text-3xl text-sky-700 dark:text-teal-500 scroll-mt-20"
    >
      {children}
    </h2>
  ),
  h2: ({ children, id }) => (
    <h3
      id={id}
      className="mt-[64px] mb-[12px] font-bold text-2xl text-gray-800 dark:text-gray-200 scroll-mt-20"
    >
      {children}
    </h3>
  ),
  Mark: ({ children }) => <Highlight>{children}</Highlight>,
  ol: ({ children }) => <ol className="list-decimal list">{children}</ol>,
  ul: ({ children }) => <ul className="list-disc list">{children}</ul>,
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-blue-500 hover:underline underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  img: ({ src, alt = "Image" }) => {
    if (!src) return null;
    return <Image src={src} alt={alt} width={750} height={430} />;
  },
};

const MDXRender = ({ code }: Props) => {
  const Content = useMDXComponent(code);

  return <Content components={mdxComponents} />;
};

export default MDXRender;
