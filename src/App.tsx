/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080808] selection:bg-blue-500/30">
      {/* Global Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-700/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Gallery />
          <Services />
          <Pricing />
          <ServiceArea />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
