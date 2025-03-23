import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 shadow-md">
      <Image
        src="https://picsum.photos/400"
        alt="Joshua Brigati"
        width={64}
        height={64}
        className="rounded-full border-2 border-gray-600"
      />
      <div>
        <h1 className="text-2xl font-bold text-gray-200">Joshua Brigati</h1>
        <p className="text-gray-400 text-sm">
          I am passionate about building beautiful and functional user interfaces. Currently work at TFL on the Station team.
        </p>
      </div> 
    </div>
  );
}