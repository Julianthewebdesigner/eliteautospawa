import { motion } from "motion/react";
import { Sparkles, Shield, Star, Check } from "lucide-react";

const DETAIL_IMG = "/images/gallery/work/detailing.webp";
const BMW_IMG    = "/images/gallery/hero%20section/BMW.avif";

const inclusions = [
  "Luxury Foam Bath Exterior Wash",
  "Deep Wheel & Tire Cleaning",
  "Tire Dressing & Gloss Finish",
  "Thorough Interior Vacuuming",
  "Complete Interior Surface Cleaning",
  "Compressed-Air Crevice Cleaning",
  "Streak-Free Window & Sunroof Cleaning",
  "Spotless, Water-Spot-Free Hand Dry",
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-28 px-4 md:px-6 bg-[#080808]">
      {/* top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-700/5 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Our Services</p>
            <h2 className="text-4xl md:text-6xl font-black chrome-text mb-6">ELITE SIGNATURE DETAIL</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our comprehensive package restores your vehicle's brilliance inside and out —
              every single time.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* ── Main checklist card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative rounded-[2rem] p-8 md:p-12 overflow-hidden border border-white/8 bg-[#0d0d0f] group"
          >
            {/* corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-blue-500/10 transition-colors" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Sparkles className="text-blue-400" size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Signature Package</h3>
                  <p className="text-blue-500 text-xs font-bold uppercase tracking-widest">Complete Restoration</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {inclusions.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0 group-hover/item:bg-blue-500 transition-colors border border-blue-500/20">
                      <Check size={11} className="text-blue-400 group-hover/item:text-white" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium group-hover/item:text-white transition-colors leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Visual side cards ── */}
          <div className="flex flex-col gap-6">

            {/* Image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex-1 rounded-[2rem] overflow-hidden min-h-[220px] group"
            >
              <img
                src={BMW_IMG}
                alt="BMW detail"
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-3">
                  <Shield className="text-blue-400" size={18} />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Professional Grade</h4>
                <p className="text-xs text-slate-400">Finest ceramics &amp; pH-balanced cleaners.</p>
              </div>
            </motion.div>

            {/* Rating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[2rem] p-6 border border-white/8 bg-[#0d0d0f] flex items-center gap-5"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Star size={22} className="fill-blue-400 text-blue-400" />
              </div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={12} className="fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="font-black text-white text-sm">5-Star Rated Service</p>
                <p className="text-xs text-slate-500 mt-0.5">Trusted by 500+ clients in the Seattle area</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
