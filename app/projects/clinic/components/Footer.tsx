import Link from "next/link";

const WHATSAPP =
  "https://wa.me/919752422686?text=Hi%20I%20want%20to%20book%20a%20clinic%20appointment";

const CALL = "tel:+919752422686";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      {/* CTA SECTION */}
      <div className="bg-blue-600 text-center py-10 px-4">
        <h2 className="text-2xl font-bold mb-3">
          Need Doctor Consultation?
        </h2>
        <p className="text-sm mb-5">
          Book your appointment instantly on WhatsApp or call us directly.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            className="bg-green-500 px-6 py-3 rounded-lg font-bold"
          >
            Book on WhatsApp
          </a>
          <a
            href={CALL}
            className="bg-white text-black px-6 py-3 rounded-lg font-bold"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="grid md:grid-cols-4 gap-8 px-6 py-10 text-sm">
        {/* ABOUT */}
        <div>
          <h3 className="font-bold mb-3">About Clinic</h3>
          <p>
            Trusted clinic providing quality healthcare services with modern
            treatment, experienced doctors, and patient-first approach.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/projects/clinic">Home</Link></li>
            <li><Link href="/projects/clinic/services">Services</Link></li>
            <li><Link href="/projects/clinic/appointment">Appointment</Link></li>
            <li><Link href="/projects/clinic/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul className="space-y-2">
            <li>General Checkup</li>
            <li>Dental Care</li>
            <li>Skin Treatment</li>
            <li>Emergency Care</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <p>📍 Korba, Chhattisgarh</p>
          <p>📞 +91 97524 22686</p>
          <p>⏰ Mon–Sat: 9 AM – 8 PM</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs py-4 border-t border-gray-700">
        © 2026 ClinicCare. All rights reserved.
      </div>
    </footer>
  );
}