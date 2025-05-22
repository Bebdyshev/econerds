"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Sponsors() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
      {[
        {
          name: "Kazakhstan National Bank",
          logo: "/kazakhstan-national-bank-logo.png",
          delay: 0,
        },
        {
          name: "Aktobe University",
          logo: "/aktobe-university-logo.png",
          delay: 0.1,
        },
        {
          name: "KazEcon Consulting",
          logo: "/kazecon-consulting-logo.png",
          delay: 0.2,
        },
        {
          name: "Aktobe Business Center",
          logo: "/placeholder.svg?height=80&width=160&query=Aktobe Business Center logo",
          delay: 0.3,
        },
        {
          name: "Kazakhstan Economic Forum",
          logo: "/placeholder.svg?height=80&width=160&query=Kazakhstan Economic Forum logo",
          delay: 0.4,
        },
      ].map((sponsor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: sponsor.delay }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full h-32 flex items-center justify-center border border-gray-100 dark:border-gray-700 theme-transition"
        >
          <Image
            src={sponsor.logo || "/placeholder.svg"}
            alt={sponsor.name}
            width={160}
            height={80}
            className="max-h-16 w-auto"
          />
        </motion.div>
      ))}
    </div>
  )
}
