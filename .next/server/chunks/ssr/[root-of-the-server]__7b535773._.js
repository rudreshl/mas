module.exports = {

"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/data/ProductsList.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const productsList = [
    {
        image: "/case_erector.png",
        name: "Case Erector",
        slug: "case-erector",
        features: [
            "Extremely Compact High Speed Case Erector",
            "Fully Cam operated motions",
            "Easy & Simple to operate and Adjust"
        ],
        description: "Manually erecting the cases when it comes to high speed end of line is a hectic task. Mas Systech has developed 3 different modules of case erector machines. Namely CEM 111, CEM 114 & CEM 115.",
        media: [
            {
                type: "image",
                name: "Case Erector",
                path: "/case_erector.png"
            },
            {
                type: "video",
                name: "CEM 111",
                path: "xHJZnSpzTNw"
            },
            {
                type: "video",
                name: "CEM 114",
                path: "AuDzNua_610"
            },
            {
                type: "video",
                name: "CEM 115",
                path: "vnJwqkDikFE"
            }
        ],
        models: [
            {
                name: "CEM-111",
                specs: {
                    "Machine Size (Length)": "2400 mm",
                    "Machine Size (Width)": "1250 mm",
                    "Machine Size (Height)": "1850 mm",
                    Speed: "1-20 cases/min",
                    "Case Size (Length)": "240 -510 mm",
                    "Case Size (Width)": "190- 400 mm",
                    "Case Size (Height)": "120 - 380 0 mm",
                    "Air Consumption": "10 CFM at 5 bar",
                    electicals: "1 kw, 1 ph, 230 V, 50 Hz",
                    "Machine weight": "Approximate 700 kgs"
                }
            },
            {
                name: "CEM-114",
                specs: {
                    "Machine Size (Length)": "2500 mm",
                    "Machine Size (Width)": "2050 mm",
                    "Machine Size (Height)": "1450 mm",
                    Speed: "1-10 cases/min",
                    "Case Size (Length)": "250 -520 mm",
                    "Case Size (Width)": "150- 380 mm",
                    "Case Size (Height)": "150 - 380 mm",
                    "Air Consumption": "10 CFM at 5 bar",
                    electicals: "1 kw, 1 ph 230V, 50Hz",
                    "Machine weight": "Approximate 600 kgs"
                }
            },
            {
                name: "CEM-115",
                specs: {
                    "Machine Size (Length)": "5650 mm",
                    "Machine Size (Width)": "2170 mm",
                    "Machine Size (Height)": "2060 mm",
                    Speed: "1-40 cases/min",
                    "Case Size (Length)": "240 -510 mm",
                    "Case Size (Width)": "150- 380 mm",
                    "Case Size (Height)": "120 - 380 mm",
                    "Air Consumption": "60 CFM at 5 bar",
                    electicals: "4 kw, 1 ph, 230 V, 50Hz",
                    "Machine weight": "Approximate 1600 kgs"
                }
            }
        ],
        brochure: "/brochure/Case_Erector_CEM.pdf",
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    },
    {
        image: "/case_packer.png",
        name: "Case Packer",
        slug: "case-packer",
        features: [],
        description: "With vast demand of high speed primary lines, case packer plays an important role. We at Mas Systech has developed various case packers namely IRCP- 143 (Industrial robotic case packer), MRP-100 (Mechanical robotic case packer), PPP-140 (Pick &amp; place case packer)",
        media: [
            {
                type: "image",
                name: "Case Packer",
                path: "/case_packer.png"
            },
            {
                type: "video",
                name: "IRCP-143",
                path: "-2z9IRqE_KM"
            },
            {
                type: "video",
                name: "MRP 100",
                path: "BIITvXJHU7U"
            },
            {
                type: "video",
                name: "PPP 140",
                path: "VFvBDEcTyyM"
            }
        ],
        models: [
            {
                name: "NDUSTRIAL ROBOT CASE PACKER (IRCP -143)",
                features: [
                    "High precision movements",
                    "Precise product positioning",
                    "Robust structure",
                    "Open and ergonomic design"
                ],
                specs: {
                    "Machine Size": "As per application",
                    Speed: "1-8 cycles / min",
                    Payload: "80 kgs",
                    "Air Consumption": "3 to 5 CFM",
                    electicals: "15 kw, 3ph, 440 V, 50 Hz",
                    "Machine weight": "Approximate 1200 kgs"
                },
                brochure: "/brochure/Case_Packer_IRCP-143.pdf",
                media: [
                    {
                        type: "video",
                        name: "IRCP-143",
                        path: "-2z9IRqE_KM"
                    }
                ]
            },
            {
                name: "MECHANICAL ROBOTICARM PACKER: Model MRP-100",
                features: [
                    "Simplified Cam based Mechanical Case Packer",
                    "Quick Changeover",
                    "All controls with PLC command & inbuilt touch screen HMI"
                ],
                brochure: "/brochure/Case_Packer_MRP-100.pdf",
                specs: {
                    "Machine Size (Length)": "2300 mm",
                    "Machine Size (Width)": "2050 mm",
                    "Machine Size (Height)": "2400 mm",
                    Speed: "1-8 cycles/min",
                    Payload: "100 kgs inclusive of Gripper Heads",
                    "Air Consumption": "3 to 5 CFM at 5 bar",
                    electicals: "3 kw, 3 ph, 440 V, 50 Hz",
                    "Product Grippers": "Customized to suit product",
                    "Machine weight": "Approximate 1000 kgs"
                },
                media: [
                    {
                        type: "video",
                        name: "MRP 100",
                        path: "BIITvXJHU7U"
                    }
                ]
            },
            {
                name: "PICK AND PLACE PACKER (PPP-140)",
                features: [
                    "A Simple yet Rigid Pick and Place Case packer",
                    "Robust Structure",
                    "PLC Controlled AC Servo Motors driven"
                ],
                specs: {
                    "Machine Size (Length)": "3700 mm",
                    "Machine Size (Width)": "2400 mm",
                    "Machine Size (Height)": "3650 mm",
                    "Max working height of vertical axis": "3400 mm",
                    Speed: "1-8 cycles/min",
                    Payload: "60 kgs inclusive of Gripper Heads",
                    "Air Consumption": "3 to 5 CFM at 5 bar",
                    electicals: "4 kw, 3 ph, 440 V, 50 Hz",
                    "Product Grippers": "Customized to suit product",
                    Frame: "MS powder coated (SS 304 optional)",
                    "Machine weight": "Approximate 1000 kgs"
                },
                brochure: "/brochure/Case_Packer_PPP-140.pdf",
                media: [
                    {
                        type: "video",
                        name: "PPP 140",
                        path: "VFvBDEcTyyM"
                    },
                    {
                        type: "video",
                        name: "PPP 140",
                        path: "swD83FX5NIQ"
                    },
                    {
                        type: "video",
                        name: "PPP 140",
                        path: "sOmqmcL1Hsw"
                    },
                    {
                        type: "video",
                        name: "PPP 140",
                        path: "fk9kvGVQjD4"
                    },
                    {
                        type: "video",
                        name: "PPP 140",
                        path: "kyN6rWScmUs"
                    }
                ]
            }
        ],
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    },
    {
        image: "/case_sealer.png",
        name: "Case Sealer",
        slug: "case-sealer",
        features: [],
        description: "Automatic case sealer is required when it comes to shifting your corrugated boxes from one end to another without any contamination. We at Mas Systech have developed 2 different types of case sealers. CSM-170 (Case sealer machine), ETM- 120 (Edge tapping machine)",
        media: [
            {
                type: "image",
                name: "Case Sealer",
                path: "/case_sealer.png"
            },
            {
                type: "video",
                name: "Case Sealing Machine- CSM 170",
                path: "ICI5FMCLwlM"
            },
            {
                type: "video",
                name: "Edge Taping Machine",
                path: "ojL18BFOPqs"
            }
        ],
        models: [
            {
                name: "Case Sealer Machine CSM-170",
                specs: {
                    "Machine Size (Length)": "1800 mm",
                    "Machine Size (Width)": "900 mm",
                    "Machine Size (Height)": "1600 mm",
                    Speed: "8-20 cycles/min",
                    "Packing Size (Length)": "200 - 600 mm",
                    "Packing Size (Width)": "150- 500 mm",
                    "Packing Size (Height)": "150 - 500 mm",
                    "Air Consumption": "1 CFM at 5 bar",
                    electicals: "0.75 kw, 3 ph, 440 V, 50 Hz",
                    Tape: "48 / 60 / 75",
                    "Machine weight": "Approximate 300 kgs"
                },
                features: [
                    "Semi Automatic Flaps closing",
                    "Available in fully enclosed housing",
                    "Optional SS-304 constuction"
                ],
                brochure: "/brochure/Case_Sealer_CSM-170.pdf"
            },
            {
                name: "Edge Tapping Machine ETM-120",
                features: [
                    "Semi-automatic corner sealer for four side sealing",
                    "Manually adjustble to different size of cartons",
                    "90 Degree carton turning coveyer & pusher"
                ],
                brochure: "/brochure/Edge_Taping_Machine_ESM-120.pdf",
                specs: {
                    "Machine Size (Length)": "2000 mm",
                    "Machine Size (Width)": "1200 mm",
                    "Machine Size (Height)": "1600 mm",
                    Speed: "8-10 packs/min",
                    "Package Size (Length)": "320 - 50 mm",
                    "Package Size (Width)": "200- 500 mm",
                    "Package Size (Height)": "180 - 500 mm",
                    "Air Consumption": "5 CFM at 5 bar",
                    electicals: "1 kw, 3 ph 440V, 50Hz",
                    Tape: "48 / 60 / 75",
                    "Machine weight": "Approximate 450 kgs"
                }
            }
        ],
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    },
    {
        image: "/palletizer.png",
        name: "Palletizer",
        slug: "palletizer",
        features: [
            "High-Speed, 4-axis palletizing robot with performance driven design",
            "Increased payload, moment and inertia ratings handles unbalanced loads effectively",
            "Suitable for wide range of applications like Beverages, Food, Oil, Chemicals"
        ],
        description: "Automatically palletizing the corrugated boxes or Sacks is a major challenge. High speed lines require more man power when it comes to palletizing the filled boxes or sacks at a certain hight. We at Mas Systech have delveped the palletizer for both the application with a pay load of 180kg’s for 8 cycles.",
        media: [
            {
                type: "image",
                name: "Palletizer",
                path: "/palletizer.png"
            },
            {
                type: "video",
                name: "Palletizer",
                path: "4_F6J78zMSo"
            }
        ],
        models: [
            {
                name: "",
                specs: {
                    "Vertical reach": "As per Application",
                    "Horizontal reach": "As per Application",
                    Repeatability: "+/- 0.2 mm",
                    Speed: "1-8 Cycles/min",
                    Payload: "180kgs (with pick-up head)",
                    "pallet size": "1400 mm x 1200 mm",
                    Electricals: "16kw, 3ph 440V, 50Hz",
                    "Machine weight": "Approximate 1700 kgs"
                }
            }
        ],
        brochure: "/brochure/Palletizer.pdf",
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    },
    {
        image: "/shrink_wrapping_machine.png",
        name: "SHRINK WRAPPING MACHINE & TUNNEL",
        slug: "shrink-wrapping-machine",
        features: [
            "Automatic feeding, pushing, film feeding and sealing",
            "Adjustable speed conveyor for feeding",
            "Quick changeover from one type to other",
            "Suitable for wide products like, bottles, cans, beverages, cosmetics etc."
        ],
        description: "Shrink wrapping machine for bottles or boxes are required to collectively bundle the goods & ship to longer distances. We at Mas Systech has developed the shrink wrap machines SWM-150 for Bottles or Box applications.",
        media: [
            {
                type: "image",
                name: "SHRINK WRAPPING MACHINE",
                path: "/shrink_wrapping_machine.png"
            },
            {
                type: "video",
                name: "90 Degree Infeed (SWM-150)",
                path: "z4x1NkFFnLs"
            },
            {
                type: "video",
                name: "Inline Shrink Wrapper (SWM-150)",
                path: "TScLZealwPw"
            }
        ],
        models: [
            {
                name: "SWM-150",
                specs: {
                    "Machine Size (Length)": "1400 mm",
                    "Machine Size (Width)": "2200 mm",
                    "Machine Size (Height)": "2000 mm",
                    Speed: "1-18 packs/min",
                    "Cutter/tunnel size": "700 mm",
                    "Air Consumption": "3 to 5 CFM at 5 bar",
                    Electricals: "3 kw,3 ph, 440 V, 50 Hz",
                    "Max Current": "10 A",
                    "Machine weight": "Approximate 500 Kgs"
                }
            },
            {
                name: "SWT-160",
                specs: {
                    "Machine Size (Length)": "2700 mm",
                    "Machine Size (Width)": "1000 mm",
                    "Machine Size (Height)": "1700 mm",
                    Speed: "",
                    "Cutter/tunnel size": "w-600 mm, H-400 mm",
                    "Air Consumption": "",
                    Electricals: "16 kw,3 ph, 440 V, 50 Hz",
                    "Max Current": "35 A",
                    "Machine weight": "Approximate 500 Kgs"
                }
            }
        ],
        brochure: "/brochure/Shrink_Wrapper_Machine.pdf",
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    },
    {
        image: "/tetra_case_packer.png",
        name: "WRAP AROUND TETRA CASE PACKER",
        slug: "tetra-case-packer",
        features: [
            "WTCP (Wrap Around Tetra Case Packer) is a fully automatic Case Packing Machine which packs products in cases or trays.",
            "The flat blank sheet is folded & glued around the product to form a Case or Tray."
        ],
        description: "Tetra or Aseptic filling lines are high speed lines with particular machines may speed upto 6000 PPM. Our case packer (WCPT)- 410 plays an important role in this. A high speed case packer designed from 125ml to 1 Litres Tetra Bricks.",
        media: [
            {
                type: "image",
                name: "TETRA CASE PACKER",
                path: "/tetra_case_packer.png"
            },
            {
                type: "video",
                name: "Top Load Tetra Case Packer",
                path: "HpxmT6i_AZA"
            },
            {
                type: "video",
                name: "Wrap Around Tetra Case packer",
                path: "knCtrIeLuPY"
            }
        ],
        models: [
            {
                name: "WCPT - 410",
                specs: {
                    "Machine Size (Length)": "8300 mm",
                    "Machine Size (Width)": "2300 mm",
                    "Machine Size (Height)": "1950 mm",
                    Speed: "1-10 Cases/min",
                    "Product type": "Tetra Packets",
                    "Packet Size": "125 ml,150 ml,180 ml, 200 ml",
                    "Matrix Size": "3x8, 3x9, 3x10, 4x8, 4x10",
                    "Glue Type": "Hot Melt",
                    "Packing Type": "Carton/Tray",
                    Electricals: "9 kw, 3 ph, 415 V,50Hz",
                    "Machine Weight": "Approximate 2500 KG"
                }
            }
        ],
        brochure: "/brochure/Case_Packer_WCPT-410.pdf",
        industries: [
            "Food & Beverage",
            "Pharmaceutical",
            "FMCG",
            "Liquor"
        ]
    }
];
const __TURBOPACK__default__export__ = productsList;
}}),
"[project]/components/Navbar.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ProductsList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/ProductsList.js [ssr] (ecmascript)");
;
;
;
;
;
const Navbar = (props)=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isHidden, setIsHidden] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    // Scroll handler
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 10);
        };
        if (props?.transparentOnTop) {
            window.addEventListener("scroll", handleScroll);
        } else {
            setScrolled(true);
        }
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const navTextColor = scrolled ? "text-white" : "text-white";
    const navBg = scrolled ? "bg-gradient-to-r from-[#0072bc] to-[#001b48] shadow-md" : "bg-transparent";
    // Menu items with sub-links
    const menu = [
        {
            label: "Home",
            href: "/home",
            sub: []
        },
        {
            label: "Products",
            href: "/products",
            sub: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ProductsList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].map((product)=>product.name)
        },
        {
            label: "Services",
            href: "/services",
            sub: []
        },
        {
            label: "About Us",
            href: "/about-us",
            sub: []
        },
        {
            label: "Contact Us",
            href: "/contact",
            sub: []
        },
        {
            label: "Media",
            href: "/media",
            sub: []
        }
    ];
    const renderLink = (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "group relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: `flex items-center space-x-1 ${navTextColor} hover:text-blue-600 transition duration-300`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        item.sub.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 71,
                            columnNumber: 37
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 66,
                    columnNumber: 11
                }, this),
                item.sub.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 mt-2 hidden w-52 rounded-md bg-white shadow-lg group-hover:block z-50",
                    children: item.sub.map((subItem, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `${item.href}/${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ProductsList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].find((product)=>product.name === subItem).slug}`,
                            className: "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100",
                            children: subItem
                        }, idx, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 77,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 75,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.js",
            lineNumber: 65,
            columnNumber: 9
        }, this);
    const renderMobileLink = (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: item.href,
                            className: "text-gray-700 hover:text-blue-600 py-2",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 96,
                            columnNumber: 9
                        }, this),
                        item.sub.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>setDropdownOpen(dropdownOpen === index ? null : index),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 95,
                    columnNumber: 7
                }, this),
                dropdownOpen === index && item.sub.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "pl-4 mt-1 space-y-1",
                    children: item.sub.map((subItem, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: `${item.href}#${subItem.replace(/\s+/g, "-").toLowerCase()}`,
                            className: "block text-sm text-gray-600 hover:text-blue-600",
                            children: subItem
                        }, idx, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, item.label, true, {
            fileName: "[project]/components/Navbar.js",
            lineNumber: 94,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: !isHidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
            className: `fixed top-0 w-full transition-all duration-300 z-50 ${navBg}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "w-full px-6 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Logo",
                                className: "h-12 w-30"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 136,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex space-x-6",
                            children: menu.map((item)=>renderLink(item))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 144,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `md:hidden ${navTextColor}`,
                            onClick: ()=>setIsOpen(!isOpen),
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 153,
                                columnNumber: 39
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 149,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 134,
                    columnNumber: 7
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-2 px-6 pb-4 space-y-2 md:hidden bg-white shadow-md",
                    children: menu.map((item, index)=>renderMobileLink(item, index))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.js",
            lineNumber: 131,
            columnNumber: 5
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Navbar;
}}),
"[project]/components/Footer.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [ssr] (ecmascript) <export default as Youtube>");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "bg-gray-100 text-gray-800 pt-12 pb-8 px-6 md:px-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-300 pb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-blue-600 mb-2",
                                children: "MAS SYSTECH PVT LTD"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 10,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-sm leading-relaxed",
                                children: [
                                    "D-241, Chakan Industrial Area, Phase II, Warale, Khed,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 12,
                                        columnNumber: 67
                                    }, this),
                                    "Pune - 410507"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-1",
                                children: "📞 +91 92840 35561"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-4",
                                children: "✉️ sales@massystech.com"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "https://facebook.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Facebook",
                                        className: "hover:text-blue-600 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 19,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "https://twitter.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Twitter",
                                        className: "hover:text-blue-600 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "https://linkedin.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "LinkedIn",
                                        className: "hover:text-blue-600 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "https://youtube.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "YouTube",
                                        className: "hover:text-blue-600 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-blue-600 font-semibold mb-3",
                                children: "COMPANY"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-sm",
                                children: [
                                    "About",
                                    "History",
                                    "Our Team",
                                    "Certificates",
                                    "Suppliers & Clients",
                                    "Events"
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: `/${item.toLowerCase().replace(/ /g, '-')}`,
                                            className: "hover:text-blue-600 transition-colors",
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this)
                                    }, item, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-blue-600 font-semibold mb-3",
                                children: "PRODUCTS"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-sm",
                                children: [
                                    "Case Erector",
                                    "Case Sealer",
                                    "Shrink Wrap Machine",
                                    "Tetra Conveyors",
                                    "Case Packer",
                                    "Palletizer",
                                    "Tetra Case Packer",
                                    "Uncaser"
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: `/products/${item.toLowerCase().replace(/ /g, '-')}`,
                                            className: "hover:text-blue-600 transition-colors",
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, item, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-blue-600 font-semibold mb-3",
                                children: "SOLUTIONS"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-sm",
                                children: [
                                    "Logistics Industry",
                                    "Digital Communications",
                                    "Commodity Industry",
                                    "Hardware Industry",
                                    "Beverage Industry",
                                    "Pharmaceutical Industry"
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: `/solutions/${item.toLowerCase().replace(/ /g, '-')}`,
                                            className: "hover:text-blue-600 transition-colors",
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    }, item, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-blue-600 font-semibold mb-3",
                                children: "SUPPORT"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-sm",
                                children: [
                                    "Service & Parts",
                                    "News",
                                    "Contact Us",
                                    "Get A Quote"
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
                                            className: "hover:text-blue-600 transition-colors",
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    }, item, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center text-xs text-gray-600 pt-6",
                children: [
                    "© 2025 MAS SYSTECH PVT LTD. All rights reserved.",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: "/sitemap.xml",
                        className: "text-gray-800 hover:text-blue-600",
                        children: "sitemap.xml"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.js",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}}),
"[project]/pages/products/[slug].js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductDetails)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ProductsList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/ProductsList.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function ProductDetails() {
    const { query } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [productData, setProductData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (query?.slug && __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ProductsList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]?.length > 0) {
            const product = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ProductsList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].find((item)=>item.slug === query.slug);
            setProductData(product);
        }
    }, [
        query,
        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ProductsList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    ]);
    const youTubeThumbnail = (url)=>{
        try {
            const videoId = new URL(url).searchParams.get("v");
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        } catch  {
            return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/products/[slug].js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "max-w-6xl mx-auto px-4 py-10",
                children: productData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-6 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: productData.image,
                                    alt: productData.name,
                                    width: 500,
                                    height: 300,
                                    className: "rounded-lg object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/pages/products/[slug].js",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-bold text-[#001b48]",
                                            children: productData.name
                                        }, void 0, false, {
                                            fileName: "[project]/pages/products/[slug].js",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-gray-700",
                                            children: productData.description
                                        }, void 0, false, {
                                            fileName: "[project]/pages/products/[slug].js",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/products/[slug].js",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/products/[slug].js",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            className: "my-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-[#001b48] mb-4",
                                    children: "Download Brochures"
                                }, void 0, false, {
                                    fileName: "[project]/pages/products/[slug].js",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        productData?.brochures?.map((brochure, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: brochure?.link,
                                                className: "flex items-center gap-2 text-blue-600 hover:underline",
                                                download: true,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/products/[slug].js",
                                                        lineNumber: 69,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    brochure?.name || "Download Brochure"
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/pages/products/[slug].js",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this)),
                                        productData?.models?.map((model, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold mt-4 text-gray-800",
                                                        children: model?.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/products/[slug].js",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, this),
                                                    model?.brochures?.map((b, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: b?.link,
                                                            className: "ml-4 flex items-center gap-2 text-blue-600 hover:underline",
                                                            download: true,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/products/[slug].js",
                                                                    lineNumber: 86,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                b?.name || "Download Brochure"
                                                            ]
                                                        }, j, true, {
                                                            fileName: "[project]/pages/products/[slug].js",
                                                            lineNumber: 78,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/pages/products/[slug].js",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/products/[slug].js",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/products/[slug].js",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        productData?.features?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            className: "my-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-2 text-[#001b48]",
                                    children: "Features"
                                }, void 0, false, {
                                    fileName: "[project]/pages/products/[slug].js",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-1 text-gray-700",
                                    children: productData?.features?.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: f
                                        }, i, false, {
                                            fileName: "[project]/pages/products/[slug].js",
                                            lineNumber: 99,
                                            columnNumber: 57
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/pages/products/[slug].js",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/products/[slug].js",
                            lineNumber: 96,
                            columnNumber: 15
                        }, this),
                        productData?.specs?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            className: "my-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-2 text-[#001b48]",
                                    children: "Specifications"
                                }, void 0, false, {
                                    fileName: "[project]/pages/products/[slug].js",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-1 text-gray-700",
                                    children: productData?.specs?.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: s
                                        }, i, false, {
                                            fileName: "[project]/pages/products/[slug].js",
                                            lineNumber: 109,
                                            columnNumber: 54
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/pages/products/[slug].js",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/products/[slug].js",
                            lineNumber: 106,
                            columnNumber: 15
                        }, this),
                        productData?.models?.map((model, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "my-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-[#001b48] mb-4",
                                        children: [
                                            "Media related to ",
                                            model.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/products/[slug].js",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                                        children: model?.media?.map((media, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "relative group",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: media?.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: youTubeThumbnail(media?.link) || "/placeholder.jpg",
                                                            alt: "Video thumbnail",
                                                            width: 320,
                                                            height: 180,
                                                            className: "rounded-md w-full h-auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/products/[slug].js",
                                                            lineNumber: 124,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                                className: "w-8 h-8 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/products/[slug].js",
                                                                lineNumber: 132,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/products/[slug].js",
                                                            lineNumber: 131,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/products/[slug].js",
                                                    lineNumber: 123,
                                                    columnNumber: 23
                                                }, this)
                                            }, j, false, {
                                                fileName: "[project]/pages/products/[slug].js",
                                                lineNumber: 122,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/pages/products/[slug].js",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/pages/products/[slug].js",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/pages/products/[slug].js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/products/[slug].js",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7b535773._.js.map