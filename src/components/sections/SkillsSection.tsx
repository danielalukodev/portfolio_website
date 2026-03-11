import InfoCard from "../InfoCard";
import SkillBadge from "../SkillBadge";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
  {
    label: "Design",
    skills: ["Figma", "Photoshop"],
  },
];

export default function SkillsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-white">Skills</h2>
      {skillGroups.map((group) => (
        <div
          key={group.label}
          className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-3"
        >
          <span className="text-sm font-medium text-gray-400 min-w-[100px]">
            {group.label}
          </span>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
