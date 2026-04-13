import { motion } from "motion/react";
import {
  CalendarDays, Clock, AlertCircle, DollarSign,
  Car, Truck, Target, CreditCard, Check,
} from "lucide-react";

const policies = [
  {
    icon: CalendarDays,
    title: "Booking Policy",
    items: [
      "Appointments required in advance",
      "Same-day bookings subject to availability",
      "Provide vehicle type & condition",
      "Deposit may be required",
    ],
  },
  {
    icon: Clock,
    title: "Arrival & Time",
    items: [
      "Arrival within scheduled window",
      "Service time typically 2–4 hours",
      "Possible delays based on condition",
    ],
  },
  {
    icon: AlertCircle,
    title: "Cancellation Policy",
    items: [
      "24-hour notice required",
      "Late cancellations may result in a fee",
    ],
  },
  {
    icon: DollarSign,
    title: "Pricing & Condition",
    items: [
      "Starting rates listed",
      "Final price based on size & condition",
      "Heavily soiled vehicles may incur extra fees",
    ],
  },
  {
    icon: Car,
    title: "Vehicle Condition",
    items: [
      "Remove personal items",
      "Excess clutter may affect service",
      "Rescheduling for bad weather",
      "Covered areas preferred",
    ],
  },
  {
    icon: Truck,
    title: "Mobile Service Setup",
    items: [
      "We bring our own equipment",
      "Need safe space to work",
    ],
  },
  {
    icon: Target,
    title: "Results Disclaimer",
    items: [
      "Near-perfect results are our goal",
      "Some stains/damage may be permanent",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment",
    items: [
      "Payment due at completion",
      "Accept: Cash, Zelle, Apple Pay",
    ],
  },
];

export default function Policies() {
  return (
    <section id="policies" className="relative py-16 md:py-28 px-4 md:px-6 bg-[#06060a] overflow-hidden">
      {/* top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-700/5 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Transparency First</p>
          <h2 className="text-4xl md:text-6xl font-black chrome-text mb-6">OUR POLICIES</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We believe in clear expectations and honest communication.
            Here's everything you need to know before booking your detail.
          </p>
        </motion.div>

        {/* policy cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {policies.map((policy, i) => {
            const Icon = policy.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl p-6 border border-white/8 bg-[#0d0d0f] hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                    <Icon size={18} className="text-blue-400" />
                  </div>

                  <h3 className="font-bold text-white text-sm mb-3 group-hover:text-blue-100 transition-colors">
                    {policy.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {policy.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors">
                        <div className="mt-[3px] w-3 h-3 rounded-full border border-blue-500/30 flex items-center justify-center shrink-0">
                          <Check size={7} className="text-blue-500" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* footer quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-5 px-8 py-4 rounded-2xl border border-white/8 bg-[#0d0d0f]">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/50" />
            <p className="text-slate-400 text-sm font-medium italic">
              "We don't rush details — we perfect them."
            </p>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
        </motion.div>

      </div>

      {/* bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
