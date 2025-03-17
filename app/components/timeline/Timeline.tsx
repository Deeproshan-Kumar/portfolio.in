import "./Timeline.scss";

interface TimelineProps {
  title: string;
  subtitle: string;
  description?: string;
  datetime?: string;
}

export default function Timeline({
  title,
  subtitle,
  description,
  datetime,
}: TimelineProps) {
  return (
    <article className="card">
      <div className="inner">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <p>{description}</p>
        </div>
        <div>
          <p>
            <em>{datetime}</em>
          </p>
        </div>
      </div>
    </article>
  );
}