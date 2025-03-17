import { socialMenus } from "@/app/lib/constants";
import Link from "next/link";
import "./Social.scss";

export default function Social() {
  return (
    <ul className="social-handles">
      {socialMenus.map((socialMenu, index) => {
        return (
          <li key={socialMenu?.id || index} className="handle">
            <Link href={socialMenu?.link || "#"} target="_blank">{socialMenu?.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
}