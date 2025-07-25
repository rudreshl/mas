import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-800 pt-12 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-300 pb-10">

        {/* Logo and Address */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-white mb-2">MAS SYSTECH PVT LTD</h1>
          <p className="mb-4 text-sm leading-relaxed text-slate-200">
            D-241, Chakan Industrial Area, Phase II, Warale, Khed,<br />
            Pune - 410507
          </p>
          <p className="text-sm mb-1 text-slate-200">📞 +91 92840 35561</p>
          <p className="text-sm mb-4 text-slate-200">✉️ sales@massystech.com</p>
          <div className="flex gap-4 mt-2">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white text-slate-200 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white text-slate-200 transition-colors">
              <Twitter size={20} />
            </a> */}
            <a href="https://in.linkedin.com/company/mas-systech-private-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white text-slate-200 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://youtube.com/@user-ul8xd3hw7d?si=PFZeTDpPuBcX73M4" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white text-slate-200 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            {[
              {name:"Home",slug:"/home"},
              {name:"About us",slug:"/about-us"},
              {name:"Contact us",slug:"/contact"},
              {name:"Products",slug:"/products"},
              {name:"Services",slug:"/services"},
              {name:"Media Gallery",slug:"/media"}].map((item) => (
              <li key={item}>
                <Link href={`/${item.slug}`} className="text-slate-200 hover:text-white transition-colors">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-white font-semibold mb-3">PRODUCTS</h3>
          <ul className="space-y-2 text-sm">
            {[
              {name:"Case Erector",slug:"case-erector",image:"/case_erector.png"},
              {name:"Case Sealer", slug:"case-sealer",image:"/case_sealer.png"},
              {name:"Shrink Wrap Machine",slug:"shrink-wrap-machine",image:"/shrink_wrapping_machine.png"},
              {name:"Tetra Conveyors",slug:"tetra-conveyors",image:"/tetra_conveyors.png"},
              {name:"Case Packer",slug:"case-packer",image:"/case_packer.png"},
              {name:"Palletizer",slug:"palletizer",image:"/palletizer.png"},
            ].map((item) => (
              <li key={item}>
                <Link href={`/products/${item.slug}`} className="text-slate-200 hover:text-white transition-colors">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h3 className="text-white font-semibold mb-3">SOLUTIONS</h3>
          <ul className="space-y-2 text-sm">
            {[
               "Food",
               "Beverage",
               "Home Care" ,
               "Personal Care" ,
               "Edible Oils" ,
               "Lube Oil",
               "Paints & Chemicals" ,
               "Agrochemicals" ,
           
            ].map((item) => (
              <li key={item}>
                <div className="text-slate-200 hover:text-white transition-colors">{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-slate-200 pt-6">
        © 2025 MAS SYSTECH PVT LTD. All rights reserved.{" "}
        <a href="/sitemap.xml" className="text-slate-200 hover:text-white">sitemap.xml</a>
      </div>
    </footer>
  );
}
