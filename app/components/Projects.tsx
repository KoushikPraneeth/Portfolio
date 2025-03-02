"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "Social Media Platform",
              description:
                "Designed and developed a full-stack social media platform with JWT authentication and file upload capabilities.",
              details: [
                "Implemented robust backend using Spring Boot, JPA, and PostgreSQL, featuring user management, post creation, commenting, and social interactions.",
                "Built responsive frontend with React 18, TypeScript, and Tailwind CSS, integrating Radix UI components.",
                "Designed RESTful API architecture supporting pagination, hashtag filtering, and complex social features like following and sharing.",
                "Implemented JWT authentication and secure file upload capabilities.",
              ],
              tech: [
                "Spring Boot",
                "React",
                "TypeScript",
                "PostgreSQL",
                "JWT",
                "REST APIs",
                "Tailwind CSS",
                "Radix UI",
              ],
            },
            {
              title: "QuickShare Symphony",
              description:
                "Developed a real-time file sharing application with WebSocket communication and automatic fallback support.",
              details: [
                "Implemented chunk-based file transfer system with progress tracking and automatic error recovery.",
                "Built efficient file processing system with dynamic chunk size adjustment and concurrent transfer handling.",
                "Designed responsive UI using React, TypeScript, and shadcn/ui with real-time progress updates.",
                "Developed real-time communication using WebSocket with automatic fallback mechanisms.",
              ],
              tech: [
                "Spring Boot",
                "React",
                "TypeScript",
                "WebSocket",
                "shadcn/ui",
              ],
            },
            {
              title: "YouTube Analytics Dashboard",
              description:
                "Developed a full-stack analytics dashboard for tracking YouTube channel metrics and performance data.",
              details: [
                "Implemented channel search functionality and data visualization using Recharts for metrics display.",
                "Built responsive UI with Tailwind CSS and shadcn/ui components with dark/light mode support.",
                "Integrated YouTube Data API for real-time channel statistics and performance tracking.",
                "Designed dashboard with dark/light mode support for user preference.",
              ],
              tech: [
                "Spring Boot",
                "React",
                "Tailwind CSS",
                "shadcn/ui",
                "YouTube Data API",
                "Recharts",
              ],
            },
            {
              title: "AlgoBench Pro",
              description:
                "Developed a command-line Java application for benchmarking and visualizing algorithm performance.",
              details: [
                "Implemented performance benchmarks for sorting, searching, and graph algorithms, measuring time and memory usage.",
                "Designed interactive menu-driven CLI for algorithm selection, benchmark configuration, and report generation.",
                "Utilized ASCII charts, tables, and progress bars for clear visualization of benchmark results in the console.",
                "Employed Java 17+, Maven, JUnit 5, and Log4j2 for a robust, modular, testable, and well-documented project.",
              ],
              tech: [
                "Java",
                "Maven",
                "JUnit",
                "Log4j2",
                "CLI",
                "Algorithms",
                "Benchmarking",
              ],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
