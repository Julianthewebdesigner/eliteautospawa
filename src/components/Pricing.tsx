import { motion } from "motion/react";
import { Car, Truck, Zap, Clock, Check } from "lucide-react";

const plans = [
  {
    icon: <Car size={28} />,
    title: "Sedan / Coupe",
    price: "$200",
    desc: "Perfect for daily drivers and luxury sports cars.",
    features: ["Full exterior wash", "Interior vacuum", "Window cleaning", "Tire dressing"],
  },
  {
    icon: <Truck size={28} />,
    title: "SUV / Truck",
    price: "$225",
    desc: "Deep cleaning for larger family and utility vehicles.",
    features: ["Full exterior wash", "Interior vacuum", "Window cleaning", "Tire dressing"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-16 md:py-28 px-4 md:px-6 bg-[#06060a] overflow-hidden">
      {/* top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-700/5 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Pricing</p>
            <h2 className="text-4xl md:text-6xl font-black chrome-text mb-6">TRANSPARENT RATES</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Premium mobile detailing at competitive prices. No hidden fees — just elite results.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          {/* Standard plans */}
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-[2rem] p-8 border border-white/8 bg-[#0d0d0f] group transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                {plan.icon}
              </div>

              <h3 className="text-xl font-black text-white mb-2">{plan.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{plan.desc}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-400">
                    <Check size={14} className="text-blue-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="text-5xl font-black text-white mb-6">{plan.price}</p>
                <a
                  href="#contact"
                  className="block w-full py-4 rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 text-white font-bold text-center transition-all text-sm uppercase tracking-wide"
                >
                  Book This Plan
                </a>
              </div>
            </motion.div>
          ))}

          {/* Promo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="relative rounded-[2rem] p-8 flex flex-col overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 shadow-2xl shadow-blue-500/20 group sm:col-span-2 lg:col-span-1"
          >
            {/* animated shine */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-white text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
                <Zap size={11} className="fill-white" />
                Limited Offer
              </div>

              <h3 className="text-2xl font-black text-white mb-2">ANY VEHICLE</h3>
              <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                Our most popular promo. Limited spots available each week!
              </p>

              <ul className="space-y-3 mb-8">
                {["Full exterior + interior", "All vehicle sizes", "Lock in the price now", "No hidden fees"].map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-blue-100">
                    <Check size={14} className="text-white shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex items-baseline gap-3 mb-2">
                  <p className="text-5xl font-black text-white">$149</p>
                  <p className="text-xl text-blue-300/70 line-through font-bold">$225</p>
                </div>
                <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-widest mb-6">
                  <Clock size={13} />
                  Book now to lock in price
                </div>
                <a
                  href="#contact"
                  className="block w-full py-4 rounded-xl bg-white text-blue-600 font-black text-center shadow-xl hover:bg-blue-50 transition-colors text-sm uppercase tracking-wide"
                >
                  Claim Promo
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* urgency strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 text-sm font-medium flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Hurry — only 4 promo spots remain this week.
          </p>
        </motion.div>

      </div>

      {/* bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
