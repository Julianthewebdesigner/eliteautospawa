import { motion } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";

const MAIN   = "/images/gallery/hero%20section/detail.avif";
const BADGE  = "/images/gallery/hero%20section/Close%20up.jpeg";
const CARD_L = "/images/gallery/work/1.jpeg";
const CARD_R = "/images/gallery/work/Your-Premier-Car-Detailing-Destination-in-Kent-WA-Image-01-Detail-Central-2024.jpg";

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const CHROME_BLUE = {
  background: "linear-gradient(135deg, #3b82f6 0%, #93c5fd 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const stats = [
  { value: "500+", label: "Cars Detailed" },
  { value: "5.0★", label: "Google Rating" },
  { value: "100%", label: "Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505]">

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.032] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundSize: "200px 200px" }}
      />

      {/* Ambient glows — desktop only */}
      <div className="hidden md:block pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-900/25 rounded-full blur-[200px]" />
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[400px] bg-blue-700/10 rounded-full blur-[140px]" />
      </div>

      {/* ── Giant DETAILING text — behind the car ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none select-none absolute z-10 inset-x-0 flex justify-center overflow-hidden"
        style={{ top: "13%" }}
      >
        <span
          className="font-black uppercase tracking-tight leading-none whitespace-nowrap"
          style={{
            /* clamp: min stays within viewport on smallest phones */
            fontSize: "clamp(2.8rem, 12vw, 15rem)",
            background: "linear-gradient(180deg, #ffffff 0%, #c8d8f0 55%, #7eaee8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0.92,
          }}
        >
          DETAILING
        </span>
      </motion.div>

      {/* ── Main car image — on top of DETAILING text ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-20 inset-x-0"
        style={{ top: 0, bottom: "32%" }}
      >
        <img
          src={MAIN}
          alt="Elite Auto Spa premium detailing"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]" />
      </motion.div>

      {/* ════════════════════════════════════════════
          DESKTOP OVERLAYS (md and up)
      ════════════════════════════════════════════ */}

      {/* Top-left: location pill + tagline — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex absolute z-30 flex-col gap-4"
        style={{ top: "20%", left: "4%" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/12 bg-white/5 backdrop-blur-md w-fit">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
            Burien, WA · Now Booking
          </span>
        </div>
        <div>
          <div className="w-6 h-px bg-blue-500/60 mb-3" />
          <p className="text-sm leading-[1.7] text-slate-400 max-w-[190px]">
            Impeccable results<br />
            with a <span className="text-white font-semibold">premium</span><br />
            approach
          </p>
        </div>
      </motion.div>

      {/* Top-right: CTA card + badge — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex absolute z-30 flex-col items-end gap-3"
        style={{ top: "16%", right: "4%" }}
      >
        <a href="#contact" className="group block rounded-2xl overflow-hidden">
          <div
            className="relative px-6 py-5 border border-white/15 rounded-2xl
                       bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl
                       hover:border-blue-400/50 transition-all duration-500 shadow-2xl"
            style={{ minWidth: "140px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent
                            -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500 mb-2 relative z-10">Schedule</p>
            <p className="text-[1.35rem] font-black text-white leading-none relative z-10">YOUR</p>
            <p className="text-[1.35rem] font-black text-white leading-none mb-4 relative z-10">DETAIL</p>
            <div className="flex items-center gap-2 relative z-10">
              <div className="h-px flex-1 bg-white/20 group-hover:bg-blue-400/60 transition-colors duration-300" />
              <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30
                              group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-300
                              flex items-center justify-center">
                <ArrowUpRight size={13} className="text-blue-300 group-hover:text-white transition-all duration-300" />
              </div>
            </div>
          </div>
        </a>
        <div className="w-[68px] h-[68px] rounded-xl overflow-hidden border border-white/10 shadow-xl">
          <img src={BADGE} alt="Ferrari detail" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>
      </motion.div>

      {/* Desktop bottom: stats + 3-col cards */}
      <div className="hidden md:block absolute z-30 inset-x-0 bottom-0 px-6 pb-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex items-center justify-center gap-8 mb-6"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-black text-white leading-none">{value}</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600 mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* 3-col row */}
        <div className="grid grid-cols-3 items-end gap-4">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="w-[158px] rounded-xl overflow-hidden border border-white/12"
              style={{ background: "rgba(8,8,12,0.65)", backdropFilter: "blur(14px)" }}
            >
              <img src={CARD_L} alt="Car detailing" className="w-full h-[96px] object-cover" loading="lazy" decoding="async" />
              <div className="px-3 py-2.5 flex items-center justify-between">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Exterior Detail</p>
                <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                  <ArrowUpRight size={9} className="text-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start pb-1"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-5 bg-blue-500/50" />
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">mobile detailing</p>
            </div>
            <p className="font-black uppercase text-white leading-[0.88] tracking-tight"
               style={{ fontSize: "clamp(2rem, 4.2vw, 3.8rem)" }}>PREMIUM</p>
            <p className="font-black uppercase leading-[0.88] tracking-tight"
               style={{ fontSize: "clamp(2rem, 4.2vw, 3.8rem)", marginLeft: "clamp(0.75rem, 1.8vw, 1.75rem)", ...CHROME_BLUE }}>
              RESULTS
            </p>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-end"
          >
            <div
              className="w-[158px] rounded-xl overflow-hidden border border-white/12"
              style={{ background: "rgba(8,8,12,0.65)", backdropFilter: "blur(14px)" }}
            >
              <img src={CARD_R} alt="Paint correction" className="w-full h-[96px] object-cover" loading="lazy" decoding="async" />
              <div className="px-3 py-2.5 flex items-center justify-between">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Paint Correction</p>
                <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                  <ArrowUpRight size={9} className="text-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          MOBILE BOTTOM (below md)
      ════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden absolute z-30 inset-x-0 bottom-0 px-5 pb-10 flex flex-col items-center gap-3"
      >
        {/* Stats row */}
        <div className="flex items-center gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-base font-black text-white leading-none">{value}</p>
              <p className="text-[8px] font-bold uppercase tracking-widest text-slate-600 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* PREMIUM / RESULTS */}
        <div className="text-center">
          <p className="font-black uppercase text-white leading-[0.88] tracking-tight text-[2.6rem]">PREMIUM</p>
          <p className="font-black uppercase leading-[0.88] tracking-tight text-[2.6rem]" style={CHROME_BLUE}>
            RESULTS
          </p>
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          className="w-full max-w-[300px] flex items-center justify-center gap-2
                     bg-blue-600 hover:bg-blue-500 text-white font-black
                     py-4 rounded-2xl text-sm uppercase tracking-wide
                     transition-colors shadow-xl shadow-blue-600/30"
        >
          Book Your Detail
          <ArrowUpRight size={16} />
        </a>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#080808] to-transparent z-40" />
    </section>
  );
}
