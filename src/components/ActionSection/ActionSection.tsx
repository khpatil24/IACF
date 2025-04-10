import { Link } from 'react-router-dom';
import { FaFeatherAlt, FaBook, FaHandsHelping } from 'react-icons/fa';
import DonateBanner from '../Hero/DonateBanner';

export default function ActionSection() {
  const cards = [
    {
      title: "Endangered Species",
      tag: "SPECIES",
      description: "Discover India's most threatened bird species",
      icon: <FaFeatherAlt className="w-8 h-8 text-green-600" />,
      link: "/species",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Conservation Articles",
      tag: "ARTICLES",
      description: "Latest articles on habitat protection",
      icon: <FaBook className="w-8 h-8 text-blue-600" />,
      link: "/articles",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Support Our Mission",
      tag: "ACTION",
      description: "Help protect avian biodiversity today",
      icon: <FaHandsHelping className="w-8 h-8 text-amber-600" />,
      link: "/donate",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600"
    }
  ];

  return (
    <section className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-5">Our Work in Action</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          From wetlands to woodlands, see how we’re preserving India’s avian heritage—combining research, education, and community-led conservation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link 
              to={card.link} 
              key={index}
              className={`group p-8 rounded-2xl ${card.bgColor} hover:shadow-lg transition-all duration-300 border border-gray-200`}
            >
              <div className="p-4 rounded-full w-max mb-6">
                {card.icon}
              </div>
              <div className="mb-4">
                <span className={`text-sm font-semibold ${card.textColor} uppercase tracking-wider`}>
                  {card.tag}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
              <span className={`inline-flex items-center ${card.textColor} font-medium group-hover:underline`}>
                Learn more →
              </span>
            </Link>
          ))}
        </div>
        
      </div>
      <DonateBanner />  
    </section>
  );
}