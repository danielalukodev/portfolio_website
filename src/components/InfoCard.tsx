// TODO: maybe move this into its own component
interface InfoCardProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
}

export default function InfoCard({ title, subtitle, badge, children }: InfoCardProps) {
  return (
    <div className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl p-5">
      <div className="flex justify-between items-start gap-2">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          {subtitle && (
            <p className="text-sm text-gray-400 mt-0.5">{subtitle}</p>
          )}
        </div>
        {badge && (
          <span className="text-xs px-2 py-1 rounded-full bg-[#2a2a2c] text-gray-300 whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>
      {children && <div className="mt-3 text-sm text-gray-300">{children}</div>}
    </div>
  );
}
