export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  dir: "ltr" | "rtl";
  lang: string;
  timezone: string;
};

export type SocialObjects = Array<{
  name: string;
  href: string;
  linkTitle: string;
  active: boolean;
}>;
