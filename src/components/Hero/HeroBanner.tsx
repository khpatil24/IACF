import { Link } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <section className="relative mt-[80px] h-[calc(100vh-6rem)] min-h-[500px] w-full">
      {/* Background Image - Replace with your bird conservation image */}
      <div className="absolute inset-0 bg-[url('/hero-birds.png')] bg-cover bg-center brightness-75" />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 text-white sm:px-12 lg:px-24">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Protecting India's Precious Avian Species
          </h1>
          <p className="mb-8 text-lg sm:text-xl md:mb-12 md:text-2xl">
            Join our mission to conserve endangered birds through research, 
            habitat protection, and community education.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link
              to="/species"
              className="rounded border-2 border-white px-8 py-3 text-center text-lg font-bold text-white hover:underline transition-colors duration-300"
            >
              Explore Species
            </Link>
            <Link
              to="/donate"
              className="rounded border-2 border-white px-8 py-3 text-center text-lg font-bold text-white hover:underline transition-colors duration-300"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}