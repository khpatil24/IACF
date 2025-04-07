import { Link } from 'react-router-dom';

export default function ActionSection() {
  const cards = [
    {
      title: "Endangered Species",
      tag: "SPECIES",
      description: "Discover India's most threatened bird species",
      image: "/species-card.webp",
      link: "/species"
    },
    {
      title: "Conservation Efforts",
      tag: "ARTICLE",
      description: "Latest research on habitat protection",
      image: "/article-card.webp",
      link: "/articles"
    },
    {
      title: "Support Our Mission",
      tag: "ACTION",
      description: "Help protect avian biodiversity today",
      image: "/donate-card.webp",
      link: "/donate"
    }
  ];

  return (
    <section className="relative py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/home-banner-1.jpg')] bg-cover bg-center brightness-90"
        aria-hidden="true"
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold font-mono text-black mb-12">Our Work in Action</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link 
              to={card.link} 
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-white"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-black font-semibold text-secondary uppercase tracking-wider">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <span className="text-gray-600 font-medium group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}