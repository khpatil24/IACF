import { useState } from 'react';
import { Bird, ChevronDown, Filter, Search } from 'lucide-react';

// Sample data - replace with your API/data
const speciesData = [
  {
    id: 1,
    name: 'Great Indian Bustard',
    scientificName: 'Ardeotis nigriceps',
    status: 'Critically Endangered',
    population: '<250',
    habitat: 'Grasslands of Rajasthan',
    threats: ['Habitat loss', 'Power lines'],
    image: '/species/bustard.webp'
  },
  {
    id: 2,
    name: 'Forest Owlet',
    scientificName: 'Heteroglaux blewitti',
    status: 'Endangered',
    population: '250-999',
    habitat: 'Central Indian forests',
    threats: ['Deforestation', 'Agriculture'],
    image: '/species/owlet.webp'
  },
  {
    id: 3,
    name: 'Forest Owlet',
    scientificName: 'Heteroglaux blewitti',
    status: 'Endangered',
    population: '250-999',
    habitat: 'Central Indian forests',
    threats: ['Deforestation', 'Agriculture'],
    image: '/species/owlet.webp'
  },
  {
    id: 4,
    name: 'Forest Owlet',
    scientificName: 'Heteroglaux blewitti',
    status: 'Endangered',
    population: '250-999',
    habitat: 'Central Indian forests',
    threats: ['Deforestation', 'Agriculture'],
    image: '/species/owlet.webp'
  }
];

export default function SpeciesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    habitat: ''
  });

  const filteredSpecies = speciesData.filter(species => {
    const matchesSearch = species.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         species.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !filters.status || species.status === filters.status;
    const matchesHabitat = !filters.habitat || species.habitat.includes(filters.habitat);
    
    return matchesSearch && matchesStatus && matchesHabitat;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Bird className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-6">Endangered Avian Species of India</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Documenting and protecting India's most threatened bird species
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filter */}
        <div className="mb-12 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row gap-6 ">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search species..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <div className="relative">
                <select
                  className="appearance-none pl-10 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                  value={filters.status}
                  onChange={(e) => setFilters({...filters, status: e.target.value})}
                >
                  <option value="">All Status</option>
                  <option>Critically Endangered</option>
                  <option>Endangered</option>
                  <option>Vulnerable</option>
                </select>
                <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <div className="relative">
                <select
                  className="appearance-none pl-10 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                  value={filters.habitat}
                  onChange={(e) => setFilters({...filters, habitat: e.target.value})}
                >
                  <option value="">All Habitats</option>
                  <option>Grasslands</option>
                  <option>Forests</option>
                  <option>Wetlands</option>
                </select>
                <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Species Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpecies.map((species) => (
            <div key={species.id} className="bg-gray-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={species.image} 
                  alt={species.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold">{species.name}</h2>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    species.status === 'Critically Endangered' ? 'bg-red-100 text-red-800' :
                    species.status === 'Endangered' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {species.status}
                  </span>
                </div>
                <p className="text-gray-500 italic mb-3">{species.scientificName}</p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Population</p>
                    <p>{species.population} mature individuals</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-500">Habitat</p>
                    <p>{species.habitat}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-500">Major Threats</p>
                    <ul className="list-disc list-inside">
                      {species.threats.map((threat, i) => (
                        <li key={i}>{threat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSpecies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No species match your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}