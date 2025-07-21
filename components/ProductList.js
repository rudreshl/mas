// components/ProductList.tsx
import Link from "next/link";

const products = [
  { name: "Case Erector", slug: "case-erector", image: "/case_erector.png" },
  { name: "Case Packer", slug: "case-packer", image: "/case_erector.png" },
  { name: "Case Sealer", slug: "case-sealer", image: "/case_erector.png" },
  { name: "Palletizer", slug: "palletizer", image: "/case_erector.png" },
  { name: "Shrink Wrap Machine", slug: "shrink-wrap-machine", image: "/case_erector.png" },
  { name: "Tetra Case Packer", slug: "tetra-case-packer", image: "/case_erector.png" },
  { name: "Tetra Conveyors", slug: "tetra-conveyors", image: "/case_erector.png" },
  { name: "Uncaser", slug: "uncaser", image: "/case_erector.png" },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <a href={`/products/${product.slug}`} key={product.slug}>
          <div className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3 text-lg font-semibold">
              {product.name}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
