import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a passionate Electronics and Communication student with a strong interest in software development, 
            machine learning, and IoT. I enjoy building innovative projects that solve real-world problems and have 
            hands-on experience in Python, Java, React, and Arduino. My goal is to leverage my technical skills and 
            creativity to contribute to impactful solutions in the tech industry.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Location</h3>
              <p>Nizamabad, Telangana</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Education</h3>
              <p>B.Tech in Electronics and Communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
