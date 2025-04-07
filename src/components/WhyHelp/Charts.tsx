import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Link } from 'react-router-dom';

// Register ChartJS components
Chart.register(...registerables);

export default function Charts() {
  // Chart 1: Endangered Species Distribution
  const speciesData = {
    labels: ['Critically Endangered', 'Endangered', 'Vulnerable', 'Near Threatened'],
    datasets: [{
      data: [12, 23, 45, 30],
      backgroundColor: [
        '#EF4444', // Red
        '#F59E0B', // Amber
        '#10B981', // Emerald
        '#3B82F6'  // Blue
      ],
      borderWidth: 0
    }]
  };

  // Chart 2: Habitat Loss Over Time
  const habitatData = {
    labels: ['2000', '2005', '2010', '2015', '2020'],
    datasets: [{
      label: 'Forest Cover (sq km)',
      data: [650000, 620000, 580000, 540000, 510000],
      backgroundColor: '#2C5E1A', // Primary green
      borderColor: '#FFC72C',     // Secondary yellow
      borderWidth: 2
    }]
  };

  // Chart 3: Conservation Impact
  const impactData = {
    labels: ['Species Protected', 'Habitats Restored', 'Communities Engaged'],
    datasets: [{
      data: [35, 42, 28],
      backgroundColor: [
        '#2C5E1A', // Primary green
        '#FFC72C', // Secondary yellow
        '#3B82F6'  // Blue
      ]
    }]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-2">Why Help?</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Data-driven insights on India's avian conservation challenges and our impact
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Chart 1: Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Endangered Species Distribution
            </h3>
            <div className="h-64">
              <Pie 
                data={speciesData}
                options={{
                  plugins: {
                    legend: { position: 'bottom' }
                  },
                  maintainAspectRatio: false
                }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * IUCN Red List categories for Indian birds
            </p>
          </div>

          {/* Chart 2: Line Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Habitat Loss Over Time
            </h3>
            <div className="h-64">
              <Line 
                data={habitatData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: false,
                      title: {
                        display: true,
                        text: 'Square Kilometers'
                      }
                    }
                  }
                }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Data from Forest Survey of India
            </p>
          </div>

          {/* Chart 3: Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Conservation Impact
            </h3>
            <div className="h-64">
              <Bar
                data={impactData}
                options={{
                  indexAxis: 'y',
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      beginAtZero: true
                    }
                  }
                }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Last 5 years of conservation work
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/research"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
          >
            Explore Full Research Data
            <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}