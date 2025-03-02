"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono">
            <p className="text-green-500">$ whoami</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Lakkam Praneeth Koushik
            </h1>
            <p className="text-gray-400 mb-2">
              Full Stack Developer | Electronics and Communication Graduate
            </p>
            <p className="text-green-500">$ skills</p>
            <div className="space-y-4 mt-2">
              <div>
                <p className="text-gray-400 mb-2">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    Shadcn/UI
                  </span>
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-2">Backend</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    Spring Boot
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    REST APIs
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    WebSockets
                  </span>
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-2">Databases</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    MySQL
                  </span>
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    Docker
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    Supabase
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    Maven
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                    Vite
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
