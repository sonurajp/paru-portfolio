import React, { useEffect } from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", minHeight: "100vh", width: "100%", position: "relative" }}>
      {/* Close button top-right */}
      <IconButton
        aria-label="close"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }}
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          right: { xs: 16, md: 32 },
          zIndex: 2000,
        }}
        size="large"
      >
        <Typography sx={{ fontSize: 24, lineHeight: 1 }}>×</Typography>
      </IconButton>

      <Box
        sx={{
          maxWidth: "1160px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          py: { xs: 6, md: 10 },
          display: "flex",
          gap: 6,
          alignItems: "flex-start",
        }}
      >
        {/* Left column */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: 1 }}>
              Parvathy T A
            </Typography>

            <IconButton
              component="a"
              href="https://drive.google.com/file/d/1fxiyP0LO-HnoWaivlz9Cm2PUfDseS9ea/view"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="download resume"
              sx={{ ml: 1 }}
              size="large"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 3v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </IconButton>
          </Box>

          <Box sx={{ height: 8, width: 520, borderBottom: "2px solid #F05A3A", my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
            SENIOR UX/UI DESIGNER
          </Typography>

          <Typography sx={{ mb: 3, color: "text.secondary", lineHeight: 1.7 }}>
            Creative and detail-oriented UX/UI Designer with a strong foundation in user-centered design,
            visual communication, and digital product strategy. Experienced in designing efficient websites,
            applications, dashboards, and B2B products like the Metro Wholesale app, with a focus on usability,
            accessibility, and business impact.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
            EXPERIENCE
          </Typography>
          <Typography sx={{ fontWeight: 700 }}>UX and Product Designer</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Cartoon Mango Studios | 2019 - 2024
          </Typography>

          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              METRO WHOLESALE APP
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              1.8 years Experience
            </Typography>

            <Box component="ul" sx={{ pl: 3, color: "text.secondary", mb: 2 }}>
              <li>Conducted user research to identify and address pain points faced by retailers.</li>
              <li>Designed high-fidelity wireframes to solve usability issues and streamline interactions.</li>
              <li>
                Redesigned key user flows: Onboarding, Login, Homepage, Returns, Orders, Wallet, Buy Later List,
                Help, Search, Product Listing & Detail Pages.
              </li>
              <li>Ideated and implemented UX solutions to improve product discoverability and reduce task time.</li>
              <li>Delivered a comprehensive redesign focusing on layout optimisation, hierarchy, and iconography.</li>
              <li>Refined visual design through color systems, iconography, and illustrations.</li>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
            EDUCATIONAL PLATFORMS
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            1.2 years Experience
          </Typography>
          <Box component="ul" sx={{ pl: 3, color: "text.secondary", mb: 2 }}>
            <li>Served as Lead UX Designer for two educational platforms.</li>
            <li>Created user stories and flows to establish foundational UX architecture.</li>
            <li>Developed wireframes using Sketch and Figma and crafted custom iconography.</li>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
            ECOMMERCE B2C
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            1 year Experience
          </Typography>
          <Box component="ul" sx={{ pl: 3, color: "text.secondary", mb: 2 }}>
            <li>Led UX/UI initiatives across the project lifecycle.</li>
            <li>Created detailed user stories and prototypes with Figma.</li>
            <li>Designed intuitive layouts and interface elements for improved usability.</li>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
            OTHER PROJECTS
          </Typography>
          <Box component="div" sx={{ fontSize: "0.95rem", color: "text.secondary" }}>
            <Box sx={{ mb: 1 }}>
              <Typography component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                Apartment Security Application
              </Typography>
              <Typography component="span" sx={{ ml: 1 }}>
                - Wireframe admin dashboards and mobile interfaces.
              </Typography>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Typography component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                Educational Application
              </Typography>
              <Typography component="span" sx={{ ml: 1 }}>
                - Designed wireframes for admin dashboards.
              </Typography>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Typography component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                MNC Corporate Website
              </Typography>
              <Typography component="span" sx={{ ml: 1 }}>
                - Created layout designs for enhanced user engagement.
              </Typography>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Typography component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                Business News Website
              </Typography>
              <Typography component="span" sx={{ ml: 1 }}>
                - Developed layout and interface designs tailored to editorial needs.
              </Typography>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Typography component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                Promotional Website for Electrical Devices
              </Typography>
              <Typography component="span" sx={{ ml: 1 }}>
                - Crafted layout and interface design for product marketing.
              </Typography>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Typography component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                KYC Verification Websites
              </Typography>
              <Typography component="span" sx={{ ml: 1 }}>
                - Worked on wireframes, layout structuring, and interface design.
              </Typography>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Typography component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                Game Websites
              </Typography>
              <Typography component="span" sx={{ ml: 1 }}>
                - Designed layouts, icons, and banners to support immersive user experience.
              </Typography>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Typography component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                News Portals
              </Typography>
              <Typography component="span" sx={{ ml: 1 }}>
                - Created static graphs, data visualisations, and banners.
              </Typography>
            </Box>

            <Box>
              <Typography component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                Social Meet up Application
              </Typography>
              <Typography component="span" sx={{ ml: 1 }}>
                - Focused on iconography for intuitive user interaction.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right column (sidebar) */}
        <Box
          sx={{
            width: { xs: 220, md: 320 },
            // match your CSS: use 125px padding-top on larger screens
            pt: { xs: 2, md: "125px" },
            // ensure the right column stays top-aligned inside the flex row
            alignSelf: "flex-start",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
            SOFTWARE
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3, color: "text.secondary" }}>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Invision</li>
            <li>Adobe Illustrator</li>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
            VISUAL
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3, color: "text.secondary" }}>
            <li>User Flow</li>
            <li>IA</li>
            <li>Illustration</li>
            <li>Iconography</li>
            <li>Sketching</li>
            <li>Mapping</li>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
            INTERACTION
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3, color: "text.secondary" }}>
            <li>UX Research</li>
            <li>User Story</li>
            <li>Prototyping</li>
            <li>Wireframing</li>
            <li>User Testing</li>
            <li>Competitive Analysis</li>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 800, mt: 1 }}>
            EDUCATION
          </Typography>
          <Typography sx={{ fontWeight: 700 }}>Diploma in UI/UX Design</Typography>
          <Typography color="text.secondary" sx={{ mb: 1 }}>
            DesignBoat Studios, Bangalore · June 2019 - November 2019
          </Typography>

          <Typography sx={{ fontWeight: 700, mt: 2 }}>MA Communications</Typography>
          <Typography color="text.secondary">Madras Christian College, Chennai · 2017 - 2019</Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>
            PORTFOLIO
          </Typography>
          <Typography component="div" sx={{ color: "primary.main", mb: 2 }}>
            https://lnk.ink/Bkdf8
            <br />
            https://lnk.ink/ERVyo
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>
            CONTACT
          </Typography>
          <Typography>parvathy.26@outlook.com</Typography>
          <Typography>95004 85529</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;