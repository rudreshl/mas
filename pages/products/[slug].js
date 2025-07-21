import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState("features");
  const [selectedModel, setSelectedModel] = useState("CEM-111");

  const productData = {
    image: "/case_erector.png",
    name: "Case Erector",
    slug: "case-erector",
    description:
      "Our Case Erectors provide fast, reliable box forming for various industrial applications. Built for speed and precision.",
    models: [
      {
        name: "CEM-111",
        image: "/case_erector.png",
        specs: {
          Speed: "20 boxes/min",
          Power: "220V, 1.5kW",
          Dimensions: "2000 x 1200 x 1800 mm",
          Weight: "600kg",
        },
      },
      {
        name: "CEM-114",
        image: "/case_erector.png",
        specs: {
          Speed: "25 boxes/min",
          Power: "220V, 2.0kW",
          Dimensions: "2200 x 1300 x 1900 mm",
          Weight: "650kg",
        },
      },
    ],
    brochure: "/pdfs/case-erector-brochure.pdf",
    industries: ["Food & Beverage", "Pharmaceutical", "FMCG", "Liquor"],
  };

  const selected = productData.models.find(m => m.name === selectedModel);

  return (
    <div className="">
      <Navbar/>
    <div className="max-w-7xl mx-auto p-6 space-y-6 mt-24">
      <p className="text-sm text-gray-500">Home / Products / {productData.name}</p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-3xl font-bold">{productData.name}</h1>
        <div className="flex space-x-2 mt-4 md:mt-0">
          {productData.models.map((model) => (
            <button
              key={model.name}
              onClick={() => setSelectedModel(model.name)}
              className={`px-4 py-2 rounded border ${
                selectedModel === model.name
                  ? "bg-orange-600 text-white"
                  : "bg-white hover:bg-orange-50"
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <img
            src={selected.image}
            alt={selected.name}
            className="rounded shadow-md"
          />
          <div className="flex gap-2">
            <img src="/thumb1.jpg" className="w-20 h-20 object-cover rounded cursor-pointer hover:scale-105 transition" />
            <video src="/video1.mp4" controls className="w-20 h-20 object-cover rounded hover:scale-105 transition" />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">{productData.description}</p>

          <div className="grid grid-cols-2 gap-4">
            {Object.entries(selected.specs).map(([key, value]) => (
              <div key={key}>
                <h4 className="text-sm font-semibold">{key}</h4>
                <p>{value}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-1">Industries Served</h4>
            <ul className="list-disc list-inside text-gray-700">
              {productData.industries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </div>

          <a
            href={productData.brochure}
            download
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition"
          >
            Download Brochure
          </a>
        </div>
      </div>

      <div>
        <div className="flex border-b mt-8">
          <button
            onClick={() => setActiveTab("features")}
            className={`px-4 py-2 font-medium ${
              activeTab === "features"
                ? "border-b-2 border-orange-600 text-orange-600"
                : "text-gray-600"
            }`}
          >
            FEATURES
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-4 py-2 font-medium ${
              activeTab === "specs"
                ? "border-b-2 border-orange-600 text-orange-600"
                : "text-gray-600"
            }`}
          >
            SPECIFICATIONS
          </button>
        </div>

        {activeTab === "features" && (
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
            <li>Fast and accurate box forming</li>
            <li>Designed for industrial efficiency</li>
            <li>Low maintenance and durable build</li>
          </ul>
        )}

        {activeTab === "specs" && (
          <div className="overflow-auto mt-4">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border px-4 py-2">Property</th>
                  <th className="border px-4 py-2">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selected.specs).map(([key, value]) => (
                  <tr key={key}>
                    <td className="border px-4 py-2">{key}</td>
                    <td className="border px-4 py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
}