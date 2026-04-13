import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";

const areas = [
  "Seattle", "Burien", "Bellevue", "Kirkland",
  "Redmond", "Renton", "Federal Way", "Tacoma",
  "Shoreline", "Lynnwood", "Everett", "Issaquah",
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="relative py-16 md:py-28 px-4 md:px-6 bg-[#080808] overflow-hidden">
      {/* top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-700/6 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Service Area</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.05] mb-6">
              We Bring The Spa<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                To Your Doorstep
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-[440px]">
              Based in Burien, WA, we serve the entire Puget Sound region.
              Whether you're at home in Bellevue or at the office in downtown Seattle,
              our fully-equipped mobile unit is ready.
            </p>

            {/* area grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 mb-10">
              {areas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-2 text-slate-300 text-sm font-medium"
                >
                  <MapPin size={14} className="text-blue-500 shrink-0" />
                  {area}
                </motion.div>
              ))}
            </div>

            {/* convenience badge */}
            <div className="flex items-center gap-5 p-5 rounded-3xl border border-white/8 bg-[#0d0d0f]">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Navigation className="text-blue-400 animate-pulse" size={20} />
              </div>
              <div>
                <p className="font-bold text-white text-sm mb-0.5">No Travel Fees</p>
                <p className="text-xs text-slate-500">For locations within 25 miles of Burien, WA.</p>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: map visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] border border-white/8 bg-[#0d0d0f] relative overflow-hidden group">
              {/* grid lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />

              {/* center pulse */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 rounded-full animate-ping" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500/20 rounded-full blur-xl" />
                <div className="relative z-10 w-14 h-14 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                  <MapPin size={24} className="text-blue-400" />
                </div>
              </div>

              {/* location tags */}
              <div className="absolute top-10 left-10 glass px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                Seattle
              </div>
              <div className="absolute top-10 right-10 glass px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                Bellevue
              </div>
              <div className="absolute bottom-1/3 right-8 glass px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                Kirkland
              </div>
              <div className="absolute bottom-10 left-10 glass px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                Burien
              </div>
              <div className="absolute bottom-10 right-10 glass px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                Renton
              </div>

              {/* connecting lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <line x1="50%" y1="50%" x2="15%" y2="12%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="85%" y2="12%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="88%" y2="60%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="15%" y2="85%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>

      {/* bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
