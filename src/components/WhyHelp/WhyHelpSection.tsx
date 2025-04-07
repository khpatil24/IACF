import { Link } from 'react-router-dom';
import { FaKiwiBird, FaTree, FaWater } from 'react-icons/fa';
import Charts from './Charts';

export default function WhyHelpSection() {
  const stats = [
    { value: "187", label: "bird species are threatened with extinction", subtext: "That's 15% of all assessed species in India", icon: <FaKiwiBird className="w-12 h-12 text-primary" />},
    { value: "63%", label: "decline in forest bird populations", subtext: "Since 2000 due to habitat loss", icon: <FaTree className="w-12 h-12 text-primary" /> },
    { value: "40%", label: "wetlands lost since 1980", subtext: "Critical habitats for migratory species" ,icon: <FaWater className="w-12 h-12 text-primary" />}
  ];

  return (
    <section className="py-16 relative">
        <div 
        className="absolute inset-0 bg-[url('/home-banner-1.jpg')] bg-cover bg-center brightness-90"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-mono text-black mb-6">Why Help ?</h2>
        <p className="text-lg font-semibold text-gray-800 mb-6 max-w-3xl">
          Critical numbers that demonstrate the urgency of avian conservation
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
            key={index} 
            className="bg-gradient-to-br from-red-500 to-white p-8 rounded-xl border border-primary/10 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-red-700 rounded-full text-primary group-hover:bg-white group-hover:text-red-700 transition-colors">
                {stat.icon}
              </div>
              <div>
                <p className="text-5xl font-bold text-red-700 mb-2">{stat.value}</p>
                <p className="text-xl font-medium text-red-700 mb-2">{stat.label}</p>
                <p className="text-black">{stat.subtext}</p>
              </div>
            </div>
          </div>
          ))}
        </div>

        <Charts />
      </div>
    </section>
  );
}