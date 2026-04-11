import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // 나중에 도메인을 연결하면 해당 주소로 변경하세요
  author: "Saususge",
  profile: "https://github.com/Saususge",
  desc: "게임 개발과 Low level Engineering을 좋아하는 Saususge의 기술 블로그입니다.",
  title: "Saususge",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/Saususge/vercel-blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "ko",
  timezone: "Asia/Seoul",
} as const;

export const LOCALE = {
  lang: "ko", // 한국어 날짜 형식을 위해 수정
  langTag: ["ko-KR"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Saususge",
    linkTitle: `Saususge on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/cwk95",
    linkTitle: `Saususge on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:saususge@gmail.com",
    linkTitle: `Send an email to Saususge`,
    active: true,
  },
];