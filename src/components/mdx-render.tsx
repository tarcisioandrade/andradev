import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Warning from "./ui-post/warning";
import Code from "./ui-post/code";
import { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
  ol: ({ children }) => <ol className="list-decimal list">{children}</ol>,
  ul: ({ children }) => <ul className="list-disc list">{children}</ul>,
  a: ({ children, href }) => (
    <Link
      href={href!}
      className="text-blue-500 hover:underline underline-offset-4"
    >
      {children}
    </Link>
  ),
  img: ({ src, alt = "Image" }) => {
    if (!src) return null;
    return <Image src={src} alt={alt} width={750} height={430} />;
  },
  Exlink: ({ children, href }) => {
    return (
      <Link
        href={href!}
        target="_blank"
        className="relative items-center gap-1 text-blue-500 text-lg hover:underline underline-offset-4"
      >
        {children}{" "}
        <ExternalLink
          size={12}
          className="text-current align-top inline-block ml-[-2px]"
        />
      </Link>
    );
  },
};

const MDXRender = ({ code }: Props) => {
  const Content = useMDXComponent(code);

  return <Content components={mdxComponents} />;
};

export default MDXRender;
