import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const mediaData = [
  {
    name: "Case Erector",
    media: [
      { type: 'video', name: 'CEM-111 Final', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'CEM-111 Pidilite Final', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'CEM-114 final', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'CEM-115 Final', path: 'dQw4w9WgXcQ' },
      { type: 'image', name: 'CEM-115 Pidilite', path: 'https://res.cloudinary.com/demo/image/upload/sample' },
    ]
  },
  {
    name: "Case Packer",
    children: [
      {
        name: "IRCP",
        children: [
          {
            name: "AGI",
            media: [
              { type: 'video', name: 'IRCP-AGI Final', path: 'dQw4w9WgXcQ' }
            ]
          },
          {
            name: "Pidilite Inhouse",
            media: [
              { type: 'video', name: 'IRCP - Pidilite Full Line Inhouse Final', path: 'dQw4w9WgXcQ' },
              { type: 'video', name: 'Pidilite Inner Inhouse Final', path: 'dQw4w9WgXcQ' },
              { type: 'video', name: 'Pidilite Shipper Inhouse', path: 'dQw4w9WgXcQ' }
            ]
          },
          {
            name: "Pidilite Site",
            media: [
              { type: 'video', name: 'IRCP-Pidilite Full Line Site Final', path: 'dQw4w9WgXcQ' },
              { type: 'video', name: 'Pidilite Inner Site', path: 'dQw4w9WgXcQ' },
              { type: 'video', name: 'Pidilite Shipper Site', path: 'dQw4w9WgXcQ' }
            ]
          },
          {
            name: "Yeti",
            media: [
              { type: 'video', name: 'IRCP- Yeti 1.5 min', path: 'dQw4w9WgXcQ' }
            ]
          }
        ]
      },
      {
        name: "MRP-100",
        media: [
          { type: 'video', name: 'MRP-100 YBC Final', path: 'dQw4w9WgXcQ' }
        ]
      },
      {
        name: "PPP-140",
        media: [
          { type: 'video', name: 'Pernod Line 7 edited', path: 'dQw4w9WgXcQ' },
          { type: 'video', name: 'PPP-140 Pernod Gwalior Final', path: 'dQw4w9WgXcQ' },
          { type: 'video', name: 'PPP-140 Piramal Jambusar Final', path: 'dQw4w9WgXcQ' },
          { type: 'video', name: 'PPP-140 USL Nacharam Final', path: 'dQw4w9WgXcQ' },
          { type: 'video', name: 'USL Baramati With logo & Music', path: 'dQw4w9WgXcQ' }
        ]
      }
    ]
  },
  {
    name: "Shrink Wrap Machine",
    media: [
      { type: 'video', name: 'Shrink Wrap Machine Cartons', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'SWM 90 Degree Infeed', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'SWM Inline Site', path: 'dQw4w9WgXcQ' }
    ]
  },
  {
    name: "Tetra Case Packer",
    media: [
      { type: 'video', name: 'Card Inserter 1.18 Sec Final', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'Double Layer 1.17 sec Final', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'Harshey with logo & music', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'Packet Turner Final 2', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'UTCP 2 PPT Final', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'UTCP', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'WTCP 2 final PPT', path: 'dQw4w9WgXcQ' }
    ]
  },
  {
    name: "Tetra Conveyors",
    media: [
      { type: 'video', name: 'Conveyor Final', path: 'dQw4w9WgXcQ' },
      { type: 'video', name: 'Conveyors Tetra Packets', path: 'dQw4w9WgXcQ' }
    ]
  },
  {
    name: "Uncaser",
    media: [
      { type: 'video', name: 'Uncaser 1.30Sec', path: 'dQw4w9WgXcQ' }
    ]
  }
];


const MediaPage = () => {
  const [activeCategory, setActiveCategory] = useState(mediaData?.[0]?.name);
  const [expanded, setExpanded] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const matchesSearch = (name) => name.toLowerCase().includes(searchTerm.toLowerCase());

  const renderMedia = (media) => {
    const filtered = media.filter((item) => matchesSearch(item.name));
    if (filtered.length === 0) {
      return <p className="text-gray-500 italic mt-2">No matching media found.</p>;
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
            <div className="p-3 text-center font-medium text-gray-800">{item.name}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderCategory = (category) => {
    if (category.media) return renderMedia(category.media);

    if (category.children) {
      return (
        <div className="space-y-6 mt-4">
          {category.children.map((child) => {
            const childKey = `${category.name}-${child.name}`;
            const isExpanded = expanded[childKey];

            return (
              <div key={childKey} className="border rounded-xl bg-white shadow-sm">
                <div
                  className="flex justify-between items-center p-5 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-t-xl"
                  onClick={() => toggleExpand(childKey)}
                >
                  <h3 className="text-xl font-semibold text-gray-700">{child.name}</h3>
                  {isExpanded ? (
                    <ChevronDown className="text-gray-500" />
                  ) : (
                    <ChevronRight className="text-gray-500" />
                  )}
                </div>

                {isExpanded && (
                  <div className="p-5 border-t space-y-5">
                    {child.media ? (
                      renderMedia(child.media)
                    ) : (
                      child.children?.map((subchild) => {
                        const subKey = `${childKey}-${subchild.name}`;
                        const isSubExpanded = expanded[subKey];

                        return (
                          <div key={subKey} className="border rounded-lg bg-gray-100">
                            <div
                              className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-200"
                              onClick={() => toggleExpand(subKey)}
                            >
                              <h4 className="text-lg font-medium text-gray-800">{subchild.name}</h4>
                              {isSubExpanded ? (
                                <ChevronDown className="text-gray-500" />
                              ) : (
                                <ChevronRight className="text-gray-500" />
                              )}
                            </div>
                            {isSubExpanded && (
                              <div className="px-4 pb-4">{renderMedia(subchild.media)}</div>
                            )}
                          </div>
                        );
                      })
                    )}
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
        {mediaData.map((category) => (
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

      {renderCategory(mediaData.find((cat) => cat.name === activeCategory))}

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
      <Footer/>
    </main>
  );
};

export default MediaPage;
