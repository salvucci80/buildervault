"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <motion.section
        className="text-center py-20 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-5xl font-bold mb-6">The Builder’s Vault</h1>
        <p className="text-gray-400">
          Inside the Vault: Systems Built to Generate.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <div className="grid md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">

        {/* LeadGhost */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-5 rounded-xl"
        >
          <img src="/leadghost.png" className="h-32 mx-auto mb-4" />
          <h2 className="text-xl font-bold">LeadGhost</h2>
          <p className="text-gray-400 text-sm">
            Automated lead generation system.
          </p>
        </motion.div>

        {/* FootFlirt */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-5 rounded-xl"
        >
          <img src="/footflirt.png" className="h-32 mx-auto mb-4" />
          <h2 className="text-xl font-bold">FootFlirt</h2>
          <p className="text-gray-400 text-sm">
            A bold creator app where users post, get rated, tipped, and build
            loyal fanbases.
          </p>
        </motion.div>

        {/* TrashPanda */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-5 rounded-xl flex flex-col justify-center items-center"
        >
          <div className="h-32 flex items-center justify-center text-gray-500">
            Coming Soon
          </div>
          <h2 className="text-xl font-bold">TrashPanda Kombat</h2>
          <p className="text-gray-400 text-sm text-center">
            Raccoon fighting game with Web3 mechanics.
          </p>
        </motion.div>

      </div>

    </div>
  );
}