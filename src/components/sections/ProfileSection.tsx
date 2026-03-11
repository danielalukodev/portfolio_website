import AvatarCard from "../AvatarCard";
import SkillBadge from "../SkillBadge";

export default function ProfileSection() {
  const interests = ["Web Dev", "Learning", "Gaming", "Travel"];

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <AvatarCard />
        <div className="flex-1 space-y-4">
          <div className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl p-5">
            <h2 className="text-xl font-bold text-white mb-1">Daniel Aluko</h2>
            <p className="text-sm text-gray-400 mb-3">Web Developer</p>
            <p className="text-sm text-gray-300 italic">
              Web developer learning React and modern frontend tools. I
              enjoy building small projects and improving my JavaScript skills.
            </p>
          </div>
          <div className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl p-5">
            <h3 className="text-sm font-medium text-gray-400 mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <SkillBadge key={interest} label={interest} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
