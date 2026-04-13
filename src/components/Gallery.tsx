import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const WORK_IMAGES = [
  {
    src: "/images/gallery/work/Your-Premier-Car-Detailing-Destination-in-Kent-WA-Image-01-Detail-Central-2024.jpg",
    label: "Exterior Polish",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/gallery/work/Tyre_Scrubbers-12-min.webp",
    label: "Tire & Rim Detail",
    span: "",
  },
  {
    src: "/images/gallery/hero%20section/rims.jpg",
    label: "Wheel Restoration",
    span: "",
  },
  {
    src: "/images/gallery/hero%20section/headlights.avif",
    label: "Headlight Clarity",
    span: "",
  },
  {
    src: "/images/gallery/work/1.jpeg",
    label: "Full Detail",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-16 md:py-28 px-4 md:px-6 bg-[#06060a]">
      {/* top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/5 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Our Work</p>
            <h2 className="text-4xl md:text-6xl font-black chrome-text leading-tight">
              See The<br />Transformation
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-500 max-w-xs text-sm leading-relaxed md:text-right"
          >
            Every vehicle leaves our care looking better than it arrived.
            These are real results from real clients across the Seattle area.
          </motion.p>
        </div>

        {/* masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[210px] lg:auto-rows-[240px] gap-3 md:gap-4">
          {WORK_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
              />

              {/* overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* red accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-white">{img.label}</span>
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <ArrowUpRight size={13} className="text-blue-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl glass border border-white/8"
        >
          <div>
            <p className="text-white font-black text-2xl md:text-3xl mb-1">Transform Your Car Today</p>
            <p className="text-slate-500 text-sm">Mobile detailing at your home or office — Seattle &amp; Kent, WA.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-wide px-8 py-4 rounded-2xl transition-colors shadow-lg shadow-blue-500/20"
          >
            Book Now
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>

      {/* bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
