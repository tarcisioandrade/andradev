import React from "react";
import Code from "./ui-post/code";
import Warning from "./ui-post/warning";
import { cn } from "@/utils/cn";
import { Link as LinkIcon } from "lucide-react";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

type Props = {
  code: string;
};

const mdxComponents: MDXComponents = {
  Exlink: ({ children, href }) => {
    return (
      <Link
        className="text-lg text-blue-500 underline-offset-4 hover:underline"
        href={href!}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </Link>
    );
  },
  Image: ({ alt = "Image", src }) => (
    <Image alt={alt} className="my-12" height={750} src={src!} width={1060} />
  ),
  Video: ({ src, ...props }) => {
    const srcWithDomain = `${process.env.DOMAIN_URL}` + src;

    return (
      <div className="mx-auto mb-16 mt-9">
        <video
          autoPlay
          loop
          playsInline
          src={srcWithDomain}
          {...props}
          suppressHydrationWarning
        />
      </div>
    );
  },
  Warning: ({ children }) => <Warning>{children}</Warning>,
  a: ({ children, href }) => (
    <a
      className="text-blue-500 underline-offset-4 hover:underline"
      href={href!}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-12 border-l-4 border-l-slate-500 px-4 text-slate-500">
      {children}
    </blockquote>
  ),
  code: (props) => {
    const classNames = props.className?.split("-") || [];
    return (
      <Code
        code={props.children!.toString().trim()}
        filename={classNames[2]}
        language={classNames[1]}
      />
    );
  },
  h1: ({ children, id }) => (
    <h2
      className="group mb-[32px] mt-[96px] scroll-mt-12 text-3xl font-bold text-blue-600 dark:text-amber-500 xl:scroll-mt-20"
      id={id}
    >
      {children}
    </h2>
  ),
  h2: ({ children, id }) => (
    <h3
      className="group mb-[12px] mt-[64px] scroll-mt-12 text-2xl font-bold text-gray-800 dark:text-gray-200 xl:scroll-mt-20"
      id={id}
    >
      {children}
    </h3>
  ),
  ol: ({ children }) => <ol className="list list-decimal">{children}</ol>,
  p: ({ children }) => (
    <p className="post-paragraph mb-6 leading-relaxed">{children}</p>
  ),
  span: ({ className }) => (
    <span
      className={cn(className, "ml-2 hidden h-6 w-6 group-hover:inline-block")}
    >
      <span className="sr-only">Heading Link</span>
      <LinkIcon className="text-blue-500 dark:text-amber-500" />
    </span>
  ),
  ul: ({ children }) => <ul className="list list-disc">{children}</ul>,
};

const MDXRender = ({ code }: Props) => {
  const Content = useMDXComponent(code);

  return <Content components={mdxComponents} />;
};

export default MDXRender;
