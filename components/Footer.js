import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-300 pb-10">

        {/* Logo and Address */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">MAS SYSTECH PVT LTD</h1>
          <p className="mb-4 text-sm leading-relaxed">
            D-241, Chakan Industrial Area, Phase II, Warale, Khed,<br />
            Pune - 410507
          </p>
          <p className="text-sm mb-1">📞 +91 92840 35561</p>
          <p className="text-sm mb-4">✉️ sales@massystech.com</p>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-blue-600 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            {["About", "History", "Our Team", "Certificates", "Suppliers & Clients", "Events"].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-blue-600 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-3">PRODUCTS</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Case Erector",
              "Case Sealer",
              "Shrink Wrap Machine",
              "Tetra Conveyors",
              "Case Packer",
              "Palletizer",
              "Tetra Case Packer",
              "Uncaser"
            ].map((item) => (
              <li key={item}>
                <a href={`/products/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-blue-600 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-3">SOLUTIONS</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Logistics Industry",
              "Digital Communications",
              "Commodity Industry",
              "Hardware Industry",
              "Beverage Industry",
              "Pharmaceutical Industry"
            ].map((item) => (
              <li key={item}>
                <a href={`/solutions/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-blue-600 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-3">SUPPORT</h3>
          <ul className="space-y-2 text-sm">
            {["Service & Parts", "News", "Contact Us", "Get A Quote"].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-blue-600 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-600 pt-6">
        © 2025 MAS SYSTECH PVT LTD. All rights reserved.{" "}
        <a href="/sitemap.xml" className="text-gray-800 hover:text-blue-600">sitemap.xml</a>
      </div>
    </footer>
  );
}
