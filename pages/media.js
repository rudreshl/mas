import { useMemo, useState } from "react";
import { X } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import productsList from "@/data/ProductsList";

const MediaPage = () => {
  const [activeCategory, setActiveCategory] = useState(productsList?.[0]?.name);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const updatedProductsList = useMemo(() => {
    let list = [
      ...productsList,
      {
        name: "Tetra Conveyors",
        media: [{ type: "video", name: "Tetra Conveyors", path: "onqGhlc-23I" },   { type: "video", name: "Tetra Conveyor- High Speed Line", path: "EWG1wZEwLi4" },
        { type: "video", name: "Tetra Conveyor- Brick Packet", path: "naYeaEZpS6o" },],
      },
      {
        name: "Uncaser",
        media: [{ type: "video", name: "Uncaser", path: "pk_i0HptM0g" }],
      },
    ];
    return [
      {
        name: "All",
        media: list.flatMap((p) => p.media || []),
        models: list.flatMap((p) => p.models || []),
      },
      ...list,
    ];
  }, [productsList]);

  const matchesSearch = (name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase());

  const renderCategory = (category) => {
    const allMedia = [];

    // Product-level media
    if (category.media?.length) {
      allMedia.push(...category.media);
    }

    // Model-level media
    category.models?.forEach((model) => {
      if (model.media?.length) {
        allMedia.push(...model.media);
      }
      model.models?.forEach((subModel) => {
        if (subModel.media?.length) {
          allMedia.push(...subModel.media);
        }
      });
    });

    const filtered = allMedia.filter((m) => matchesSearch(m.name));

    if (!filtered.length) {
      return <p className="text-gray-500 italic mt-2">No matching media found.</p>;
    }

    if (!selectedMedia || !filtered.some(m => m.path === selectedMedia.path)) {
      setSelectedMedia(filtered[0]);
    }

    return (
      <div className="mt-8">
        {/* Large Media Preview */}
        {selectedMedia && (
          <div className="mb-6 border rounded-xl bg-white p-4 shadow-sm">
            {selectedMedia.type === "video" ? (
              <iframe
                className="w-full h-96 rounded"
                src={`https://www.youtube.com/embed/${selectedMedia.path}`}
                title={selectedMedia.name}
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={selectedMedia.path}
                alt={selectedMedia.name}
                className="w-full h-96 object-contain rounded"
              />
            )}
            <div className="mt-2 text-center font-semibold text-gray-800">
              {selectedMedia.name}
            </div>
          </div>
        )}

        {/* Thumbnails */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMedia(item)}
              className={`border rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition transform hover:-translate-y-1 ${
                selectedMedia?.path === item.path ? "ring-2 ring-orange-500" : ""
              }`}
            >
              {item.type === "video" ? (
                <img
                          src={`https://img.youtube.com/vi/${item.path}/mqdefault.jpg`}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
              ) : (
                <img
                  src={item.path}
                  alt={item.name}
                  className="w-full h-28 object-cover"
                />
              )}
              <div className="text-sm text-center py-1 font-medium text-gray-700">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="bg-gray-100">
      <Navbar />

      <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50 py-16 px-12 mt-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Media Gallery</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-12" />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {updatedProductsList.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 text-sm font-medium rounded-full shadow-sm border transition-all duration-200 ${
                activeCategory === category.name
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-white text-gray-800 hover:bg-gray-100 border-gray-300"
              }`}
              onClick={() => {
                setActiveCategory(category.name);
                setSelectedMedia(null);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-8 flex flex-row justify-end w-full">
          <input
            type="text"
            placeholder="Search media by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
          />
        </div>

        {/* Media Section */}
        {renderCategory(
          updatedProductsList.find((cat) => cat.name === activeCategory)
        )}
      </section>

      <Footer />
    </main>
  );
};

export default MediaPage;
