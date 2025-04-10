import { FaLeaf, FaUsers, FaChartLine, FaHandHoldingHeart } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-[url('/bird-conservation-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Our Mission</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Protecting India's avian biodiversity through research, conservation, and community engagement
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2010, the Indian Avian Conservation Fund began as a small group of ornithologists 
                concerned about the rapid decline of several bird species across the Indian subcontinent.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What started as weekend bird counts in Bengaluru's lakes has grown into a nationwide 
                conservation movement with over 50 active projects and 200+ volunteers.
              </p>
              <p className="text-lg text-gray-700">
                Today, we partner with local communities, government agencies, and international 
                organizations to implement science-based conservation strategies.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/founders-team.webp" 
                alt="Our founding team conducting field research"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-gray-500 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Conservation */}
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <FaLeaf className="text-4xl text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conservation First</h3>
              <p>
                Every decision we make prioritizes the protection and recovery of endangered bird species.
              </p>
            </div>

            {/* Community */}
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <FaUsers className="text-4xl text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Led</h3>
              <p>
                We believe lasting conservation happens when local communities are empowered as stewards.
              </p>
            </div>

            {/* Science */}
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <FaChartLine className="text-4xl text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Science Based</h3>
              <p>
                Our programs are grounded in rigorous research and continuous monitoring.
              </p>
            </div>

            {/* Transparency */}
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <FaHandHoldingHeart className="text-4xl text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Impact</h3>
              <p>
                We measure and report our conservation outcomes with full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black text-center mb-16">Meet Our Leadership</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/team-member1.webp" alt="Dr. Ananya Patel" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Dr. Ananya Patel</h3>
                <p className="text-accent mb-2">Founder & Lead Ornithologist</p>
                <p className="text-gray-600">
                  PhD in Avian Ecology with 15+ years of field research experience across Western Ghats.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/team-member1.webp" alt="Rahul Khanna" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Rahul Khanna</h3>
                <p className="text-accent mb-2">Conservation Director</p>
                <p className="text-gray-600">
                  Former forest officer specializing in habitat restoration and community engagement.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/team-member1.webp" alt="Priya Desai" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Priya Desai</h3>
                <p className="text-accent mb-2">Education Coordinator</p>
                <p className="text-gray-600">
                  Develops school programs and public awareness campaigns about avian conservation.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/team-member1.webp" alt="Arjun Mehta" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Arjun Mehta</h3>
                <p className="text-accent mb-2">Field Operations Manager</p>
                <p className="text-gray-600">
                  Oversees all field research teams and conservation projects across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black text-center mb-16">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-black mb-3">27+</div>
              <h3 className="text-xl font-semibold mb-2">Species Protected</h3>
              <p className="text-gray-600">
                Including critically endangered birds like the Great Indian Bustard
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-black mb-3">1500+</div>
              <h3 className="text-xl font-semibold mb-2">Hectares Conserved</h3>
              <p className="text-gray-600">
                Critical habitats protected through our conservation programs
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-black mb-3">50K+</div>
              <h3 className="text-xl font-semibold mb-2">Students Reached</h3>
              <p className="text-gray-600">
                Through our school education and awareness programs
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