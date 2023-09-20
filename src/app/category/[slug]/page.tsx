import { Metadata } from "next";
import React from "react";

type Props = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.slug.toUpperCase()} - Tarcisio Andrade`,
  };
};

const Page = ({ params }: Props) => {
  return <div>{params.slug}</div>;
};

export default Page;
