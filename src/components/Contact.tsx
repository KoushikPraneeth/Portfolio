import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "praneethkoushik2003@gmail.com",
      href: "mailto:praneethkoushik2003@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91-8886044311",
      href: "tel:+918886044311"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "KoushikPraneeth",
      href: "https://github.com/KoushikPraneeth"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "praneeth-koushik",
      href: "https://www.linkedin.com/in/praneeth-koushik"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4"
            >
              {info.icon}
              <div>
                <p className="font-semibold">{info.label}</p>
                <p className="text-gray-600">{info.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
