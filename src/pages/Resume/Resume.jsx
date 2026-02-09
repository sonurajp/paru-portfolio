import React, { useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HeaderPart from "./HeaderPart";
import ResumeAbout from "./ResumeAbout";
import ExperienceSection from "./ExperienceSection";
import SkillCategory from "./SkillCategory";
const Resume = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const educationdata = [
    {
      segments: [
        { text: "Served as ", highlight: false },
        { text: "Lead UX Designer ", highlight: true },
        { text: "for two educational platforms.", highlight: false },
      ],
    },
    {
      segments: [
        { text: "Created ", highlight: false },
        { text: "user stories and user flows ", highlight: true },
        {
          text: `to establish the foundational UX 
architecture for both projects.`,
          highlight: false,
        },
      ],
    },
    {
      segments: [
        { text: "Developed ", highlight: false },
        { text: "wireframes ", highlight: true },
        {
          text: `using Sketch and Figma to visualize and iterate
on design solutions.`,
          highlight: false,
        },
      ],
    },
    {
      segments: [
        { text: "Designed custom ", highlight: false },
        { text: " iconography and illustrations ", highlight: true },
        {
          text: ` aligned with the 
product’s visual language.`,

          highlight: false,
        },
      ],
    },
    {
      segments: [
        { text: "Executed UI design including", highlight: false },
        {
          text: ` layout systems, interactive elements, and
visual storytelling through illustrations.`,
          highlight: true,
        },
      ],
    },
  ];
  const metrodata = [
    {
      segments: [
        { text: "Conducted user research to identify and ", highlight: false },
        { text: "address pain points ", highlight: true },

        {
          text: ` faced
by retailers of Metro.`,
          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: `Designed `,
          highlight: false,
        },
        {
          text: `high-fidelity wireframes `,
          highlight: true,
        },
        {
          text: `to solve usability issues and
streamline user interactions. `,
          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: `Redesigned`,
          highlight: false,
        },
        {
          text: ` key user flows `,
          highlight: true,
        },
        {
          text: `including: Onboarding, Login, Homepage,
Returns, Orders, Wallet, Buy Later List, Help, Search, Product Listing 
& Detail Pages. `,
          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: `Ideated and implemented UX solutions to improve`,
          highlight: false,
        },
        {
          text: ` product 
discoverability `,
          highlight: true,
        },
        {
          text: `and to reduce user task time`,
          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: `Delivered a`,
          highlight: false,
        },
        {
          text: ` comprehensive redesign`,
          highlight: true,
        },
        {
          text: ` focusing on: Layout optimisation,
Section hierarchy, Font size consistency, Iconography improvements.`,
          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: `Refined visual design by working on: `,
          highlight: false,
        },
        {
          text: `Colour codes, Icon systems, 
Custom illustrations.  `,
          highlight: true,
        },
      ],
    },
  ];
  const emcommereData = [
    {
      segments: [
        {
          text: "Led UX and UI design initiatives across the project lifecycle.  ",
          highlight: false,
        },
      ],
    },
    {
      segments: [
        { text: "Created ", highlight: false },
        { text: "detailed user stories ", highlight: true },
        {
          text: "to inform and ideate user flows.",
          highlight: false,
        },
      ],
    },
    {
      segments: [
        { text: "Developed ", highlight: false },
        { text: "wireframes and prototypes ", highlight: true },
        {
          text: "using Figma. ",
          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: "Designed intuitive ",
          highlight: false,
        },
        {
          text: "layouts and crafted interface design elements ",
          highlight: true,
        },
        {
          text: `for 
improved usability.`,
          highlight: false,
        },
      ],
    },
  ];
  const otherProjectsData = [
    {
      segments: [
        {
          text: "Apartment Security Application",
          highlight: true,
        },
        {
          text: ` - Wireframe admin dashboards and
mobile interfaces. `,
          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: "Educational Application",
          highlight: true,
        },
        {
          text: ` - Designed wireframes for admin dashboards 
platform  MNC Corporate Website - Created layout designs for enhanced
user engagement. `,

          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: "Business News Website",
          highlight: true,
        },
        {
          text: ` - Developed layout and interface designs tailored 
to editorial needs.  `,

          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: "Promotional Website for Electrical Devices",
          highlight: true,
        },
        {
          text: ` - Crafted layout and interface
design for product marketing. `,

          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: "KYC Verification Websites",
          highlight: true,
        },
        {
          text: `  - Worked on wireframes, layout structuring, and 
interface design.`,

          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: "Game Websites",
          highlight: true,
        },
        {
          text: ` - Designed layouts, icons, and banners to support
immersive user experience. `,

          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: "News Portals",
          highlight: true,
        },
        {
          text: ` - Created static graphs, data visualisations, banners.`,

          highlight: false,
        },
      ],
    },
    {
      segments: [
        {
          text: "Social Meet up Application",
          highlight: true,
        },
        {
          text: `  - Focused on iconography for intuitive user 
interaction.`,
          highlight: false,
        },
      ],
    },
  ];
  const skillData = [
    {
      title: "Software",
      items: ["Sketch", "Figma", "Adobe XD", "Invision", "Adobe Illustrator"],
      type: "skill",
    },
    {
      title: "Visual",
      items: [
        "User Flow",
        "IA",
        "Illustration",
        "Iconography",
        "Sketching",
        "Mapping",
      ],
      type: "skill",
    },
    {
      title: "Interaction",
      items: [
        "UX Research",
        "User Story",
        "Prototyping",
        "Wireframing",
        "User Testing",
        "Competitive Analysis",
      ],
      type: "skill",
    },
    {
      title: "Education",
      items: ["Diploma in UI/UX Design", "MA Communications"],
      type: "edu",
    },
    {
      title: "Portfolio",
      items: ["https://lnk.ink/Bkdf8", "https://lnk.ink/ERVyo"],
      type: "skill",
    },
    {
      title: "contact",
      items: ["parvathy.26@outlook.com", "95004 85529"],
      type: "skill",
    },
  ];

  return (
    <Box display="flex" backgroundColor="#f3f2ee">
      <Box>
        <IconButton
          sx={{
            padding: "8px",
            position: "absolute",
            top: "14px",
            left: "1300px",
            color: "black",
            borderRadius: "50%",
            width: "40px", // 👈 change this
            height: "40px",
            "&:hover": {
              opacity: 0.7,
              borderRadius: "50%",
              width: "40px", // 👈 change this
              height: "40px",
            },
          }}
          aria-label="download"
          onClick={() => navigate(-1)}
        >
          <CloseIcon />
        </IconButton>

        <HeaderPart />
        <ResumeAbout />
        <ExperienceSection
          heading="Metro Wholesale App"
          subHeading="1.8 years Experience"
          points={metrodata}
        />
        <ExperienceSection
          heading="Educational Platforms"
          subHeading="1.2 years Experience"
          points={educationdata}
        />
        <ExperienceSection
          heading="Ecommerce B2C"
          subHeading="1 year Experience"
          points={emcommereData}
        />
        <ExperienceSection
          heading="Other projects:"
          points={otherProjectsData}
        />
      </Box>
      <Box
        sx={{
          width: "300px",
          padding: "40px",
          marginTop: "290px",
          marginLeft: "100px",
        }}
      >
        {skillData.map((section, idx) => (
          <SkillCategory
            key={idx}
            title={section.title}
            items={section.items}
            type={section.type}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Resume;
