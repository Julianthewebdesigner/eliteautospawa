import { motion } from "motion/react";
import { Phone, Instagram, Send, Calendar, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-28 px-4 md:px-6 bg-[#06060a]">
      {/* top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-blue-700/8 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 bg-blue-900/6 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* container card */}
        <div className="rounded-[2rem] md:rounded-[3rem] border border-white/8 bg-[#0d0d0f] p-6 md:p-14 lg:p-20 relative overflow-hidden">
          {/* inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">

            {/* ── LEFT: info ── */}
            <div>
              <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Book Now</p>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-6">
                Ready For The<br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 80%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Elite Shine?
                </span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-[400px]">
                Experience the ultimate convenience in auto detailing.
                Text, call, or DM us to schedule your appointment today.
              </p>

              <div className="space-y-4 mb-10">
                <motion.a
                  href="tel:2064581243"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-5 p-5 rounded-2xl border border-white/8 bg-white/3 hover:border-blue-500/20 hover:bg-blue-500/5 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 transition-colors shrink-0">
                    <Phone className="text-blue-400 group-hover:text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Call or Text</p>
                    <p className="text-xl font-black text-white">(206) 458-1243</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://instagram.com/eliteautospawa"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-5 p-5 rounded-2xl border border-white/8 bg-white/3 hover:border-pink-500/20 hover:bg-pink-500/5 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:bg-pink-500 transition-colors shrink-0">
                    <Instagram className="text-pink-400 group-hover:text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">DM on Instagram</p>
                    <p className="text-xl font-black text-white">@eliteautospawa</p>
                  </div>
                </motion.a>
              </div>

              <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                <Calendar size={16} className="text-blue-500" />
                Open Mon – Sun &nbsp;·&nbsp; 8:00 AM – 7:00 PM
              </div>
            </div>

            {/* ── RIGHT: form ── */}
            <div className="rounded-[2rem] border border-white/8 bg-[#0a0a0c] p-8 md:p-10">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageSquare size={20} className="text-blue-400" />
                Send a Message
              </h3>

              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/4 border border-white/8 rounded-2xl py-4 px-5 focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder-slate-600 text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-white/4 border border-white/8 rounded-2xl py-4 px-5 focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder-slate-600 text-sm"
                    placeholder="(206) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/4 border border-white/8 rounded-2xl py-4 px-5 focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder-slate-600 text-sm resize-none"
                    placeholder="Tell us about your vehicle and location…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all group text-sm uppercase tracking-wide"
                >
                  Send Booking Request
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
