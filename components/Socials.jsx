import Link from "next/link";

import {
  RiYoutubeLine,
  RiTwitchLine,
  RiGithubLine,
  RiDiscordLine,
  RiTwitterXLine
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@slowsnakpierre",
    Icon: RiYoutubeLine,
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/devslowsnakpierre",
    Icon: RiTwitchLine,
  },
  {
    name: "Discord",
    link: "https://discord.gg/TDCan9U9UA",
    Icon: RiDiscordLine,
  },
  {
    name: "X",
    link: "https://twitter.com/slowsnakpi95886",
    Icon: RiTwitterXLine,
  },
  {
    name: "Github",
    link: "https://github.com/slowsnakpierre",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="items-center gap-x-5 text-lg hidden lg:flex">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${social.name === "Github"
            ? "bg-accent rounded-full p-[5px] hover:text-white"
            : "hover:text-accent"
            } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
