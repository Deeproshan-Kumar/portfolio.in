import "./Skill.scss";

interface SkillProps {
  icon: React.ReactNode;
  name: string;
  percentage: number;
}

export default function Skill({ icon, name, percentage }: SkillProps) {
  return (
    <div className="skill">
      <div className="icon-box">
        <div className="icon" title={name} data-percentage={percentage}>
          {icon}
        </div>
      </div>
    </div>
  );
}
