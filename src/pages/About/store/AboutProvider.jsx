import React, { createContext, useContext } from "react";

const AboutContext = createContext();

export const useAbout = () => useContext(AboutContext);

const AboutProvider = ({ children, aboutData }) => {
  const skillTitle = [
    "Collaboration and Communication",
    "Research & Analysis",
    "Problem-Solving & Ideation",
    "Design & Prototyping",
  ];
  const skillSubTitle = {
    "Collaboration and Communication": ["Invision", "Miro"],
    "Research & Analysis": ["Google forms", "Maze"],
    "Problem-Solving & Ideation": ["Miro", "Whimsical", "Google sheets"],
    "Design & Prototyping": ["Figma", "Adobe XD", "Sketch"],
  };
  const skillContent = {
    "Collaboration and Communication": `Showcase design concepts to stakeholders and team members. Collaborate with developers and designers to enhance user experience. Craft microcopy that guides users seamlessly through a digital product.

Presenting design concepts to stakeholders. Working with developers and designers to refine user experiences. Writing effective microcopy for navigation and user guidance`,
    "Research & Analysis": `Conducting user research (surveys, interviews, usability testing). Analyzing qualitative and quantitative data to uncover insights. Creating user personas and journey maps.`,
    "Problem-Solving & Ideation": `Identifying pain points and opportunities for improvement. Iterative testing and data-driven decision-making. Balancing business goals with user needs`,
    "Design & Prototyping": `Identifying pain points and opportunities for improvement. Iterative testing and data-driven decision-making. Balancing business goals with user needs`,
  };
  return (
    <AboutContext.Provider value={{ skillTitle, skillSubTitle, skillContent }}>
      {children}
    </AboutContext.Provider>
  );
};

export default AboutProvider;
