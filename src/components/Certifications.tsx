import React from 'react';

export function Certifications() {
  const certifications = [
    "Java Developer – Hyperskill",
    "The Frontend Developer Career Path – Scrimba",
    "Artificial Intelligence Analyst – IBM",
    "Python Programming for Industry 4.0 – VIT Vellore",
    "Responsive Web Design – freeCodeCamp",
    "Blockchain Technology – BerkeleyX CS198.2x | edX",
    "Bitcoin and Cryptocurrencies – BerkeleyX CS198.1x | edX"
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <p className="font-medium">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
