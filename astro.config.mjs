// @ts-check
import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const useProjectBase = process.env.GITHUB_ACTIONS === "true" && repoName.length > 0;

export default defineConfig({
  site: "https://guyronhuji.github.io",
  base: useProjectBase ? `/${repoName}` : "/",
});
