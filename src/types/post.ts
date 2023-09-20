import { Post as PostContent } from "contentlayer/generated";
import { Toc } from "./toc";
import { ReadingTime } from "./reading-time";

export interface Post extends PostContent {
  toc: Toc[];
  readingTime: ReadingTime;
}
