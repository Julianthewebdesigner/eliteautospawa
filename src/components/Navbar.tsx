import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const LOGO = "/images/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-5 py-2.5">

        {/* ── Brand ── */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img
            src={LOGO}
            alt="Elite Auto Spa WA logo"
            className="h-11 w-11 rounded-xl object-cover object-center"
          />
          <span className="font-black text-[15px] tracking-tight chrome-text hidden sm:block leading-tight">
            ELITE AUTO SPA <span className="text-blue-400">WA</span>
          </span>
        </motion.a>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Pricing", "Gallery", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* ── Right actions ── */}
        <div className="flex items-center gap-4">
          <a
            href="tel:2064581243"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Phone size={15} />
            (206) 458-1243
          </a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 transition-all"
          >
            BOOK NOW
          </motion.a>
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-24 left-6 right-6 glass-dark rounded-2xl p-6 flex flex-col gap-4 border border-white/8"
          >
            {["Services", "Pricing", "Gallery", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-semibold text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="h-px bg-white/10 my-1" />
            <a
              href="tel:2064581243"
              className="flex items-center gap-2 text-blue-400 font-bold"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={16} /> (206) 458-1243
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
