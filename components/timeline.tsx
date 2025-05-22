"use client"

import { motion } from "framer-motion"

export function Timeline() {
  return (
    <div className="relative border-l-2 border-purple-200 dark:border-purple-800 pl-6 py-2 ml-4 theme-transition">
      {/* Day 1 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 relative"
      >
        <div className="absolute -left-[34px] w-6 h-6 bg-purple-600 dark:bg-purple-700 rounded-full flex items-center justify-center theme-transition">
          <span className="text-white text-xs font-bold">1</span>
        </div>
        <div className="timeline-connector"></div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 theme-transition">Day 1: October 15</h3>
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 theme-transition">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 theme-transition">
              9:00 AM - 10:30 AM
            </p>
            <p className="font-medium text-gray-900 dark:text-white theme-transition">
              Registration & Opening Ceremony
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
              Welcome address, competition overview, and keynote speech
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 theme-transition">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 theme-transition">
              11:00 AM - 12:30 PM
            </p>
            <p className="font-medium text-gray-900 dark:text-white theme-transition">Case Distribution & Workshop</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
              Teams receive case materials and attend analysis workshop
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 theme-transition">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 theme-transition">
              1:30 PM - 6:00 PM
            </p>
            <p className="font-medium text-gray-900 dark:text-white theme-transition">Case Analysis (Part 1)</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
              Teams begin working on their case solutions
            </p>
          </div>
        </div>
      </motion.div>

      {/* Day 2 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10 relative"
      >
        <div className="absolute -left-[34px] w-6 h-6 bg-purple-600 dark:bg-purple-700 rounded-full flex items-center justify-center theme-transition">
          <span className="text-white text-xs font-bold">2</span>
        </div>
        <div className="timeline-connector"></div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 theme-transition">Day 2: October 16</h3>
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 theme-transition">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 theme-transition">
              9:00 AM - 12:00 PM
            </p>
            <p className="font-medium text-gray-900 dark:text-white theme-transition">Case Analysis (Part 2)</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
              Teams continue developing their solutions
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 theme-transition">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 theme-transition">
              1:00 PM - 3:00 PM
            </p>
            <p className="font-medium text-gray-900 dark:text-white theme-transition">Expert Panel Discussion</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
              Industry experts discuss current economic challenges
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 theme-transition">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 theme-transition">
              3:30 PM - 6:00 PM
            </p>
            <p className="font-medium text-gray-900 dark:text-white theme-transition">Presentation Preparation</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
              Teams finalize their presentations
            </p>
          </div>
        </div>
      </motion.div>

      {/* Day 3 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative"
      >
        <div className="absolute -left-[34px] w-6 h-6 bg-purple-600 dark:bg-purple-700 rounded-full flex items-center justify-center theme-transition">
          <span className="text-white text-xs font-bold">3</span>
        </div>
        <div className="timeline-connector"></div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 theme-transition">Day 3: October 17</h3>
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 theme-transition">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 theme-transition">
              9:00 AM - 12:30 PM
            </p>
            <p className="font-medium text-gray-900 dark:text-white theme-transition">
              Preliminary Round Presentations
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
              Teams present their solutions to judges
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 theme-transition">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 theme-transition">
              1:30 PM - 3:30 PM
            </p>
            <p className="font-medium text-gray-900 dark:text-white theme-transition">Final Round (Top 5 Teams)</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
              Finalist teams present to all attendees
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 theme-transition">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 theme-transition">
              4:00 PM - 5:30 PM
            </p>
            <p className="font-medium text-gray-900 dark:text-white theme-transition">Awards Ceremony & Closing</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
              Winners announced, prizes awarded, and networking reception
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
