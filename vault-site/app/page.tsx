"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,196,58,0.20),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.15),transparent_35%)]" />
      <div className="relative z-10 flex min-h-screen flex-col">

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
      <div className="grid md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto flex-1 mt-10">

        {/* LeadGhost */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-5 rounded-xl text-center"
        >
          <img src="/leadghost.png" className="h-32 mx-auto mb-4" />
          <h2 className="text-xl font-bold">LeadGhost</h2>
          <p className="text-gray-400 text-sm">
            Automated lead generation system that captures and converts leads.
          </p>
        </motion.div>

        {/* FootFlirt */}
        <motion.a
          href="https://footflirt.app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-5 rounded-xl block cursor-pointer text-center"
          aria-label="Visit FootFlirt"
        >
          <img src="/footflirt.png" className="h-32 mx-auto mb-4" />
          <h2 className="text-xl font-bold">FootFlirt</h2>
          <p className="text-gray-400 text-sm">
            A bold creator app where users post, get rated, tipped, and build
            loyal fanbases.
          </p>
        </motion.a>

        {/* TrashPanda */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-5 rounded-xl text-center"
        >
          <img src="/trashpanda.png" className="h-32 mx-auto mb-4" />
          <h2 className="text-xl font-bold">TrashPanda Kombat</h2>
          <p className="text-gray-400 text-sm">
            Raccoon fighting game with Web3 mechanics.
          </p>
        </motion.div>

        {/* Lead Recovery */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-5 rounded-xl text-center border border-yellow-400/20"
        >
          <div className="h-32 flex items-center justify-center text-6xl mb-4">
            📞
          </div>
          <h2 className="text-xl font-bold">Lead Recovery</h2>
          <p className="text-gray-400 text-sm mb-4">
            Helping local service businesses stop losing customers from missed calls and slow follow-up.
          </p>
          <a
            href="/lead-recovery"
            className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold"
          >
            Learn More
          </a>
        </motion.div>

      </div>

      <footer className="mt-16 border-t border-zinc-800 px-6 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href="/terms" className="transition hover:text-white">Terms of Service</a>
          <a href="/privacy" className="transition hover:text-white">Privacy Policy</a>
          <a href="mailto:jackie@buildersvault.com" className="transition hover:text-white">Contact</a>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Builder Vault. All rights reserved.</p>
      </footer>
      </div>
    </div>
  );
}
