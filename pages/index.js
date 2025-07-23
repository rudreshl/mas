import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import CountUp from "@/components/CountUp";
import AreasOfWork from "@/components/AreasOfWork";

import { SquareArrowOutUpRight } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const products = [
    {
      name: "Case Erector",
      image: "/case_erector.png",
    },
    {
      name: "Case Sealer",
      image: "/case_sealer.png",
    },
    {
      name: "Shrink Wrapping Machine",
      image: "/shrink_wrapping_machine.png",
    },
    {
      name: "Case Erector",
      image: "/case_erector.png",
    },
    {
      name: "Case Sealer",
      image: "/case_sealer.png",
    },
    {
      name: "Shrink Wrapping Machine",
      image: "/shrink_wrapping_machine.png",
    },
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
  const taglines = [
    "Local Cost",
    "Your Doorstep",
    "Smart Value",
    "Competitive Pricing",
    "Unmatched Value",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 500); // change every 3 seconds

    return () => clearInterval(timer);
  }, []);
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 min-h-screen w-full`}
    >
      <Navbar transparentOnTop={true} />
      <div className="h-full w-full">
        {/* <video
          muted
          autoPlay
          loop
          className="w-full max-h-screen object-fill brightness-110 invert-20"
        >
          <source src="/videos/product.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="relative h-[100vh] overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/videos/product.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Blue Tint Overlay */}
          <div className="absolute inset-0 bg-blue-900/50 bg-opacity-60 z-10" />

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end items-start text-white px-4 md:px-12">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              Global Technology at <br />
              <span className="text-white text-3xl md:text-5xl text-left mt-2">
                {taglines[index]}
              </span>
            </h1>

            {/* Stats */}
            <div className="mt-10 flex flex-col items-end pb-10 sm:flex-row gap-6">
              <div className="bg-blue-600 hover:bg-blue-700 transition rounded-xl p-6 w-64 shadow-xl text-center">
                <p className="text-4xl font-bold">
                  <CountUp number={23} speed={50} /> +
                </p>
                <p className="text-sm mt-2">Countries</p>
              </div>
              <div className="bg-blue-800 hover:bg-blue-900 transition rounded-xl p-6 w-64 shadow-xl text-center">
                <p className="text-4xl font-bold">
                  <CountUp number={251} speed={10} /> +
                </p>
                <p className="text-sm mt-2">Installations</p>
              </div>
              <div>
                <button className="animate-pulse bg-white flex flex-row items-center text-[#001b48] px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition">
                  Explore Products
                  <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* CTA Button */}
          </div>
        </div>
      </div>

      <AreasOfWork title={"Areas of Work"} />
      <section className="px-6 md:px-20 py-10 bg-[#001b48] text-white font-sans grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center gap-2 mb-6 col-span-2">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          About Us
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
     
        </div>
        <div className="bg-white rounded-tl-[270] rounded-bl-[160] rounded-br-[270] rounded-tr-[160]">
          {/* <Image
            src="/aboutus.jpg" // <- You need to put the image in public folder
            alt="Paper plane"
            width={240}
            height={240}
            className="mx-auto md:mx-0"
          /> */}
        </div>
        <div>
          <div className="space-y-5 text-sm md:text-base leading-relaxed max-w-4xl">
            <p>
              We, <span className="font-bold">MAS SYSTECH PVT LTD</span>, are a
              Pune, India based company involved in design, manufacturing and
              supply of Packaging Machines and related equipment's.
            </p>

            <p>
              Our Packaging Machines & Solutions serve the need of regional and
              local companies in Food, Beverages, Liquor, Glass, Edible Oil,
              Personal Care and Home Care sectors. We take pride in being OEM
              suppliers to blue chip companies like{" "}
              <span className="font-semibold">Tetra Pak</span>.
            </p>

            <p>
              Our focus is mainly on the{" "}
              <span className="font-bold">"END OF LINE"</span> packaging
              machines, which we have introduced under the{" "}
              <span className="font-bold">PACK-LINE</span> series.
            </p>

            <p>
              We also offer customized packaging solutions to our customers to
              improve productivity and reduced wastage.
            </p>

            <p>
              We boast of a highly skilled technical team equipped with advanced
              design software's, good production and assembly facilities, a
              well-defined and established QC & QA system to deliver high
              quality machines backed with excellent after sales support.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 py-10 bg-white text-[#001b48]">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Take a look at our clients
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Are you looking to improve ROI in your production and packaging
          processes? MAS SYSTECH can provide simple, efficient packaging machines to
          meet your needs.
        </p>
        <div className="grid grid-cols-5 md:grid-cols-5 gap-4">
          {clients.map((client, index) => (
            <div className="h-36 w-48 flex items-center justify-center my-16 mx-6 transition-transform duration-300 transform hover:-translate-y-2 ">
              <img
                src={client}
                alt="Paper plane"
                className="mx-auto md:mx-0 "
              />
              {/* <Image
                key={index}
                src={client} // <- You need to put the image in public folder
                alt="Paper plane"
                width={100}
                height={70}
                className="mx-auto md:mx-0 "
              /> */}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
