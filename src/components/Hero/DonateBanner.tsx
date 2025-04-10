import { Link } from 'react-router-dom';

export default function DonateBanner() {
  return (
    <section className="relative mt-[80px] h-[calc(100vh-6rem)] min-h-[500px] w-full">
      {/* Background Image - Replace with your bird conservation image */}
      <div className="absolute inset-0 bg-[url('/flying-birds.png')] bg-cover bg-center brightness-75" />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 text-white sm:px-12 lg:px-24">
        <div className=" text-right">
          <h1 className="mb-6 ml-auto max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Support Bird Conservation
          </h1>
          <p className="mb-8 ml-auto max-w-4xl text-lg sm:text-xl md:mb-12 md:text-2xl">
          Every contribution you make helps restore fragile ecosystems, protect threatened species, and empower conservation efforts across India’s most vulnerable habitats.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center ml-auto max-w-3xl">
            <Link
              to="/donate"
              className="rounded border-2 border-white px-8 py-3 text-center text-lg font-bold text-white hover:underline transition-colors duration-300"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}