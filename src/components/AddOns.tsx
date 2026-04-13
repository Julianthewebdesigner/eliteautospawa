import { motion } from "motion/react";
import {
  Scissors, Wind, Sparkles, Shield, Star,
  Package, AlertTriangle, Settings, Lightbulb, ArrowUpRight,
} from "lucide-react";

const addOns = [
  {
    icon: Scissors,
    name: "Pet Hair Removal",
    price: "$25+",
    description: "Deep removal from seats, carpet & crevices",
    available: true,
  },
  {
    icon: Wind,
    name: "Full Interior Steam Clean",
    price: "$30+",
    description: "Sanitizes & deodorizes all interior surfaces",
    available: true,
  },
  {
    icon: Sparkles,
    name: "Spot Stain Removal",
    price: "$25+",
    description: "Targeted treatment for stubborn spots & spills",
    available: true,
  },
  {
    icon: Shield,
    name: "Ceramic Sealant Protection",
    price: "$25+",
    description: "Long-lasting paint protection with brilliant gloss",
    available: true,
  },
  {
    icon: Star,
    name: "Full Leather Cleaning + Conditioning",
    price: "$30+",
    description: "Clean, restore & condition all leather surfaces",
    available: true,
  },
  {
    icon: Package,
    name: "Personal Belongings / Extensive Trash Removal",
    price: "$30+",
    description: "Full clearout to allow thorough detailing access",
    available: true,
  },
  {
    icon: AlertTriangle,
    name: "Biohazard Removal",
    price: "$75+",
    description: "Puke, mold & other contaminants — fully sanitized",
    available: true,
  },
  {
    icon: Settings,
    name: "Engine Bay Detail",
    price: "",
    description: "Deep engine bay cleaning & degreasing",
    available: false,
  },
  {
    icon: Lightbulb,
    name: "Headlight Restoration",
    price: "",
    description: "Restore clarity, brightness & UV protection",
    available: false,
  },
];

export default function AddOns() {
  return (
    <section id="addons" className="relative py-16 md:py-28 px-4 md:px-6 bg-[#080808] overflow-hidden">
      {/* top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute right-[-10%] top-1/3 w-[500px] h-[500px] bg-blue-700/5 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute left-[-10%] bottom-1/3 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Customize Your Detail</p>
          <h2 className="text-4xl md:text-6xl font-black chrome-text mb-6">ADD-ON SERVICES</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Take your detail further with premium add-ons tailored to your vehicle's specific needs.
          </p>
        </motion.div>

        {/* add-on cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {addOns.map((addon, i) => {
            const Icon = addon.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-2xl p-5 border transition-all duration-500 overflow-hidden ${
                  addon.available
                    ? "border-white/8 bg-[#0d0d0f] hover:border-blue-500/30"
                    : "border-white/5 bg-[#0a0a0c]"
                }`}
              >
                {/* hover glow — available only */}
                {addon.available && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl" />
                )}

                <div className="relative z-10 flex items-start gap-4">
                  {/* icon */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    addon.available
                      ? "bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40"
                      : "bg-white/4 border border-white/6"
                  }`}>
                    <Icon size={19} className={addon.available ? "text-blue-400" : "text-slate-700"} />
                  </div>

                  {/* content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`font-bold text-sm leading-snug transition-colors ${
                          addon.available ? "text-white group-hover:text-blue-50" : "text-slate-600"
                        }`}>
                          {addon.name}
                        </h3>
                        {!addon.available && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-bold uppercase tracking-widest text-blue-400">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      {addon.available && addon.price && (
                        <span className="shrink-0 text-sm font-black text-blue-400 leading-none pt-0.5">
                          {addon.price}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs leading-relaxed transition-colors ${
                      addon.available ? "text-slate-500 group-hover:text-slate-400" : "text-slate-700"
                    }`}>
                      {addon.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black
                       px-8 py-4 rounded-2xl text-sm uppercase tracking-wide transition-colors
                       shadow-xl shadow-blue-600/20"
          >
            Add to Your Booking
            <ArrowUpRight size={16} />
          </a>
          <p className="text-slate-600 text-xs mt-3">Mention your desired add-ons when booking</p>
        </motion.div>

      </div>

      {/* bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
