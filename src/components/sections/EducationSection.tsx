import InfoCard from "../InfoCard";

const education = [
  {
    title: "High School",
    subtitle: "London UK",
    badge: "2019",
  },
  {
    title: "Diploma",
    subtitle: "Web Development",
    badge: "2021",
  },
];

export default function EducationSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-white">Education</h2>
      {education.map((edu) => (
        <InfoCard
          key={edu.title}
          title={edu.title}
          subtitle={edu.subtitle}
          badge={edu.badge}
        />
      ))}
    </div>
  );
}
