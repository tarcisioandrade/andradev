import { ReadingTime } from "./reading-time";
import { Toc } from "./toc";
import { Post as PostContent } from "contentlayer/generated";

export interface Post extends PostContent {
  readingTime: ReadingTime;
  toc: Toc[];
}
