// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

// export default function AboutUs() {
//   const roadmap = [
//     { year: "2010", milestone: "Founded in Pune" },
//     { year: "2014", milestone: "First OEM Partnership" },
//     { year: "2018", milestone: "Launched PACK-LINE Series" },
//     { year: "2023", milestone: "Served 500+ Clients" },
//   ];
//   return (
//     <main className="bg-gray-100">
//       <Navbar />
//       <h2 className="text-3xl font-bold text-gray-800 mb-2 pt-34 text-center">
//         About Us
//       </h2>
//       <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
     

//       <section className=" mx-12 rounded-xl py-12 px-6 md:px-20 py-12 ">
//         {/* <h2 className="text-2xl font-bold mb-6 text-center w-full">About Company</h2> */}
//         <p className="mb-4 text-base md:text-lg">
//           MAS Systech Pvt. Ltd. is India's home-grown manufacturer of Packaging
//           Solutions and related equipment. Since our inception in 2011, we have
//           upheld our motto of providing{" "}
//           <span className="italic font-semibold">
//             “Global Technology at Local Cost”
//           </span>
//           .
//         </p>
//         <p className="text-base md:text-lg">
//           Located in Pune, India we specialize in the{" "}
//           <span className="font-semibold">End of Line</span> Packaging Solutions
//           with completely in-house designed and manufactured machinery under our{" "}
//           <span className="font-bold">PACKLINE</span> Brand. We take pride in
//           being the OEM suppliers to Blue Chip Companies like{" "}
//           <span className="font-bold">Tetra Pak</span> and{" "}
//           <span className="font-bold">Sidel</span> for the{" "}
//           <span className="font-bold">past 10 years</span>.
//         </p>
//       </section>
//       <section className="px-6 md:px-20 py-12 text-[#001b48] bg-white">
//         <h2 className="text-3xl font-bold text-gray-800 mb-2 py-4 text-center w-full">
//         Director’s Message
//       </h2>
//       <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
     

//         <div className="flex flex-row gap-8">
//           <div className="w-72 rounded-lg overflow-hidden shadow-lg group bg-white relative">
//             <div className="relative">
//               <img
//                 src="ceo.jpeg"
//                 alt="Riddhi Shewani"
//                 className="w-full h-80 object-cover"
//               />
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center">
//                 <h3 className="text-lg font-semibold">Mallikarjun Kulloli </h3>
//                 <p className="text-sm">
//                   Managing Director - MAS SYSTECH PRIVATE LIMITED
//                 </p>
//               </div>
//             </div>

//             {/* Bottom Section: LinkedIn */}
//             <div className="bg-[#1a2f4d] text-white p-4 relative">
//               <a
//                 href="https://linkedin.com/in/riddhi" // Replace with actual LinkedIn URL
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="absolute bottom-4 right-4 text-white"
//               >
//                 {/* <FaLinkedin className="text-2xl hover:text-blue-400 transition-colors duration-200" /> */}
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center ml-8">
//             <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-800 max-w-3xl">
//               <p>
//                 Since inception, we have been driven by a simple yet powerful
//                 mission: to deliver sustainable, efficient, and high-quality
//                 products.
//               </p>
//               <p>
//                 From precision engineering to seamless automation, our solutions
//                 are designed to meet the evolving needs of our customers.
//               </p>
//               <p>
//                 Our value comes from efficient, and innovative packaging
//                 machines that help our clients enhance productivity, reduce
//                 downtime, and ensure product integrity.
//               </p>
//               <p>
//                 Our strength lies in our people — experienced engineers,
//                 technicians, and designers and strong partnership with our
//                 suppliers.
//               </p>
//               <p>
//                 Thank you for your interest in MAS Systech Pvt Ltd. We look
//                 forward to helping you automate and package with precision.
//               </p>
//             </blockquote>
//           </div>
//         </div>
//       </section>
//       {/* <section className="px-6 md:px-20 py-12 bg-gray-50">
//         <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center w-full">
//           Road Map
//         </h2>
//         <div className="space-y-4">
//           {roadmap.map((item) => (
//             <div key={item.year} className="flex items-start gap-4">
//               <span className="text-blue-600 font-bold w-20">{item.year}</span>
//               <span className="text-gray-700">{item.milestone}</span>
//             </div>
//           ))}
//         </div>
//       </section> */}
//       <section className="px-6 md:px-20 py-12">
      
//         <h2 className="text-3xl font-bold text-gray-800 mb-2 py-4 text-center w-full">
//         Certificates
//       </h2>
//       <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
//           {/* Replace with actual images */}
//           <img
//             className="my-4 border-2 border-gray-800"
//             src="/certificates/ISO.jpg"
//             alt="ISO"
//           />
//           {/* <img src="/certificates/iso.png" alt="ISO" className="rounded shadow" />
//         <img src="/certificates/award1.png" alt="Award" className="rounded shadow" />
//         <img src="/certificates/award2.png" alt="Award" className="rounded shadow" />
//         <img src="/certificates/cert1.png" alt="Certificate" className="rounded shadow" /> */}
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// }


import ClientSliders from "@/components/ClientSlider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutUs() {
  const roadmap = [
    { year: "2010", milestone: "Founded in Pune" },
    { year: "2014", milestone: "First OEM Partnership" },
    { year: "2018", milestone: "Launched PACK-LINE Series" },
    { year: "2023", milestone: "Served 500+ Clients" },
  ];
  const clients = [
    "/clients/AgiGlaa.png",
    "/clients/amul.png",
    "/clients/Diageo.png",
    "/clients/Marico_Logo.svg.png",
    "/clients/pri.jpeg",
    "/clients/Pidilite.png",
    "/clients/Piramal.png",
    "/clients/Sula-Logo.jpg",
    "/clients/tetra.png",
    "/clients/Yak Logo.png",
  ];
  return (
    <main className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50 py-16 mt-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">About MAS Systech</h1>
        <p className="text-lg italic text-gray-600">
          "Global Technology at Local Cost"
        </p>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
      </section>

      {/* About Us Section */}
      <section className="mx-6 md:mx-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="mb-4 text-base md:text-lg text-gray-700 leading-relaxed">
            MAS Systech Pvt. Ltd. is India's home-grown manufacturer of Packaging
            Solutions and related equipment. Since our inception in 2011, we have
            upheld our motto of providing <span className="italic font-semibold">“Global Technology at Local Cost”</span>.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Located in Pune, India we specialize in the <span className="font-semibold">End of Line</span> Packaging Solutions
            with completely in-house designed and manufactured machinery under our <span className="font-bold">PACKLINE</span> Brand.
            We take pride in being the OEM suppliers to Blue Chip Companies like <span className="font-bold">Tetra Pak</span> and <span className="font-bold">Sidel</span>
            for the <span className="font-bold">past 10 years</span>.
          </p>
        </div>
        <div>
          <img src="/case_erector.png" alt="About Us" className="h-72 px-10 rounded-xl shadow-md" />
        </div>
      </section>

      {/* Director’s Message */}
      <section className="px-6 md:px-20 py-16 text-[#001b48] bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Director’s Message</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white relative">
            <img
              src="/ceo.jpeg"
              alt="Mallikarjun Kulloli"
              className="w-full h-80 object-contain bg-white rounded-t-xl"
            />
            <div className="bg-[#1a2f4d] text-white p-4 rounded-b-xl">
              <h3 className="text-lg font-semibold">Mallikarjun Kulloli</h3>
              <p className="text-sm">Managing Director - MAS SYSTECH PRIVATE LIMITED</p>
            </div>
          </div>
          <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-800">
            <p className="mb-4">
              Since inception, we have been driven by a simple yet powerful mission: to deliver sustainable, efficient, and high-quality products.
            </p>
            <p className="mb-4">
              From precision engineering to seamless automation, our solutions are designed to meet the evolving needs of our customers.
            </p>
            <p className="mb-4">
              Our value comes from efficient, and innovative packaging machines that help our clients enhance productivity, reduce downtime, and ensure product integrity.
            </p>
            <p className="mb-4">
              Our strength lies in our people — experienced engineers, technicians, and designers and strong partnership with our suppliers.
            </p>
            <p>
              Thank you for your interest in MAS Systech Pvt Ltd. We look forward to helping you automate and package with precision.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Certificates */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Certificates</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img
            className="border-2 border-gray-300 rounded-xl shadow"
            src="/certificates/ISO.jpg"
            alt="ISO"
          />
          {/* Add more certificate images here */}
        </div>
      </section>
      <section className="px-6 md:px-20 py-10 bg-white text-[#001b48]">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Our Clients
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
       
        <ClientSliders clients={clients} />
      </section>
      <Footer />
    </main>
  );
}