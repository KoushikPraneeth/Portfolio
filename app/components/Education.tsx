"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="font-mono">
              <p className="text-green-500 mb-4">$ edu --profile</p>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-200">
                  [VIT University] 2020-2024
                </h3>
                <div className="mt-2 ml-4 space-y-1">
                  <p className="text-gray-300">
                    &gt; B.Tech Electronics & Communication
                  </p>
                </div>
              </div>
              <p className="text-green-500 mb-4">$ ./grades --transcript</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-300">Current CGPA: 7.8</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-300">Last Semester: 9.0</span>
                <span className="text-green-400">↗</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
