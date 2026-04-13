import { motion } from "motion/react";
import { ShieldCheck, Zap, Globe } from "lucide-react";

const MAIN_IMG   = "/images/gallery/work/detailing.webp";
const DETAIL_IMG = "/images/gallery/hero%20section/Close%20up.jpeg";
const INTERIOR   = "/images/gallery/work/auto-detailing-car-interior-eps-2048x1367-1.jpeg";

const features = [
  {
    icon: <Zap size={18} className="text-blue-400" />,
    title: "Mobile Convenience",
    desc: "We come to your home or office — no waiting at shops.",
  },
  {
    icon: <ShieldCheck size={18} className="text-blue-400" />,
    title: "Premium Products",
    desc: "Professional-grade ceramics, pH-balanced cleaners & high-end waxes.",
  },
  {
    icon: <Globe size={18} className="text-blue-400" />,
    title: "Se Habla Español",
    desc: "Proudly serving Seattle's diverse community.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-28 px-4 md:px-6 overflow-hidden bg-[#080808]">
      {/* top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 w-[500px] h-[500px] bg-blue-700/6 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-stretch">

          {/* ── LEFT: large hero image ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-full min-h-[260px] md:min-h-[360px] lg:min-h-[500px] rounded-[2rem] overflow-hidden group">
              <img
                src={MAIN_IMG}
                alt="Professional car detailing"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* bottom label */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/70">Premium Detailing</span>
              </div>
            </div>

            {/* floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 hidden md:block glass-dark rounded-3xl px-6 py-5 border border-white/10 shadow-2xl z-20"
            >
              <p className="text-4xl font-black text-blue-500 leading-none mb-1">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Satisfaction<br />Guaranteed</p>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: copy + image grid ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center pt-8 lg:pt-0"
          >
            {/* label */}
            <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
              Quality Services
            </p>

            {/* heading */}
            <h2 className="text-4xl md:text-5xl xl:text-[3.5rem] font-black text-white leading-[1.05] mb-6">
              Unmatched Quality,<br />Every Time
            </h2>

            {/* body */}
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-[480px]">
              At Elite Auto Spa WA, your vehicle is more than transportation — it's an investment.
              Our mobile service delivers showroom-level results without you ever leaving your driveway.
            </p>

            {/* feature list */}
            <div className="space-y-5 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-0.5 w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">{f.title}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 2-image grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={DETAIL_IMG}
                  alt="Luxury badge close-up"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={INTERIOR}
                  alt="Interior detailing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
