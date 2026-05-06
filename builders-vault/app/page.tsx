"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function BuildersVault() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,196,58,0.20),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.15),transparent_35%)]" />
      <div className="relative z-10">
        
      {/* HERO */}
      <motion.section
        className="text-center py-20 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mx-auto mb-6 h-20 w-20 rounded-full border border-yellow-400/60 flex items-center justify-center shadow-[0_0_45px_rgba(250,204,21,0.35)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-3xl">⚙️</span>
        </motion.div>

        <motion.p
          className="text-yellow-400 tracking-[0.35em] text-xs mb-4 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Build • Automate • Disrupt
        </motion.p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Builder’s Vault
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Inside the Vault: Systems Built to Generate.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(250,204,21,0.55)" }}
            whileTap={{ scale: 0.96 }}
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Enter the Vault
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(236,72,153,0.45)" }}
            whileTap={{ scale: 0.96 }}
            className="border border-pink-500 px-6 py-3 rounded-xl"
          >
            View Builds
          </motion.button>
        </div>
      </motion.section>

{/* PROJECTS */}
<div className="grid md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto mt-10">

  {/* LeadGhost */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-zinc-900 p-5 rounded-xl text-center"
  >
    <img
      src="/leadghost.png"
      alt="LeadGhost"
      className="h-32 mx-auto mb-4"
    />
    <h2 className="text-xl font-bold">LeadGhost</h2>
    <p className="text-gray-400 text-sm">
      Automated lead generation system that captures and converts leads.
    </p>
  </motion.div>
{/* WORK WITH ME */}
<section className="max-w-4xl mx-auto px-6 py-20 text-center">
  <h2 className="text-3xl font-bold mb-6">Work With Me</h2>

  <p className="text-gray-400 mb-10">
    I build AI tools, automation systems, and digital products designed to generate real value. 
    If you have an idea, brand, or project — let’s bring it to life.
  </p>

  <div className="bg-zinc-900 rounded-xl p-8 space-y-4">

    <p className="text-lg">
      <span className="text-gray-400">Name:</span> Sal K
    </p>

    <p className="text-lg">
      <span className="text-gray-400">Location:</span> Boston, USA
    </p>

    <p className="text-lg">
      <span className="text-gray-400">Email:</span>{" "}
      <a
        href="mailto:thebuildervault@gmail.com"
        className="text-yellow-400 hover:underline"
      >
        thebuildervault@gmail.com
      </a>
    </p>

    <div className="pt-6">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:thebuildervault@gmail.com"
        className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
      >
        Start a Project
      </motion.a>
    </div>

  </div>
</section>
  {/* FootFlirt */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-zinc-900 p-5 rounded-xl text-center"
  >
    <img
      src="/footflirt.png"
      alt="FootFlirt"
      className="h-32 mx-auto mb-4"
    />
    <h2 className="text-xl font-bold">FootFlirt</h2>
    <p className="text-gray-400 text-sm">
      A bold creator app where users post, get rated, tipped, and build loyal fanbases.
    </p>
  </motion.div>

  {/* TrashPanda Kombat */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-zinc-900 p-5 rounded-xl text-center"
  >
    <img
      src="/trashpanda.png"
      alt="TrashPanda Kombat"
      className="h-32 mx-auto mb-4"
    />
    <h2 className="text-xl font-bold">TrashPanda Kombat</h2>
    <p className="text-gray-400 text-sm">
      Raccoon fighting game with Web3 mechanics.
    </p>
    <span className="text-yellow-400 text-xs block mt-2">
      ● In Development
    </span>
  </motion.div>

</div>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © The Builder’s Vault
      </footer>
      </div>
    </div>
  );
}
