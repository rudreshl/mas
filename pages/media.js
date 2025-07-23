import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import productsList from "@/data/ProductsList";

const MediaPage = () => {
  const [activeCategory, setActiveCategory] = useState(productsList?.[0]?.name);
  const [expanded, setExpanded] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const updatedProductsList = useMemo(() => {
    let list = [
      ...productsList,

      {
        name: "Tetra Conveyors",

        media: [
          { type: "video", name: "Tetra Conveyors", path: "onqGhlc-23I" },
        ],
      },
      {
        name: "Uncaser",

        media: [{ type: "video", name: "Uncaser", path: "pk_i0HptM0g" }],
      },
    ];
    return [
      {
        name: "All",
        media: list.flatMap((p) => p.media),
        models: list.flatMap((p) => p.models),
      },
      ...list
    ];
  }, [productsList]);

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const matchesSearch = (name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase());

  const renderMedia = (media) => {
    const filtered = media.filter((item) => matchesSearch(item.name));
    if (filtered.length === 0) {
      return (
        <p className="text-gray-500 italic mt-2">No matching media found.</p>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md bg-white transform transition-all duration-300 hover:-translate-y-1"
          >
            {item.type === "video" ? (
              <iframe
                className="w-full h-64"
                src={`https://www.youtube.com/embed/${item.path}`}
                title={item.name}
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={item.path}
                alt={item.name}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => setPreviewImage(item)}
              />
            )}
            <div className="p-3 text-center font-medium text-gray-800">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCategory = (category) => {
    console.log("category------->", category);
    if (category?.media?.length>0) return renderMedia(category.media);

    if (category?.models?.length>0) {
      return (
        <div className="space-y-6 mt-4">
          {category.models.map((child) => {
            const childKey = `${category.name}-${child.name}`;
            const isExpanded = expanded[childKey];

            return (
              <div
                key={childKey}
                className="border rounded-xl bg-white shadow-sm"
              >
                <div
                  className="flex justify-between items-center p-5 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-t-xl"
                  onClick={() => toggleExpand(childKey)}
                >
                  <h3 className="text-xl font-semibold text-gray-700">
                    {child.name}
                  </h3>
                  {isExpanded ? (
                    <ChevronDown className="text-gray-500" />
                  ) : (
                    <ChevronRight className="text-gray-500" />
                  )}
                </div>

                {isExpanded && (
                  <div className="p-5 border-t space-y-5">
                    {child.media
                      ? renderMedia(child.media)
                      : child.models?.map((subchild) => {
                          const subKey = `${childKey}-${subchild.name}`;
                          const isSubExpanded = expanded[subKey];

                          return (
                            <div
                              key={subKey}
                              className="border rounded-lg bg-gray-100"
                            >
                              <div
                                className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-200"
                                onClick={() => toggleExpand(subKey)}
                              >
                                <h4 className="text-lg font-medium text-gray-800">
                                  {subchild.name}
                                </h4>
                                {isSubExpanded ? (
                                  <ChevronDown className="text-gray-500" />
                                ) : (
                                  <ChevronRight className="text-gray-500" />
                                )}
                              </div>
                              {isSubExpanded && (
                                <div className="px-4 pb-4">
                                  {renderMedia(subchild.media)}
                                </div>
                              )}
                            </div>
                          );
                        })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <main className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50 py-16 px-12 mt-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Media Gallery</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-12" />

        <div className="flex flex-wrap gap-3 mb-6">
          {updatedProductsList.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 text-sm font-medium rounded-full shadow-sm border transition-all duration-200 ${
                activeCategory === category.name
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-white text-gray-800 hover:bg-gray-100 border-gray-300"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mb-8 flex flex-row justify-end w-full">
          <input
            type="text"
            placeholder="Search media by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
          />
        </div>

        {renderCategory(
          updatedProductsList.find((cat) => cat.name === activeCategory)
        )}

        {/* Image Preview Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg max-w-3xl w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
                onClick={() => setPreviewImage(null)}
              >
                <X />
              </button>
              <img
                src={previewImage.path}
                alt={previewImage.name}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="p-4 text-center text-gray-800 font-medium">
                {previewImage.name}
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default MediaPage;
