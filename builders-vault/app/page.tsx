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
      <div className="absolute top-20 left-10 h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
      <div className="absolute top-52 right-20 h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
      <div className="absolute bottom-40 left-1/3 h-1 w-1 rounded-full bg-white animate-ping" />
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
      <section className="px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Inside the Vault
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* LeadGhost */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-zinc-900/90 rounded-2xl p-5 border border-zinc-800 hover:border-yellow-400/60 transition-all shadow-lg hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]"
          >
            <motion.img
              src="/leadghost.png"
              alt="LeadGhost"
              className="rounded-xl mb-4 w-full h-40 object-contain"
              whileHover={{ scale: 1.05 }}
            />
            <h3 className="text-xl font-semibold">LeadGhost</h3>
            <p className="text-sm text-gray-400 mt-2">
              Automated lead generation system that captures and converts leads.
            </p>
            <span className="text-xs text-green-400">● Active Build</span>
          </motion.div>

          {/* FootFlirt */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-zinc-900/90 rounded-2xl p-5 border border-zinc-800 hover:border-yellow-400/60 transition-all shadow-lg hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]"
          >
            <motion.img
              src="/footflirt.png"
              alt="FootFlirt"
              className="rounded-xl mb-4 w-full h-40 object-contain drop-shadow-[0_0_25px_rgba(236,72,153,0.45)]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <h3 className="text-xl font-semibold">FootFlirt</h3>
            <p className="text-sm text-gray-400 mt-2">
              A bold creator app where users post, get rated, tipped, and build
              loyal fanbases through interactive engagement.
            </p>
            <span className="text-xs text-green-400">● Live</span>
          </motion.div>

          {/* TrashPanda */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-zinc-900/90 rounded-2xl p-5 border border-zinc-800 hover:border-yellow-400/60 transition-all shadow-lg hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]"
          >
            <div className="h-40 bg-zinc-800 rounded-xl mb-4 flex items-center justify-center text-gray-500">
              Coming Soon
            </div>
            <h3 className="text-xl font-semibold">TrashPanda Kombat</h3>
            <p className="text-sm text-gray-400 mt-2">
              Raccoon fighting game with upgradeable characters and Web3
              mechanics.
            </p>
            <span className="text-xs text-yellow-400">● In Development</span>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © The Builder’s Vault
      </footer>
      </div>
    </div>
  );
}
