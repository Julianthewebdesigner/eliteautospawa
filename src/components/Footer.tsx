import { Instagram, Phone, MapPin } from "lucide-react";

const LOGO = "/images/logo.jpg";
const links = ["Services", "Pricing", "About", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#06060a] pt-12 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={LOGO}
                alt="Elite Auto Spa WA logo"
                className="h-12 w-12 rounded-xl object-cover object-center"
              />
              <span className="font-black text-xl tracking-tight chrome-text">
                ELITE AUTO SPA <span className="text-blue-400">WA</span>
              </span>
            </div>

            <p className="text-slate-500 max-w-sm leading-relaxed mb-8 text-sm">
              Premium mobile auto detailing in Kent, Seattle, and surrounding areas.
              Professional-grade care delivered directly to your location.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/eliteautospawa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:2064581243"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {links.map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Phone size={15} className="text-blue-500 shrink-0" />
                (206) 458-1243
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Instagram size={15} className="text-blue-500 shrink-0" />
                @eliteautospawa
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <MapPin size={15} className="text-blue-500 shrink-0" />
                Kent &amp; Seattle, WA
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} Elite Auto Spa WA. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-700 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-700 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
