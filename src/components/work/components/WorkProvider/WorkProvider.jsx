import React, { createContext, useContext } from "react";

const WorkContext = createContext();
export const useWorkData = () => useContext(WorkContext);

const WorkProvider = ({ children }) => {
  const summaryData = {
    "rebuild-wholesale-portal": {
      bannerImage:
        "https://ik.imagekit.io/Gdragon/Portfolio/Wholesale/Group%209874.svg?updatedAt=1753626630677",
      summaryText: [
        {
          head: "About Client",
          content:
            "The METRO Wholesale, part of Reliance Retail Ventures Ltd, is a leading wholesale platform in India, offering a wide range of food and non-food products. It serves a diverse customer base, including Traders, Kiranas, HoReCa (Hotels, Restaurants, Caterers), and other independent businesses. The platform was initially designed to provide an online marketplace for retailers to purchase products in bulk and facilitate seamless online transactions.",
        },
        {
          head: "Area Of Responsibility",
          content:
            "Product Designer -Problem solving/User interface & Visual Design. Direct UX design on existing design/Refining",
          headtwo: "Project Overview",
          contentTwo:
            "Determine to solve problematic design with a focus on performance and user experience",
        },
        {
          head: "Work Years",
          content: "2.4 years",
          headtwo: "Industry",
          contentTwo: "Ecommerce - B2B",
        },
      ],
    },
    "social-platform": {
      bannerImage:
        "https://ik.imagekit.io/Gdragon/Portfolio/Social%20media%20for%20students/Group%209876.svg?updatedAt=1753626681622",
      summaryText: [
        {
          head: "About Client",
          content:
            "Roverin is a social media for students from schools and colleges to maximise their knowledge on their syllabus via a social media. Students can connect with teachers and other students, create portfolios and presentation to",
        },
        {
          head: "Area Of Responsibility",
          content:
            "User Experience Designer - Collaboration,Wire-framing, Visual Design, implementation and suport.",
          headtwo: "Work Years",
          contentTwo: "3",
        },
        {
          head: "Project Overview",
          content: "Building a social platform for students",
          headtwo: "Industry",
          contentTwo: "Education",
        },
      ],
    },
    "sports-application": {
      bannerImage:
        "https://ik.imagekit.io/Gdragon/Portfolio/Sports%20app/Banner%20sports%20app.svg?updatedAt=1753626663702",
      summaryText: [
        {
          head: "About Client",
          content:
            "Nextsports is a comprehensive physical education platform designed for school students, individuals, and institutes to effectively manage and enhance students' physical health education. The Nextsports portal brings together content creators, teachers, and schools to support student engagement and learning, ensuring a holistic approach to physical education. By leveraging this collaborative ecosystem, Nextsports enables children to access quality physical education not only in schools but also at home, promoting overall well-being and healthy lifestyle habits.",
        },
        {
          head: "Area Of Responsibility",
          content:
            "User Experience Designer - Collaboration,Wire-framing, Visual Design, implementation and suport.",
          headtwo: "Work Years",
          contentTwo: "6 months",
        },
        {
          head: "Project Overview",
          content:
            "The goal is to create an app for schools and students, providing guided physical education with trainer support.",
          headtwo: "Industry",
          contentTwo: "Educational platform",
        },
      ],
    },
    "health-food": {
      bannerImage:
        "https://ik.imagekit.io/Gdragon/Portfolio/Nutri%20app/Banner.svg?updatedAt=1753626680908",
      summaryText: [
        {
          head: "About Client",
          content:
            "Roverin is a social media for students from schools and colleges to maximise their knowledge on their syllabus via a social media. Students can connect with teachers and other students, create portfolios and presentation to",
        },
        {
          head: "Area Of Responsibility",
          content:
            "User Experience Designer - Collaboration,Wire-framing, Visual Design, implementation and suport.",
          headtwo: "Work Years",
          contentTwo: "6 months",
        },
        {
          head: "Project Overview",
          content:
            "The goal is to create an app for schools and students, providing guided physical education with trainer support.",
          headtwo: "Industry",
          contentTwo: "Educational platform",
        },
      ],
    },
  };
  const projectShowcaseData = {
    "rebuild-wholesale-portal": {
      summaryText: [
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Wholesale/onboarding.svg?updatedAt=1753626630746",
          head: "Onboarding",
          content:
            "The design aimed to verify each account before onboarding. To become Metro’s exclusive members, users were required to complete document verification. This led to the use of progressive disclosure and a strong focus on error prevention and recovery throughout the flow.",
          height: "789px",
          width: "646px",
        },
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Wholesale/Pindrop.svg?updatedAt=1753626630779",
          head: "Pindrop",
          content:
            "To ensure accurate enterprise location tracking, Metro recommended implementing drop pin user flows. We focused on enhancing map navigation by introducing 'Current Location' and 'Reset to Store Location' CTAs for improved user efficiency.",
          height: "789px",
          width: "646px",
        },
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Wholesale/search%20landing%20page.svg?updatedAt=1753626630727",
          head: "Search Landing page",
          content:
            "METRO Wholesale users frequently purchase products in bulk, making it challenging to navigate a traditional dropdown search efficiently. To enhance the user experience, a full-screen Search Landing Page was implemented, designed for seamless and intuitive product discovery.",
          height: "789px",
          width: "646px",
        },
      ],
    },
    "social-platform": {
      summaryText: [
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Social%20media%20for%20students/Community.svg?updatedAt=1753626681685",
          head: "Community",
          content:
            "Designed the Nextsports application to enhance physical education for school students, promoting continuous learning and growth. Implemented structured units and lessons for consistent knowledge delivery, along with a chat feature that enables direct communication with trainers, ensuring personalized guidance and effective progress tracking.",
          height: "789px",
          width: "646px",
        },
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Social%20media%20for%20students/Portfolio.svg?updatedAt=1753626681831",
          head: "Portfolio",
          content:
            "Creating a dedicated teacher dashboard with detailed views of their assigned classes and students. Teachers can assess student performance, provide feedback, and assign grades efficiently within the platform.",
          height: "833px",
          width: "646px",
        },
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Social%20media%20for%20students/Presentation.svg?updatedAt=1753626682280",
          head: "Presentations",
          content:
            "Designed an intuitive interface for content creators to seamlessly add lessons, units, fun games, assessments, and warm-ups to each class. The user-friendly layout ensures efficient content management and enhances the learning experience for students.",
          height: "834px",
          width: "646px",
        },
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Social%20media%20for%20students/Messages.svg?updatedAt=1753626681743",
          head: "Messages",
          content:
            "Chat room was v ery important for a social media especially if its fo",
          height: "789px",
          width: "646px",
        },
      ],
    },
    "sports-application": {
      summaryText: [
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Sports%20app/Student.svg?updatedAt=1753626663763",
          head: "Student",
          content:
            "Designed the Nextsports application to enhance physical education for school students, promoting continuous learning and growth. Implemented structured units and lessons for consistent knowledge delivery, along with a chat feature that enables direct communication with trainers, ensuring personalized guidance and effective progress tracking.",
          height: "789px",
          width: "646px",
        },
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Sports%20app/Teachers.svg?updatedAt=1753626663772",
          head: "Teachers",
          content:
            "Creating a dedicated teacher dashboard with detailed views of their assigned classes and students. Teachers can assess student performance, provide feedback, and assign grades efficiently within the platform.",
          height: "825px",
          width: "646px",
        },
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Sports%20app/Content%20creation.svg?updatedAt=1753626663603",
          head: "Content Creators",
          content:
            "Designed an intuitive interface for content creators to seamlessly add lessons, units, fun games, assessments, and warm-ups to each class. The user-friendly layout ensures efficient content management and enhances the learning experience for students.",
          height: "789px",
          width: "646px",
        },
      ],
    },
    "health-food": {
      summaryText: [
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Nutri%20app/Walkthrough.svg?updatedAt=1753626680959",
          head: "Walkthrough",
          content: "Designed walkthrough section with 3d illustrations",
          height: "789px",
          width: "646px",
        },
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Nutri%20app/Verification.svg?updatedAt=1753626680957",
          head: "Verification",
          content:
            "Creating a dedicated teacher dashboard with detailed views of their assigned classes and students. Teachers can assess student performance, provide feedback, and assign grades efficiently within the platform.",
          height: "789px",
          width: "646px",
        },
        {
          bannerImage:
            "https://ik.imagekit.io/Gdragon/Portfolio/Nutri%20app/Presentaions.svg?updatedAt=1753626681014",
          head: "Presentations",
          content:
            "Designed an intuitive interface for content creators to seamlessly add lessons, units, fun games, assessments, and warm-ups to each class. The user-friendly layout ensures efficient content management and enhances the learning experience for students.",
          height: "789px",
          width: "646px",
        },
      ],
    },
  };
  const workData = { summaryData, projectShowcaseData };
  return (
    <WorkContext.Provider value={workData}>{children}</WorkContext.Provider>
  );
};

export default WorkProvider;
