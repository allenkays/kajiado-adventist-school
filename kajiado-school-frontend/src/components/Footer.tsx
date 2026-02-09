import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lightBrown text-cream mt-12">
      <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* School Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">
            Karura Adventist School
          </h3>
          <p className="text-sm leading-relaxed">
            Education for Eternity.<br />
            A Seventh-day Adventist institution offering holistic,
            competency-based education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/admissions" className="hover:underline">Admissions</Link></li>
            <li><Link href="/curriculum" className="hover:underline">Curriculum</Link></li>
            <li><Link href="/student-life" className="hover:underline">Student Life</Link></li>
            <li><Link href="/parents" className="hover:underline">Parents</Link></li>
          </ul>
        </div>

        {/* School Sections */}
        <div>
          <h4 className="font-semibold mb-3">School Sections</h4>
          <ul className="space-y-2 text-sm">
            <li>Play Group (PP1 & PP2)</li>
            <li>Primary School (Grade 1–6)</li>
            <li>Junior School (Grade 7–9)</li>
            <li>Senior School (Grade 10–12)</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>Nairobi, Kenya</li>
            <li>📞 +254 7XX XXX XXX</li>
            <li>✉️ info@karuraadventistschool.ac.ke</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-darkBrown text-center py-3 text-sm">
        © {new Date().getFullYear()} Karura Adventist School. All rights reserved.
      </div>
    </footer>
  );
}
