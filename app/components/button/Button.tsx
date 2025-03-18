import Link from "next/link";
import { ReactNode } from "react";
import "./Button.scss";

interface ButtonProps {
  text?: string;
  link?: string | { pathname: string; query?: { [key: string]: string | string[] } };
  icon?: ReactNode;
  isExternal?: boolean;
  isButton: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const {
    isButton,
    text,
    link,
    icon,
    isExternal,
    className = "",
    onClick,
  } = props;

  return isButton ? (
    <button className={`button ${className}`} onClick={onClick}>
      <span>
        {icon}
        {text}
      </span>
    </button>
  ) : (
    <Link
      href={link!}
      target={isExternal ? "_blank" : ""}
      className={`button ${className}`}
    >
      <span>
        {icon}
        {text}
      </span>
    </Link>
  );
}