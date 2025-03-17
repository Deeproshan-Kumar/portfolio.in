import Image from "next/image";
import Button from "../button/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Project.scss";

export interface ProjectProps {
  thumbnail: any;
  name: string;
  tags: string[];
  description: string;
  isLive: boolean;
  projectUrl: string;
}

export default function Project({
  thumbnail,
  name,
  tags,
  description,
  isLive,
  projectUrl,
}: ProjectProps) {
  return (
    <article className="project">
      <div className="inner">
        <div className="project-header">
          <Image src={thumbnail} alt={name} />
        </div>
        <div className="project-body">
          <h4>
            {name}
            {isLive ? <span className="status live">Live</span> : <span className="status personal">Personal</span>}
          </h4>
          <p className="tags">
          {tags}
          </p>
          <p>{description}</p>
          <Button
            text="Project Url"
            link={projectUrl}
            icon={<FaExternalLinkAlt />}
            isButton={false}
            isExternal={true}
          />
        </div>
      </div>
    </article>
  );
}
