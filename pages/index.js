import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import CountUp from "@/components/CountUp";
import AreasOfWork from "@/components/AreasOfWork";

import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import ClientSlider from "@/components/ClientSlider";
import { Sparkles } from "lucide-react";
import OurProducts from "@/components/OurProducts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
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
<div className="relative h-screen overflow-hidden">
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

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0072bc]/30 to-[#001b48] z-10" />

  {/* Content */}
  <div className="relative z-20 h-full w-full flex flex-col justify-end pb-12 items-end px-6 md:px-24 text-white">
    {/* Tagline */}
    <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl text-right">
      Global Technology at <br />
      <span className="text-[#00ffd1] ">Local Cost</span>
    </h1>

    {/* Buttons */}
    <div className="flex gap-6 mt-8 flex-wrap">
      <Link href="/products">
        <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#001b48] transition-all">
          Explore Products
        </button>
      </Link>
      <Link href="/contact">
        <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#001b48] transition-all">
          Contact Us
        </button>
      </Link>
    </div>

    {/* Stats */}
    <div className="flex gap-10 mt-12 flex-wrap">

  {/* Countries Served */}
  <div className="text-left group relative">
    <p className="text-4xl font-extrabold text-green-400 transition duration-300 group-hover:scale-105 group-hover:text-green-300">
      <CountUp number={5} speed={40} />+
    </p>
    <p className="text-sm text-[#e6eef7]">Countries Served</p>

    {/* Star appears on hover */}
    <div className="absolute -top-3 -left-4 text-yellow-300 text-lg opacity-0 group-hover:opacity-100 transition duration-300">
      ✨
    </div>
  </div>

  {/* Installations */}
  <div className="text-left group relative">
    <p className="text-4xl font-extrabold text-yellow-400 transition duration-300 group-hover:scale-105 group-hover:text-yellow-300">
      <CountUp number={49} speed={20} />+
    </p>
    <p className="text-sm text-[#e6eef7]">Installations</p>

    {/* Star appears on hover */}
    <div className="absolute -top-3 -left-4 text-yellow-300 text-lg opacity-0 group-hover:opacity-100 transition duration-300">
      ✨
    </div>
  </div>
</div>
  </div>
</div>

      </div>

      <OurProducts title={"Areas of Work"} />
      <section className="px-6 md:px-20 py-10 bg-gradient-to-r from-[#0072bc] to-[#001b48] text-white font-sans">
        <div className="flex flex-col items-center gap-2 mb-6 col-span-2">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          About Us
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
 
        </div>
        {/* <div className="bg-white rounded-tl-[270] flex items-center justify-center rounded-bl-[160] rounded-br-[270] rounded-tr-[160]">
            <img
            src="/aboutus.jpg" // <- You need to put the image in public folder
            alt="Paper plane"
            className="mx-auto md:mx-0 w-full p-4"
          />
        </div> */}
        <div className="">
          <div className="w-full text-sm md:text-base leading-relaxed w-full text-white">
            <p className="mb-4">
              We, <span className="font-bold">MAS SYSTECH PVT LTD</span>, are a
              Pune, India based company involved in design, manufacturing and
              supply of Packaging Machines and related equipment's.
            </p>

            <p className="mb-4">
              Our Packaging Machines & Solutions serve the need of regional and
              local companies in Food, Beverages, Liquor, Glass, Edible Oil,
              Personal Care and Home Care sectors. We take pride in being OEM
              suppliers to blue chip companies like{" "}
              <span className="font-semibold">Tetra Pak</span>.
            </p>

            <p className="mb-4">
              Our focus is mainly on the{" "}
              <span className="font-bold">"END OF LINE"</span> packaging
              machines, which we have introduced under the{" "}
              <span className="font-bold">PACK-LINE</span> series.
            </p>

            <p className="mb-4">
              We also offer customized packaging solutions to our customers to
              improve productivity and reduced wastage.
            </p>

            <p className="mb-4">
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
          Our Clients
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
        
        {/* <div className="grid grid-cols-5 md:grid-cols-5 gap-4">
          {clients.map((client, index) => (
            <div className="h-36 w-48 flex items-center justify-center my-16 mx-6 transition-transform duration-300 transform hover:-translate-y-2 ">
              <img
                src={client}
                alt="Paper plane"
                className="mx-auto md:mx-0 "
              />
            </div>
          ))}
        </div> */}
        <ClientSlider clients={clients} />
      </section>
      <Footer />
    </div>
  );
}
