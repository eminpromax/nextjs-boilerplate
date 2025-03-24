export default function SocialLinks() {
    return (
      <div className="bg-gray-800 rounded-lg p-6 flex justify-center">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gray-400 opacity-80 hover:opacity-100 transition-opacity"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.872 0-2.159 1.462-2.159 2.971v5.696h-3v-11h2.879v1.509h.041c.401-.761 1.386-1.509 2.85-1.509 3.047 0 3.606 2.002 3.606 4.604v6.396z" />
          </svg>
        </a>
      </div>
    );
  }