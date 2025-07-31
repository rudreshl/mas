const productsList = [
    {
      image: "/case_erector.png",
      name: "Case Erector",
      slug: "case-erector",
      features: [
        "Extremely Compact High Speed Case Erector",
        "Fully Cam operated motions",
        "Easy & Simple to operate and Adjust",
      ],
      description:
        "Manually erecting the cases when it comes to high speed end of line is a hectic task. Mas Systech has developed 3 different modules of case erector machines. Namely CEM 111, CEM 114 & CEM 115.",
      media: [
        {
          type: "image",
          name: "Case Erector",
          path: "/case_erector.png",
        },
        { type: "video", name: "CEM 111", path: "xHJZnSpzTNw" },
        { type: "video", name: "CEM 114", path: "AuDzNua_610" },
        { type: "video", name: "CEM 115", path: "vnJwqkDikFE" },

       
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
            "Machine weight": "Approximate 700 kgs",
          },
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
            "Machine weight": "Approximate 600 kgs",
          },
          media: [
        { type: "video", name: "Case Erector- CEM 114", path: "M6nvjeS4LcA" },
          ],
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
            "Machine weight": "Approximate 1600 kgs",
          },
        },
      ],
      brochure: "/brochure/Case_Erector_CEM.pdf",
      industries: ["Food & Beverage", "Pharmaceutical", "FMCG", "Liquor"],
    },
    {
      image: "/case_packer.png",
      name: "Case Packer",
      slug: "case-packer",
      features: [],
      description:
        "With vast demand of high speed primary lines, case packer plays an important role. We at Mas Systech has developed various case packers namely IRCP- 143 (Industrial robotic case packer), MRP-100 (Mechanical robotic case packer), PPP-140 (Pick &amp; place case packer)",
      media: [
        {
          type: "image",
          name: "Case Packer",
          path: "/case_packer.png",
        },
        { type: "video", name: "IRCP-143", path: "-2z9IRqE_KM" },
        { type: "video", name: "MRP 100", path: "BIITvXJHU7U" },
        { type: "video", name: "PPP 140", path: "VFvBDEcTyyM" },    
      ],
      models: [
        {
          name: "INDUSTRIAL ROBOT CASE PACKER (IRCP -143)",
          features: [
            "High precision movements",
            "Precise product positioning",
            "Robust structure",
            "Open and ergonomic design",
          ],
          specs: {
            "Machine Size": "As per application",
            Speed: "1-8 cycles / min",
            Payload: "80 kgs",
            "Air Consumption": "3 to 5 CFM",
            electicals: "15 kw, 3ph, 440 V, 50 Hz",
            "Machine weight": "Approximate 1200 kgs",
          },
          brochure: "/brochure/Case_Packer_IRCP-143.pdf",
          media: [
            { type: "video", name: "IRCP-143", path: "-2z9IRqE_KM" },
        { type: "video", name: "Industrial Robotic Case Packer- (IRCP-143)", path: "7L_SjrKn6DQ" },

          ],
        },
        {
          name: "MECHANICAL ROBOTICARM PACKER: Model MRP-100",
          features: [
            "Simplified Cam based Mechanical Case Packer",
            "Quick Changeover",
            "All controls with PLC command & inbuilt touch screen HMI",
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
            "Machine weight": "Approximate 1000 kgs",
          },
          media:[{ type: "video", name: "MRP 100", path: "BIITvXJHU7U" },]
        },
        {
          name: "PICK AND PLACE PACKER (PPP-140)",
          features: [
            "A Simple yet Rigid Pick and Place Case packer",
            "Robust Structure",
            "PLC Controlled AC Servo Motors driven",
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
            "Machine weight": "Approximate 1000 kgs",
          },
          brochure: "/brochure/Case_Packer_PPP-140.pdf",
          media: [
            { type: "video", name: "PPP 140", path: "VFvBDEcTyyM" },  
            { type: "video", name: "PPP 140", path: "swD83FX5NIQ" },  
            { type: "video", name: "PPP 140", path: "sOmqmcL1Hsw" },  
            { type: "video", name: "PPP 140", path: "fk9kvGVQjD4" },  
            { type: "video", name: "PPP 140", path: "kyN6rWScmUs" },  
            { type: "video", name: "Pick & Place Packer- PPP 140", path: "swD83FX5NIQ" },
            { type: "video", name: "Case Packer- PPP 140- Carton Box in Box", path: "sK8SGGH34-k" },
            
          ],
        },
      ],
      industries: ["Food & Beverage", "Pharmaceutical", "FMCG", "Liquor"],
    },
    {
      image: "/case_sealer.png",
      name: "Case Sealer",
      slug: "case-sealer",
      features: [],
      description:
        "Automatic case sealer is required when it comes to shifting your corrugated boxes from one end to another without any contamination. We at Mas Systech have developed 2 different types of case sealers. CSM-170 (Case sealer machine), ETM- 120 (Edge tapping machine)",
      media: [
        {
            type: "image",
            name: "Case Sealer",
            path: "/case_sealer.png",
          },
        { type: "video", name: "Case Sealing Machine- CSM 170", path: "ICI5FMCLwlM" },
        { type: "video", name: "Edge Taping Machine", path: "ojL18BFOPqs" },
        
       
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
            "Machine weight": "Approximate 300 kgs",
          },
  
          features: [
            "Semi Automatic Flaps closing",
            "Available in fully enclosed housing",
            "Optional SS-304 constuction",
          ],
          brochure: "/brochure/Case_Sealer_CSM-170.pdf",
        },
        {
          name: "Edge Tapping Machine ETM-120",
          features: [
            "Semi-automatic corner sealer for four side sealing",
            "Manually adjustble to different size of cartons",
            "90 Degree carton turning coveyer & pusher",
          ],
          brochure:"/brochure/Edge_Taping_Machine_ESM-120.pdf",
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
            "Machine weight": "Approximate 450 kgs",
          },
        },
      ],  
      industries: ["Food & Beverage", "Pharmaceutical", "FMCG", "Liquor"],
    },
  
    {
      image: "/palletizer.png",
      name: "Palletizer",
      slug: "palletizer",
      features: [
        "High-Speed, 4-axis palletizing robot with performance driven design",
        "Increased payload, moment and inertia ratings handles unbalanced loads effectively",
        "Suitable for wide range of applications like Beverages, Food, Oil, Chemicals",
      ],
      description:
        "Automatically palletizing the corrugated boxes or Sacks is a major challenge. High speed lines require more man power when it comes to palletizing the filled boxes or sacks at a certain hight. We at Mas Systech have delveped the palletizer for both the application with a pay load of 180kg’s for 8 cycles.",
      media: [
        {
          type: "image",
          name: "Palletizer",
          path: "/palletizer.png",
        },
        { type: "video", name: "Palletizer", path: "4_F6J78zMSo" },
        
      ],
  
      models: [
        {
          name: "default",
          specs: {
            "Vertical reach": "As per Application",
            "Horizontal reach": "As per Application",
            Repeatability: "+/- 0.2 mm",
            Speed: "1-8 Cycles/min",
            Payload: "180kgs (with pick-up head)",
            "pallet size": "1400 mm x 1200 mm",
            Electricals: "16kw, 3ph 440V, 50Hz",
            "Machine weight": "Approximate 1700 kgs",
          },
        },
      ],
      brochure: "/brochure/Palletizer.pdf",
      industries: ["Food & Beverage", "Pharmaceutical", "FMCG", "Liquor"],
    },
    {
      image: "/shrink_wrapping_machine.png",
      name: "SHRINK WRAPPING MACHINE & TUNNEL",
      slug: "shrink-wrapping-machine",
      features: [
        "Automatic feeding, pushing, film feeding and sealing",
        "Adjustable speed conveyor for feeding",
        "Quick changeover from one type to other",
        "Suitable for wide products like, bottles, cans, beverages, cosmetics etc.",
      ],
      description:
        "Shrink wrapping machine for bottles or boxes are required to collectively bundle the goods & ship to longer distances. We at Mas Systech has developed the shrink wrap machines SWM-150 for Bottles or Box applications.",
      media: [
        {
            type: "image",
            name: "SHRINK WRAPPING MACHINE",
            path: "/shrink_wrapping_machine.png",
          },
        { type: "video", name: "90 Degree Infeed (SWM-150)", path: "z4x1NkFFnLs" },
        { type: "video", name: "Inline Shrink Wrapper (SWM-150)", path: "TScLZealwPw" },   
        { type: "video", name: "Shrink Wrapper- Bottle on Trey Application", path: "bZO1KmNxZgM" }, 
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
            "Machine weight": "Approximate 500 Kgs",
          },
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
            "Machine weight": "Approximate 500 Kgs",
          },
        },
      ],
      brochure: "/brochure/Shrink_Wrapper_Machine.pdf",
      industries: ["Food & Beverage", "Pharmaceutical", "FMCG", "Liquor"],
    },
    {
      image: "/tetra_case_packer.png",
      name: "ASEPTIC BRICK",
      slug: "tetra-case-packer",
      features: [
        "AB (ASEPTIC BRICK) is a fully automatic Case Packing Machine which packs products in cases or trays.",
        "The flat blank sheet is folded & glued around the product to form a Case or Tray.",
      ],
      description:
        "Tetra or Aseptic filling lines are high speed lines with particular machines may speed upto 6000 PPM. Our case packer (WCPT)- 410 plays an important role in this. A high speed case packer designed from 125ml to 1 Litres Tetra Bricks.",
      media: [
        {
            type: "image",
            name: "TETRA CASE PACKER",
            path: "/tetra_case_packer.png",
          },
        { type: "video", name: "Top Load Tetra Case Packer", path: "HpxmT6i_AZA" },
        { type: "video", name: "ASEPTIC BRICK", path: "knCtrIeLuPY" },
        { type: "video", name: "Case Packer- Wrap Around Tetra Application", path: "pZujvxc1lXg" },
       
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
            "Machine Weight": "Approximate 2500 KG",
          },
        },
      ],
      brochure: "/brochure/Case_Packer_WCPT-410.pdf",
      industries: ["Food & Beverage", "Pharmaceutical", "FMCG", "Liquor"],
    },
  ];
export default productsList;
