// "use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MapPin, Factory } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [message,setMessage] = useState("");
  const agents = [
    {
      region: "Eastern Africa 🇰🇪",
      company: "PPC EAST AFRICA LTD",
      address: "P.O. Box 800 | 00232 Ruiru | NAIROBI, KENYA",
      email: "john.abisai@ppc-ea.com",
      contact: "MR. JOHN ABISAI",
      phone: "Tel. +254 20 3673165",
      mobile: "+254 798 481 905 / 722 367 972",
      country: "KENYA",
    },
    {
      region: "Southern Africa 🇿🇦",
      company: "FILMATIC PACKAGING SYSTEMS PTY LTD",
      address: "106 Van Der Stel St, Charleston Hill, Paarl, 7646, CAPE TOWN- SOUTH AFRICA",
      email: "rvanzyl@filmatic.com",
      contact: "MR. RIAAN VAN ZYL",
      phone: "",
      mobile: "+27 822594339",
      country: "SOUTH AFRICA",
    },
    {
      region: "Western Africa 🇳🇬",
      company: "AMS AFRICA",
      address: "4 Oyetubo St, off Obafemi Awolowo Way, Ikeja, Lagos 101233, Lagos, Nigeria",
      email: "babatunde.fakokunde@amsafrica.com.ng",
      contact: "Mr. Babatunde Fokukunde David",
      phone: "",
      mobile: "+234 8137770347",
      country: "NIGERIA",
    },
    {
      region: "Sri Lanka 🇱🇰",
      company: "CMC Engineering Export GmbH",
      address: "No 08, Rodrigo Mawatha, Nawala Road, Rajagiriya 10107, Colombo, Sri Lanka",
      email: "Kasun.m@cmcenglk.com",
      contact: "Mr. Kasun",
      phone: "",
      mobile: "+94 779109895",
      country: "SRI LANKA",
    },
  ];
  async function handleSendMessage(){
    console.log("e------->",email,name,message);
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    const webhookURL = "https://script.google.com/macros/s/AKfycbx2LVXD46ttSwrGDmFN-AaCZWMj6KnyDmSMnJNYugiYqfrRwQu6sdcf4r6oxKYDk56s/exec";
    try{

    fetch(webhookURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John",
    email: "john@example.com",
    message: "Hello from the contact form"
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Success", data))
  .catch((err) => console.error("Error:", err));
  }catch(e){
    console.log("error",e);
  }
    // if (response.ok) {
    //   alert("Message sent successfully!");
    //   form.reset();
    // } else {
    //   alert("Something went wrong. Please try again.");
    // }


  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0072bc] to-[#001b48]">
      {/* Header */}
      <Navbar transparentOnTop={false} />
      <h2 className="pt-36 px-12 text-center text-3xl font-bold text-white mb-2">
        Contact Us
      </h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
      {/* <p className="text-gray-600 max-w-3xl mx-auto">
        Are you looking to improve ROI in your production and packaging
        processes? MAS SYSTECH can provide simple, efficient packaging machines
        to meet your needs.
      </p> */}
      <section className="bg-gradient-to-r from-[#0072bc] to-[#001b48] mx-12 rounded-xl py-12  flex items-center justify-center rounded-2xl p-6">
    
        
        {/* Left side: Image & heading */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Reach out to us</h2>
          <p className="text-[#e6eef7] mb-4">
            Or reach out manually to{" "}
            <a
              href="mailto:sales@massystech.com"
              className="text-[#c8dffb] hover:underline"
            >
               sales@massystech.com
            </a>
          </p>

          <Image
            src="/paperplane.avif" // <- You need to put the image in public folder
            alt="Paper plane"
            width={300}
            height={300}
            className="mx-auto md:mx-0"
          />
        </div>

        {/* Right side: Form */}
        <div  className="md:w-1/2 space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium text-[#c8dffb]">
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
            <p className="text-xs text-[#c8dffb] mt-1">
              We'll never share your email with anyone else.
            </p>
          </div>

          <div>
            <label htmlFor="name" className="block font-medium text-[#c8dffb]">
              Your name
            </label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white mt-1 p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-[#c8dffb]">
              Your message
            </label>
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
              className="bg-white w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            ></textarea>
          </div>

          <button
            onClick={handleSendMessage}
            className="bg-[#0072bc] hover:bg-[#005a99] text-white px-6 py-2 rounded-md  transition"
          >
            Send Message
          </button>
        </div>
 
  
      </section>
      {/* Google Map */}

      <div className="h-96">
        <iframe
          title="Massytech"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0164645855803!2d73.77580577414028!3d18.79741958235063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b5da2d2caa77%3A0xabc1519bbebcb993!2sD-241%20MAS%20Systech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1753264657257!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, pointerEvents: "none" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Office Details */}

      <div className="bg-gradient-to-r from-[#0072bc] to-[#001b48] text-white  w-full p-8 shadow-lg">
        <div className="grid  grid-cols-3  gap-4 items-start">
          {/* Head Quarters */}
          <div className="flex gap-4">
            <MapPin className="w-8 h-8 mt-1 text-blue-300" />
            <div>
              <h4 className="font-semibold text-lg">Head Quarters</h4>
              <p className="text-sm leading-relaxed mt-1">
               MAS SYSTECH PVT LTD, D-241, Chakan Industrial Area, Phase II, Warale, Khed, Pune- 410507
                <br />
                <strong>Tel: </strong>+91 92840 35561
                <br />
                
                <strong>Email: </strong>
                <a
              href="mailto:sales@massystech.com"
              className="hover:underline"
            > 
                sales@massystech.com
              </a>
              </p>
            </div>
          </div>

      
          {/* Factory Address */}
          <div className="flex gap-4">
            <MapPin className="w-8 h-8 mt-1 text-blue-300" />
            <div>
              <h4 className="font-semibold text-lg">Manufacturing Facility</h4>
              <p className="text-sm leading-relaxed mt-1">
              MAS SYSTECH PVT LTD, D-241, Chakan Industrial Area, Phase II, Warale, Khed, Pune- 410507
                <br />
                <strong>Tel: </strong>+91 92840 35561
                <br />
                <strong>Email: </strong> 
                <a
              href="mailto:sales@massystech.com"
              className="hover:underline"
            > 
                sales@massystech.com
              </a>
              </p>
            </div>
          </div>

     
          {/* Sales Enquiry */}
          <div className="flex gap-4">
            <Factory className="w-8 h-8 mt-1 text-blue-300" />
            <div>
              <h4 className="font-semibold text-lg">For Sales Enquiry</h4>
              <p className="text-sm leading-relaxed mt-1">
              <strong>Tel: </strong>+91 92840 35561
                <br />
                
                <strong>Email: </strong> 
                <a
              href="mailto:sales@massystech.com"
              className="hover:underline"
            > 
                sales@massystech.com
              </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
      <h2 className=" px-12 text-center text-3xl font-bold text-gray-800 mb-2">
        Global Agents Network
      </h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
     
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-8">
      {agents.map((agent, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
        >
          {/* Region with Flag */}
          <h3 className="text-lg font-bold text-[#001b48] mb-2">{agent.region}</h3>

          {/* Company Name */}
          <p className="text-base font-semibold text-gray-900">{agent.company}</p>

          {/* Address */}
          <p className="text-sm text-gray-600 mb-2">{agent.address}</p>

          {/* Email */}
          <p className="text-sm text-gray-700">
            <span className="font-medium">Email:</span>{" "}
            <a
              href={`mailto:${agent.email}`}
              className="text-blue-600 hover:underline"
            >
              {agent.email}
            </a>
          </p>

          {/* Contact Person */}
          <p className="mt-2 font-medium text-gray-800">{agent.contact}</p>

          {/* Phone Numbers */}
          {agent.phone && (
            <p className="text-sm text-gray-700">
              <span className="font-medium">Tel:</span> {agent.phone}
            </p>
          )}
          <p className="text-sm text-gray-700">
            <span className="font-medium">Mobile:</span> {agent.mobile}
          </p>
        </div>
      ))}
    </div>
       
      </div>
    </section>

      {/* Contact Form Section
        <div className="max-w-5xl mx-auto mt-[-50px] bg-white shadow-lg p-8 rounded-lg relative z-10">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Get in touch with us!</h2>
          <p className="text-gray-700 mb-6">
            Whether you have a question about our products, pricing, international orders, we are here to help you with strategies specific to your business.
          </p>
  
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border p-2 rounded" type="text" placeholder="First Name*" required />
            <input className="border p-2 rounded" type="text" placeholder="Last Name*" required />
            <input className="border p-2 rounded" type="email" placeholder="Email*" required />
            <input className="border p-2 rounded" type="tel" placeholder="Phone*" required />
  
            <select className="border p-2 rounded" required>
              <option value="">Select an option</option>
              <option value="pricing">Pricing Inquiry</option>
              <option value="support">Customer Support</option>
            </select>
  
            <select className="border p-2 rounded" required>
              <option value="">Select Country</option>
              <option value="ae">United Arab Emirates</option>
              <option value="in">India</option>
            </select>
  
            <textarea
              className="border p-2 rounded md:col-span-2"
              placeholder="Write Message"
              rows="4"
              required
            ></textarea>
  
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-6 rounded hover:bg-blue-800 md:col-span-2"
            >
              Send Message
            </button>
          </form>
  
          <div className="mt-6 text-sm text-gray-700">
            <p>
              Or just wanna say hi?
              <br />
              <a href="mailto:contact@hotpackglobal.com" className="text-blue-900">contact@hotpackglobal.com</a>
              <br />
              <a href="mailto:sales.domestic@hotpackglobal.com" className="text-blue-900">sales.domestic@hotpackglobal.com</a>
            </p>
          </div>
        </div> */}
    <Footer/>
    </div>
    
  );
}
