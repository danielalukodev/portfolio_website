interface PortfolioLinkButtonProps {
  label: string;
  href: string;
  icon?: string;
}

export default function PortfolioLinkButton({ label, href, icon }: PortfolioLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#2a2a2c] text-sm text-gray-200 hover:bg-[#333336] transition-colors border border-[#2a2a2c]"
    >
      {icon && <span>{icon}</span>}
      {label}
    </a>
  );
}
