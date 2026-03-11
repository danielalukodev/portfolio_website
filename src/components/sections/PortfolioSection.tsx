import PortfolioLinkButton from "../PortfolioLinkButton";

const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function PortfolioSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-white">Portfolio</h2>
      <div className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl p-5">
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <PortfolioLinkButton
              key={link.label}
              label={link.label}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
