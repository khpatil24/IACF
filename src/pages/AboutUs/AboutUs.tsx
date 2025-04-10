import { FaLeaf, FaUsers, FaChartLine, FaHandHoldingHeart } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative mt-[80px] py-32 bg-[url('/about-banner.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About Us</h1>
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6">Who We Are</h1>
          <p className="text-2xl text-white max-w-3xl mx-auto">
          We are dedicated to protecting India’s rich avian biodiversity.
          </p>
          
          <p className="text-2xl text-white max-w-3xl mx-auto">
          
          Our mission is to conserve birds and their habitats, promote ecological balance, and work hand-in-hand with communities to ensure the sustainable use of natural resources—for the well-being of both wildlife and people.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
        <section className="relative py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
                  SINCE 2010
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Our Conservation Journey
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Founded by passionate ornithologists in Bengaluru, the <span className="font-semibold text-gray-900">Indian Avian Conservation Fund</span> began with simple bird counts at local lakes. Today, we're a nationwide movement protecting endangered species across 15 states.
                  </p>
                  
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <FaUsers className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">200+ Dedicated Volunteers</h4>
                      <p className="text-gray-600">From students to retired scientists, all united for avian conservation</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our science-based approach combines <span className="font-semibold text-gray-900">field research, habitat restoration, and community education</span> to create sustainable impact. Each year, we train 500+ local conservationists.
                  </p>
                </div>

                
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/founders-team.webp" 
                    alt="Founding team conducting field research"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white px-6 py-3 rounded-lg shadow-md border border-gray-200">
                  <p className="text-sm font-medium text-gray-700">First field survey team, 2012</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Mission and Values */}
        <section className="relative py-24 bg-gray-800 text-white overflow-hidden">
          {/* Decorative elements */}


          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-amber-500 text-amber-900 rounded-full text-sm font-semibold mb-4">
                WHAT GUIDES US
              </span>
              <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that shape every aspect of our conservation work
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Conservation */}
              <div className="bg-gray-700 hover:bg-gray-600 p-8 rounded-2xl border border-gray-600 hover:border-amber-400 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-amber-500 rounded-xl flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                  <FaLeaf className="text-2xl text-amber-900" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Conservation First</h3>
                <p className="text-gray-300 text-center">
                  Every decision prioritizes protection and recovery of endangered species through habitat conservation.
                </p>
              </div>

              {/* Community */}
              <div className="bg-gray-700 hover:bg-gray-600 p-8 rounded-2xl border border-gray-600 hover:border-blue-400 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                  <FaUsers className="text-2xl text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Community Led</h3>
                <p className="text-gray-300 text-center">
                  Empowering local communities as stewards through education and sustainable livelihood programs.
                </p>
              </div>

              {/* Science */}
              <div className="bg-gray-700 hover:bg-gray-600 p-8 rounded-2xl border border-gray-600 hover:border-emerald-400 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:bg-emerald-400 transition-colors">
                  <FaChartLine className="text-2xl text-emerald-900" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Science Based</h3>
                <p className="text-gray-300 text-center">
                  Rigorous research and data-driven strategies guide our conservation planning and implementation.
                </p>
              </div>

              {/* Transparency */}
              <div className="bg-gray-700 hover:bg-gray-600 p-8 rounded-2xl border border-gray-600 hover:border-red-400 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-500 rounded-xl flex items-center justify-center group-hover:bg-red-400 transition-colors">
                  <FaHandHoldingHeart className="text-2xl text-red-900" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Transparent Impact</h3>
                <p className="text-gray-300 text-center">
                  Annual public reports with measurable outcomes and financial accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-20 tracking-tight">
            Our Impact at a Glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Species Protected */}
            <div className="bg-white rounded-2xl shadow-xl p-10 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-6xl font-bold text-green-600 mb-4">27+</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Species Protected</h3>
              <p className="text-gray-600">
                Including critically endangered species like the <span className="font-medium text-black">Great Indian Bustard</span>
              </p>
            </div>

            {/* Hectares Conserved */}
            <div className="bg-white rounded-2xl shadow-xl p-10 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-6xl font-bold text-emerald-600 mb-4">1500+</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Hectares Conserved</h3>
              <p className="text-gray-600">
                Protecting vital habitats through sustainable conservation efforts
              </p>
            </div>

            {/* Students Reached */}
            <div className="bg-white rounded-2xl shadow-xl p-10 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-6xl font-bold text-indigo-600 mb-4">50K+</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Students Reached</h3>
              <p className="text-gray-600">
                Through school programs that build awareness and inspire future conservationists
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gray-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Conservation Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether through volunteering, donations, or simply spreading awareness, your support makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/donate" 
              className="bg-accent hover:bg-gray-400 text-white font-bold py-3 px-8 rounded transition-colors"
            >
              Donate Now
            </a>
            <a 
              href="/volunteer" 
              className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-8 rounded transition-colors"
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}