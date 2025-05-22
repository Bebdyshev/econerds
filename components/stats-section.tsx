"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"
import { Trophy, Users, GraduationCap, Globe } from "lucide-react"

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 dark:from-purple-950 dark:to-indigo-950 text-white theme-transition">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="text-4xl font-bold mb-2">
              <AnimatedCounter from={0} to={50} suffix="K" className="tabular-nums" />
            </h3>
            <p className="text-white/80">Prize Pool</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="text-4xl font-bold mb-2">
              <AnimatedCounter from={0} to={120} suffix="+" className="tabular-nums" />
            </h3>
            <p className="text-white/80">Teams Expected</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="text-4xl font-bold mb-2">
              <AnimatedCounter from={0} to={25} suffix="+" className="tabular-nums" />
            </h3>
            <p className="text-white/80">Universities</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="text-4xl font-bold mb-2">
              <AnimatedCounter from={0} to={5} suffix="" className="tabular-nums" />
            </h3>
            <p className="text-white/80">Countries</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
