import { slugger } from "./src/utils/slugger";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeVideo from "rehype-video";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  computedFields: {
    readingTime: {
      resolve: (doc) => readingTime(doc.body.raw),
      type: "json",
    },
    toc: {
      resolve: async (doc) => {
        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;

        const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;

            return {
              level:
                flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
              slug: content ? slugger(content) : undefined,
              text: content,
            };
          },
        );

        return headings;
      },
      type: "json",
    },
    url: {
      resolve: (post) => `/${post._raw.flattenedPath}`,
      type: "string",
    },
  },
  contentType: "mdx",
  fields: {
    categories: {
      of: { type: "string" },
      required: true,
      type: "list",
    },
    description: {
      required: true,
      type: "string",
    },
    image: {
      required: true,
      type: "image",
    },
    isPublished: {
      default: true,
      type: "boolean",
    },
    publishedAt: {
      required: true,
      type: "date",
    },
    title: { required: true, type: "string" },
    updatedAt: {
      type: "date",
    },
  },
  filePathPattern: `**/**/*.{md,mdx}`,
  name: "Post",
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeVideo, { details: false }],
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
    remarkPlugins: [remarkGfm],
  },
});
