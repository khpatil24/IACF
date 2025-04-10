import { FaKiwiBird, FaTree, FaWater, FaChartLine, FaUsers, FaSeedling } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function WhyHelpSection() {
  const stats = [
    { 
      value: "187", 
      label: "Threatened Bird Species", 
      subtext: "15% of all assessed species in India are at risk", 
      icon: <FaKiwiBird className="w-10 h-10 text-red-600" />,
      bgColor: "bg-red-50",
      trend: "▲ 12% since 2010"
    },
    { 
      value: "63%", 
      label: "Forest Bird Decline", 
      subtext: "Population decrease since 2000", 
      icon: <FaTree className="w-10 h-10 text-green-600" />,
      bgColor: "bg-green-50",
      trend: "▼ 8% annually"
    },
    { 
      value: "40%", 
      label: "Wetlands Lost", 
      subtext: "Since 1980 - critical migratory habitats", 
      icon: <FaWater className="w-10 h-10 text-blue-600" />,
      bgColor: "bg-blue-50",
      trend: "▼ 1.5% per year"
    }
  ];

  const impacts = [
    {
      icon: <FaChartLine className="w-8 h-8 text-amber-600" />,
      title: "Scientific Research",
      description: "Funding 5 field studies annually on endangered species"
    },
    {
      icon: <FaUsers className="w-8 h-8 text-indigo-600" />,
      title: "Community Programs",
      description: "Educating 10,000+ locals yearly on conservation"
    },
    {
      icon: <FaSeedling className="w-8 h-8 text-emerald-600" />,
      title: "Habitat Restoration",
      description: "Replanted 500+ acres of critical bird habitats"
    }
  ];

  return (
    <section className="relative py-24 bg-blue-100 overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            URGENT ACTION NEEDED
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Your Support Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's avian biodiversity faces unprecedented threats. Here's how we're fighting back - and how you can help.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-3xl ${stat.bgColor} hover:shadow-xl transition-all duration-500 border-2 border-white`}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-5xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600 mb-3">{stat.subtext}</p>
                  <span className="text-sm font-medium text-black px-3 py-1 bg-white rounded-full">
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-blue-200 rounded-full opacity-10"></div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your Impact In Action
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impacts.map((impact, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white rounded-xl shadow-sm">
                    {impact.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{impact.title}</h4>
                  <p className="text-gray-600">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join over 5,000 conservation supporters helping protect India's birds today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
          to={"/donate"}
          className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors duration-300 shadow-lg1 hover:shadow-xl">
              Donate Now
            </button>
            
          </Link>
          <Link
          to={"/about"}
          className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 font-bold rounded-xl transition-colors duration-300 border-2 border-gray-300 shadow-sm">
              Learn About Our Work
            </button>
            
          </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
