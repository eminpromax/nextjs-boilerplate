import ProfileCard from "./components/ProfileCard";
import SocialLinks from "./components/SocialLinks";
// import TechStack from "./components/TechStack";
// import Experience from "./components/Experience";
// import LocationWidget from "./components/LocationWidget";
// import ResumeButton from "./components/ResumeButton";
// import CryptoTracker from "./components/CryptoTracker";
// import ProjectPreview from "./components/ProjectPreview";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-6">
          <ProfileCard />
          <SocialLinks />
          {/* <TechStack /> */}
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          {/* <Experience /> */}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* <LocationWidget />
          <ResumeButton />
          <CryptoTracker />
          <ProjectPreview /> */}
        </div>
      </main>
    </div>
  );
}