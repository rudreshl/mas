import React from "react";
import { Wrench, Settings, BookOpen, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

const servicesList = [
  {
    title: "Spare Parts",
    imgurl: "/spareparts.jpg",
    description:
      "When it comes to end of line equipment, the machines run continuously 24 X7, Critical spare parts plays an important role in this case. MAS SYSTECH team ensure we deliver the spare parts Just in time. In addition to original parts supply, by working on statistical analysis, MAS SYSTECH Spare Parts Services include stock management, parts yearly order, safety stock for high priority parts, and parts replacement predictions. Contact our SPARE PARTS SPECIALIST on below contact details",
    phone: "+91 98765 43210",
    email: "hD3yK@example.com",
  },
  {
    title: "Maintenance & services",
    imgurl: "/repair.jpg",
    description:
      "Regularly maintenance play an important role in the machine life cycle. Whether it’s a preventive maintenance or breakdown maintenance, Our SERVICE & MAINTENANCE team Minimize your unplanned equipment downtime and protect your investment with our range of Maintenance Services. To know more about our Maintenance services, contact our MAINTENANCE SPECIALIST on below contact details.",
    phone: "+91 98765 12345",
    email: "hD3yK@example.com",
  },
  {
    title: "Training & Documentation",
    imgurl: "/training.jpg",
    description:
      "Hand on experience on the training & documentation plays an important role. Our team of experts ensure the customer along with Machine operators, Production managers, Maintenance managers get hands on experience on the equipment to Run, Maintain & troubleshoot by their own. MAS SYTECH provides complete technical documentation either at the time of sale or on request, which including user and maintenance manual, machine settings description, operating and troubleshooting procedures, mechanical assembly drawings and electrical and pneumatic diagrams. Obtain the maximum performance of your machine by taking advantage of our Training Services to secure and develop your team competence and capability. Contact our SPECIALIST TEAM on below contact details.",
    phone: "+91 98765 67890",
    email: "hD3yK@example.com",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      <Navbar />
      <section className="py-16 px-12 bg-gradient-to-r from-[#0072bc] to-[#001b48]">
      <h2 className="text-center text-3xl font-bold text-white mb-2">
        Our Services
      </h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
      <p className="text-white max-w-3xl mx-auto">
      Mas Systech believes After sales service of the equipment is an important aspect to run the equipment continuously. This also helps in equipment long life. We offer below after sales services to all our clients.
      </p>

      <div className="space-y-8 px-4 py-16">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="shadow-md rounded-xl p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white rounded-tl-[70] rounded-bl-[160] rounded-br-[70] rounded-tr-[160]"
          >
            {/* Left Section: Icon + Info */}
            <div className="flex items-center gap-4">
              <Image
                src={service.imgurl} // <- You need to put the image in public folder
                alt="Paper plane"
                width={240}
                height={240}
                className="mx-auto md:mx-0 bg-[#f5faff]"
              />
              <div>
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <p className="flex flex-row items-center mt-2 font-medium text-sm text-blue-700">
                  <span>
                    {" "}
                    <Phone size={16} className="text-gray-700 mr-2" />
                  </span>{" "}
                  {service.phone}
                </p>
                <p className="flex flex-row items-center mt-2 font-medium text-sm text-blue-700">
                  <span>
                    {" "}
                    <Mail size={16} className="text-gray-700 mr-2" />
                  </span>{" "}
                  {service.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
