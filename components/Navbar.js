import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import productsList from "@/data/ProductsList";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    if (props?.transparentOnTop) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTextColor = scrolled ? "text-white" : "text-white";
  const navBg = scrolled
    ? "bg-gradient-to-r from-[#0072bc] to-[#001b48] shadow-md"
    : "bg-transparent";

  // Menu items with sub-links
  const menu = [
    {
      label: "Home",
      href: "/home",
      sub: [],
    },
    {
      label: "Products",
      href: "/products",
      sub: productsList.map((product) => product.name),
    },
    {
      label: "Services",
      href: "/services",
      sub: [],
    },
    {
      label: "About Us",
      href: "/about-us",
      sub: [],
    },
    {
      label: "Contact Us",
      href: "/contact",
      sub: [],
    },
    {
      label: "Media",
      href: "/media",
      sub: [],
    },
  ];

  const renderLink = (item) => (

        <div className="group relative">
          <Link
            href={item.href}
            className={`flex items-center space-x-1 ${navTextColor} hover:text-blue-600 transition duration-300`}
          >
            <span>{item.label}</span>
            {item.sub.length > 0 && <ChevronDown size={16} />}
          </Link>

          {item.sub.length > 0 && (
            <div className="absolute left-0 mt-2 hidden w-52 rounded-md bg-white shadow-lg group-hover:block z-50">
              {item.sub.map((subItem, idx) => (
                <Link
                  key={idx}
                  href={`${item.href}/${productsList.find((product) => product.name === subItem).slug}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                >
                  {subItem}
                </Link>
              ))}
            </div>
          )}

          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
        </div>
  
  );

  const renderMobileLink = (item, index) => (
    <div key={item.label}>
      <div className="flex justify-between items-center">
        <a href={item.href} className="text-gray-700 hover:text-blue-600 py-2">
          {item.label}
        </a>
        {item.sub.length > 0 && (
          <button
            onClick={() =>
              setDropdownOpen(dropdownOpen === index ? null : index)
            }
          >
            <ChevronDown size={18} />
          </button>
        )}
      </div>

      {dropdownOpen === index && item.sub.length > 0 && (
        <div className="pl-4 mt-1 space-y-1">
          {item.sub.map((subItem, idx) => (
            <a
              key={idx}
              href={`${item.href}#${subItem
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="block text-sm text-gray-600 hover:text-blue-600"
            >
              {subItem}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
    {!isHidden && (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${navBg}`}
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-12 w-30 bg-white" />
          <img src="/packline.png" alt="Logo" className="bg-white object-contain h-12 w-30" />
          {/* <span className={`text-xl font-bold transition-colors duration-300 ${navTextColor}`}>
            MAS SYSTECH
          </span> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menu.map((item) => renderLink(item))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden ${navTextColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mt-2 px-6 pb-4 space-y-2 md:hidden bg-white shadow-md">
          {menu.map((item, index) => renderMobileLink(item, index))}
        </div>
      )}
    </nav>
    )}
    </>
  );
};

export default Navbar;
