// pages/products/index.tsx
import AreasOfWork from "@/components/AreasOfWork";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      <Navbar/>
      <AreasOfWork title="Our Products" />
      <Footer/>
    </div>
  );
}