import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SOCIALS as SOCIALS_DATA } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

/** Normalized keys: github, linkedin, mail, x, … — add here when adding a row in `config.ts` → `SOCIALS`. */
const SOCIAL_ICONS: Record<string, (_props: Props) => Element> = {
  github: IconGitHub,
  linkedin: IconLinkedin,
  mail: IconMail,
  x: IconBrandX,
};

function socialIconForName(name: string): (_props: Props) => Element {
  const key = name.toLowerCase().replace(/[^a-z]/g, "");
  const icon = SOCIAL_ICONS[key];
  if (!icon) {
    throw new Error(
      `constants: no icon for social name "${name}". Add a \`SOCIALS\` row in config or map "${key}" in SOCIAL_ICONS.`,
    );
  }
  return icon;
}

export const SOCIALS: Social[] = SOCIALS_DATA.filter(s => s.active).map(s => ({
  name: s.name,
  href: s.href,
  linkTitle: s.linkTitle,
  icon: socialIconForName(s.name),
}));

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
