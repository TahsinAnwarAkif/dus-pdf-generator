export const STORE = new Map();
export const GITHUB_HTML_URL_PREFIX = 'https://github.com/';
export const GITHUB_API_URL_PREFIX = 'https://api.github.com/';
export const GITHUB_API_REPO_FINDER_URL = GITHUB_API_URL_PREFIX + 'repos/#REPO_FULL_NAME#';
export const GITHUB_API_REPO_EMPTY_CHECKER_URL = GITHUB_API_REPO_FINDER_URL + "/stats/contributors";
export const GITHUB_API_USER_FINDER_URL = GITHUB_API_URL_PREFIX + 'users/#USER_LOGIN#';
export const GITHUB_API_REPO_FINDER_BY_KEYWORD_URL = GITHUB_API_URL_PREFIX 
  + 'search/repositories?q=#MATCHING_KEYWORD#+created:#START_FROM#..#START_TO#&sort=created&order=desc';
export const GITHUB_API_README_CONTENT_FROM_REPO_URL = 'https://raw.githubusercontent.com/#REPO_FULL_NAME#/#DEFAULT_BRANCH#/README.md';
export const GITHUB_API_RATE_LIMIT_CHECKER_URL = 'https://api.github.com/rate_limit';
export const REPO_FINDER_FROM_DAYS_COUNT = 60;
export const DAYS_IN_WEEK = 7;
export const KEYWORD_LEVELS = ["l1", "l2", "l3"];
export const CRAWLER_TASK = "CRAWLER_TASK";
export const CRAWLER_SCHEDULER_TIME_PATTERN = "0 0 0 * * 0";
