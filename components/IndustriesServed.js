import { Package, Droplet, ShoppingCart, FlaskConical, Truck, Milk, SprayCan, Cog, Home, SoapDispenserDroplet } from "lucide-react";

const industries = [
  { name: "Food", icon: ShoppingCart },
  { name: "Beverage", icon: Milk },
  { name: "Home Care", icon: Home },
  { name: "Personal Care", icon: SoapDispenserDroplet },
  { name: "Edible Oils", icon: Droplet },
  { name: "Lube Oil", icon: Cog },
  { name: "Paints & Chemicals", icon: FlaskConical },
  { name: "Agrochemicals", icon: SprayCan },
];

export default function IndustriesServed() {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-100" id="industries">
      <h2 className="text-3xl font-semibold text-center mb-10 text-[#001b48]">Industries Served</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center justify-center text-center group"
          >
            <industry.icon className="w-4 h-4 mb-4 text-[#001b48] group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-medium text-gray-800">{industry.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
