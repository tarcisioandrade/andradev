import GithubSlugger from "github-slugger";

const gitSlugger = new GithubSlugger();

export const slugger = (text: string) => {
  gitSlugger.reset();

  return gitSlugger.slug(text);
};
