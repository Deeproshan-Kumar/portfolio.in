import "./SectionIntro.scss";

interface SectionIntroProps {
  title: string;
  description: string;
}

export default function SectionIntro({
  title,
  description,
}: SectionIntroProps) {
  return (
    <div className="section-intro">
      <h2 className="title">
        <span>{title}</span>
      </h2>
      <p className="description">{description}</p>
    </div>
  );
}