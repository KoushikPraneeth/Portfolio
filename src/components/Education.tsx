import React from 'react';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">
              Bachelor of Technology in Electronics and Communication
            </h3>
            <p className="text-gray-600 mb-2">Vellore Institute of Technology, Vellore</p>
            <p className="text-gray-500 mb-2">2020–2024</p>
            <p className="font-semibold">CGPA: 7.8</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">
              Senior Secondary (XI and XII)
            </h3>
            <p className="text-gray-600 mb-2">Narayana Jr. College</p>
            <p className="text-gray-500 mb-2">2018–2020</p>
            <p className="font-semibold">Percentage: 96%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
