import { Avatar, Link, Text } from "@ui5/webcomponents-react";
import classes from "./Contact.module.css";
import xLogo from "../assets/x-logo-black.png";
import githubLogo from "../assets/github-mark.png";
import linkedInLogo from "../assets/LinkedIn-logo.png";

interface ContactProps {
  name: string;
  mail: string;
  githubProfile: string;
  xProfile: string;
  linkedInProfile?: string;
}

export function Contact(props: ContactProps) {
  const { name, mail, xProfile, githubProfile, linkedInProfile } = props;
  return (
    <div className={classes.contactCard}>
      <Avatar style={{ gridArea: "avatar", placeSelf: "center" }}>
        <img
          src={`https://github.com/${githubProfile}.png`}
          alt={`Avatar of ${name}`}
        />
      </Avatar>
      <Text style={{ gridArea: "name" }}>{name}</Text>
      <Link style={{ gridArea: "mail" }} href={`mailto:${mail}`}>
        {mail}
      </Link>
      <div style={{ gridArea: "socialLinks", display: "flex", gap: "1rem" }}>
        <Link href={`https://github.com/${githubProfile}`}>
          <img src={githubLogo} alt={"GitHub Logo"} height={16} />
        </Link>
        <Link href={`https://x.com/${xProfile}`}>
          <img src={xLogo} alt={"X Logo"} height={16} />
        </Link>
        {linkedInProfile && (
          <Link href={linkedInProfile}>
            <img src={linkedInLogo} alt={"LinkedIn Logo"} height={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
