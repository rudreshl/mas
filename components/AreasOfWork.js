  'use client';

  import Image from "next/image";
  
  const products = [
    {
      title: "Case Erector",
      img: "/case_erector.png",
      description:
        "MAS SYSTECH is a leading packaging equipment SUPPLIER. We provide our clients with ALL TYPES of case erector. Feel free to contact us if you need recommendations or more information on specific products.",
    },
    {
      title: "Case Packer",
      img: "/case_packer.png",
      description:
        "MAS SYSTECH is a leading packaging equipment SUPPLIER. We provide our clients with ALL TYPES of case erector. Feel free to contact us if you need recommendations or more information on specific products.",
    },
    {
      title: "Case Sealer",
      img: "/case_sealer.png",
      description:
        "Imagine a world where your product shines on the shelf. MAS SYSTECH’s Shrink Wrapping Machine encapsulates items with precision, ensuring standout visibility among competitors.",
    },
    {
      title: "Palletizer",
      img: "/palletizer.png",
      description:
        "MAS SYSTECH is a leading packaging equipment SUPPLIER. We provide our clients with ALL TYPES of case erector. Feel free to contact us if you need recommendations or more information on specific products.",
    },
    {
      title: "Shrink Wrapping Machine",
      img: "/shrink_wrapping_machine.png",
      description:
        "In the realm of packaging, MAS SYSTECH shines by offering unparalleled adaptability. Our Carton Sealer seamlessly tackles boxes of all dimensions, ensuring every product, big or small, gets its perfect seal.",
    },
    {
      title: "Tetra Case Packer",
      img: "/tetra_case_packer.png",
      description:
        "In the realm of packaging, MAS SYSTECH shines by offering unparalleled adaptability. Our Carton Sealer seamlessly tackles boxes of all dimensions, ensuring every product, big or small, gets its perfect seal.",
    },
  ];
  
  export default function AreasOfWork(props) {
    return (
      <section className="bg-[#f9f9f9] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{props.title}</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Are you looking to improve ROI in your production and packaging processes? MAS SYSTECH can provide
            simple, efficient packaging machines to meet your needs.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="group transition duration-50 transform hover:-translate-y-2 p-6 hover:bg-white hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-300 relative"
              >
                <div className="relative w-full h-96 mb-6 bg-white">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="p-10 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
  
                {/* Hover-visible button */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
                    Learn More »
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  