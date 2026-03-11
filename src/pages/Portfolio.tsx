import ProfileSection from "../components/sections/ProfileSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "../components/sections/SkillsSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0f0f10] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Portfolio Dashboard</h1>

        {/* TODO: improve spacing later */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <ProfileSection />
            <ExperienceSection />
            <SkillsSection />
          </div>
          <div className="space-y-6">
            {/* Right column - sections go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
