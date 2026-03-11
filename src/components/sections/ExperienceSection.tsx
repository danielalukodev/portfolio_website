import InfoCard from "../InfoCard";

const experiences = [
  {
    title: "Freelancer",
    subtitle: "Web Developer",
    badge: "2023 – Present",
    points: [
      "Built small websites for friends",
      "Practicing React and responsive layouts",
      "Learning how APIs work",
    ],
  },
  {
    title: "Intern Web Developer",
    subtitle: "Web Development",
    badge: "2022 – 2023",
    points: [
      "Helped fix simple UI bugs",
      "Worked with HTML and CSS",
      "Assisted senior developers",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-white">Experience</h2>
      {experiences.map((exp) => (
        <InfoCard
          key={exp.title}
          title={exp.title}
          subtitle={exp.subtitle}
          badge={exp.badge}
        >
          <ul className="list-disc list-inside space-y-1">
            {exp.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </InfoCard>
      ))}
    </div>
  );
}
