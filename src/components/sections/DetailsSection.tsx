import SkillBadge from "../SkillBadge";

const details = [
  { label: "23 years", icon: "👤" },
  { label: "example@gmail.com", icon: "✉️", href: "mailto:example@gmail.com" },
  { label: "+4477xxxxxxxxxx", icon: "📞" },
  { label: "danieldev.uk", icon: "🌐", href: "https://danieldev.uk" },
  { label: "United Kingdom", icon: "🇬🇧" },
];

export default function DetailsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-white">Details</h2>
      <div className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl p-5">
        <div className="flex flex-wrap gap-2">
          {details.map((detail) =>
            detail.href ? (
              <a
                key={detail.label}
                href={detail.href}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a2a2c] text-sm text-gray-200 hover:bg-[#333336] transition-colors"
              >
                {detail.icon && <span>{detail.icon}</span>}
                {detail.label}
              </a>
            ) : (
              <SkillBadge
                key={detail.label}
                label={detail.label}
                icon={detail.icon}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
