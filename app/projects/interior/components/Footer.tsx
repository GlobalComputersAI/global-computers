import Link from "next/link";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20am%20interested%20in%20interior%20design%20services.%20Please%20contact%20me.";
const CALL = "tel:+919752422686";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      
      {/* TOP CTA */}
      <div className="px-6 py-12 text-center border-b border-slate-700">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Transform Your Space with Modern Interior Design
        </h2>
        <p className="text-slate-300 mb-6">
          Get expert consultation, custom design, and complete execution for your home, office, or shop.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={WHATSAPP}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold shadow-lg"
          >
            💬 Get Quote on WhatsApp
          </a>
          <a
            href={CALL}
            className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black"
          >
            📞 Call Now
          </a>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="px-6 py-12 grid md:grid-cols-4 gap-10 text-sm">
        
        {/* BRAND */}
        <div>
          <h3 className="text-lg font-bold mb-4">
            Interior<span className="text-indigo-400">Design</span>
          </h3>
          <p className="text-slate-400">
            Premium interior design solutions for homes, offices, and commercial spaces.
            From design to execution — everything handled professionally.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li><Link href="/projects/interior">Home</Link></li>
            <li><Link href="/projects/interior/projects">Projects</Link></li>
            <li><Link href="/projects/interior/services">Services</Link></li>
            <li><Link href="/projects/interior/billing">Estimate</Link></li>
            <li><Link href="/projects/interior/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Home Interior Design</li>
            <li>Modular Kitchen</li>
            <li>Bedroom & Wardrobe</li>
            <li>Office Interior</li>
            <li>False Ceiling & Lighting</li>
            <li>Turnkey Interior Execution</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-slate-400">
            <li>📍 Serving: Korba, Bilaspur, Raipur & All India</li>
            <li>
              📞 <a href={CALL} className="hover:underline">+91 9752422686</a>
            </li>
            <li>
              💬 <a href={WHATSAPP} className="hover:underline">WhatsApp Chat</a>
            </li>
            <li>🕒 Mon - Sat: 9 AM – 8 PM</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs text-slate-500 border-t border-slate-700 py-4">
        © {new Date().getFullYear()} Interior Design. All rights reserved. <br />
        Interior Design Services in Korba | Bilaspur | Raipur | Chhattisgarh | India
      </div>
    </footer>
  );
}