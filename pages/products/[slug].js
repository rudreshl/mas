import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Video } from "lucide-react";
import Image from "next/image";
import productsList from "@/data/ProductsList";
import IndustriesServed from "@/components/IndustriesServed";

export default function ProductDetails() {
  const { query } = useRouter();

  const [productData, setProductData] = useState(null);
  const [activeTab, setActiveTab] = useState("features");
  const [selectedModel, setSelectedModel] = useState("");
  const [previewMedia, setPreviewMedia] = useState(null);
  const [modalMedia, setModalMedia] = useState(null);

  // ✅ Phase 1: Wait for query.slug, then find product
  useEffect(() => {
    if (!query?.slug) return;
    const found = productsList.find((p) => p.slug === query.slug);
    if (found) {
      setProductData(found);
      setSelectedModel(found.models?.[0]?.name || "");
      setPreviewMedia(found.media?.[0] || null);
    }
  }, [query?.slug]);

  // ✅ Phase 2: Once product is ready, safely compute model & features
  const modelData = useMemo(() => {
    return productData?.models?.find((m) => m.name === selectedModel);
  }, [productData, selectedModel]);

  const features = useMemo(() => {
    return modelData?.features?.length
      ? modelData.features
      : productData?.features || [];
  }, [modelData, productData]);

  useEffect(() => {
    setModalMedia(modelData?.media?.[0] || null);
  }, [modelData]);
  // ✅ Still loading? Don't render hooks or UI
  if (!productData || !selectedModel) return null;

  return (
    <div className="bg-gray-100 text-black min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-30 pb-20">
        {/* Page Title */}

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Product Media */}
          <div>
            {previewMedia?.type === "image" ? (
              <img
                src={previewMedia?.path}
                alt=""
                className="h-96 rounded-xl p-4 w-full object-contain bg-white"
              />
            ) : (
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl shadow-md overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${previewMedia?.path}?rel=0`}
                  allowFullScreen
                  title="Video Preview"
                />
              </div>
            )}

            {/* Thumbnails */}
            <div className="flex flex-wrap gap-2 mt-4">
              {productData.media?.map((media, i) => (
                <button
                  key={i}
                  onClick={() => setPreviewMedia(media)}
                  className={`w-16 h-16 rounded-md overflow-hidden border transition-all ${
                    previewMedia?.path === media?.path
                      ? "border-blue-700 ring-2 ring-blue-300 scale-105"
                      : "border-gray-300 hover:ring-1 hover:ring-blue-300"
                  }`}
                >
                  {media.type === "image" ? (
                    <Image
                      src={media?.path}
                      alt=""
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="bg-black text-white flex items-center justify-center w-full h-full">
                      <img
                        src={`https://img.youtube.com/vi/${media.path}/mqdefault.jpg`}
                        alt={media.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-5">
            <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
            {/* Description */}
            <div>
              <h2 className="text-sm font-medium mb-2">Description</h2>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {productData.description}
              </p>
            </div>

            {/* Combined Brochure Section */}
            {(productData.brochure ||
              productData.models?.some((m) => m.brochure)) && (
              <div className="space-y-2">
                <h2 className="text-sm font-medium mb-1">Brochures</h2>

                {/* Product Brochure */}
                {productData.brochure && (
                  <a
                    href={productData.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-1 text-blue-600 underline text-sm transition"
                  >
                    <Download className="w-4 h-4" />
                    Download Product Brochure
                  </a>
                )}

                {/* Model Brochures */}
                {productData.models
                  ?.filter((model) => model.brochure)
                  .map((model, idx) => (
                    <div key={idx}>
                      <a
                        href={model.brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-1 text-blue-600 hover:underline hover:text-blue-700 text-sm transition"
                      >
                        <Download className="w-4 h-4" />
                        {`Download Brochure - ${model.name}`}
                      </a>
                    </div>
                  ))}
                {/* Models */}
                <div className="my-4">
                  <h2 className="text-sm font-medium mb-2">Available Models</h2>
                  <div className="flex flex-wrap gap-2">
                    {productData.models?.map((model) => (
                      <button
                        key={model.name}
                        onClick={() => setSelectedModel(model.name)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                          selectedModel === model.name
                            ? "bg-blue-700 text-white"
                            : "bg-white text-blue-700 border-blue-700 hover:bg-blue-50"
                        }`}
                      >
                        {model.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mb-2 font-semibold">Overview of {modelData?.name}</div>
        <div>
          <div className="border-b mb-4 flex gap-6">
            {["features", "specs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 font-medium border-b-2 transition ${
                  activeTab === tab
                    ? "text-blue-700 border-blue-700"
                    : "text-gray-500 border-transparent hover:text-blue-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "features" ? (
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 mb-6">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          ) : (
            <div className="overflow-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm bg-white rounded-md">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border px-4 py-2">Property</th>
                    <th className="border px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(modelData.specs).map(([key, value], i) => (
                    <tr
                      key={key}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border px-4 py-2">{key}</td>
                      <td className="border px-4 py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>


        {/* Model Media Gallery */}
        {modelData?.media?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-sm font-medium mb-4">Demonstration Videos of {modelData.name}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Media Preview */}
              <div>
                {modalMedia?.type === "image" ? (
                  <Image
                    src={modalMedia?.path}
                    alt=""
                    width={800}
                    height={500}
                    className="rounded-xl w-full object-contain shadow-md"
                  />
                ) : modalMedia?.type === "video" ? (
                  <div className="relative w-full h-0 pb-[56.25%] rounded-xl shadow-md overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${modalMedia?.path}?rel=0`}
                      allowFullScreen
                      title="Model Video"
                    />
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm italic">
                    Click a thumbnail to preview.
                  </p>
                )}
              </div>

              {/* Media Thumbnails */}
              <div className="flex flex-wrap gap-2">
                {modelData.media.map((media, i) => (
                  <button
                    key={i}
                    onClick={() => setModalMedia(media)}
                    className="w-20 h-20 rounded-md overflow-hidden border bg-white shadow hover:ring-2 hover:ring-blue-300 transition"
                  >
                    {media.type === "image" ? (
                      <Image
                        src={media?.path}
                        alt=""
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="bg-black text-white flex items-center justify-center w-full h-full">
                        <img
                          src={`https://img.youtube.com/vi/${media.path}/mqdefault.jpg`}
                          alt={media.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Industries */}
      <IndustriesServed />
      <Footer />
    </div>
  );
}
