interface SkillBadgeProps {
  label: string;
  icon?: string;
}

export default function SkillBadge({ label, icon }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a2a2c] text-sm text-gray-200">
      {icon && <span className="text-base">{icon}</span>}
      {label}
    </span>
  );
}
