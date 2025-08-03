import { sub, summary, title } from "framer-motion/client";
import React, { createContext, useContext } from "react";
import { useParams } from "react-router-dom";

const CaseStudyContext = createContext();
export const useCaseStudyContext = () => useContext(CaseStudyContext);

const CaseStudyProvider = ({ children }) => {
  const caseStudyIntro = {
    "paradox-case-study": {
      title:
        "The burden of plenty: How too many choices make us less satisfied",
      subtitle: "Paradox of choices",
      img: "https://ik.imagekit.io/Gdragon/Portfolio/Paradox/banner%20paradox.jpg?updatedAt=1754205301477",
    },
    "railway-case-study": {
      title:
        "The burden of plenty: How too many choices make us less satisfied",
      subtitle: "IRCTC Refining",
      img: "https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/banner%20irctc.jpg?updatedAt=1754205360322",
    },
  };
  const summary = {
    "paradox-case-study": {
      preTitle:
        "Whenever I visit a hypermarket, my eyes jump from one thing to another, overwhelming my brain with unnecessary information—sometimes even causing dizziness. It made me wonder: why do crowded markets and endless scrolling in apps leave us drained, yet we often end up buying nothing? ",
      title:
        "We assume more choices lead to better decisions, but they often create confusion and indecision instead.",
      postTitle:
        "Take choosing an outfit, for example. You decide to wear black, but with 30 different black outfits in your wardrobe, you end up frustrated, unable to choose. Instead of making things easier, too many options create decision fatigue, slowing us down rather than helping us move forward. Less can truly be more.",
      summaryCard: [
        {
          cardTitle: "Decision Making",
          cardDescription:
            "When faced with too many choices, people often struggle to decide because they feel overwhelmed by the possibilities. This can make even simple decisions feel stressful and time-consuming.",
        },
        {
          cardTitle: "Decision Fatigue",
          cardDescription:
            " Constantly evaluating options, especially in high-stakes or repetitive situations, can wear down mental energy, leading to poorer choices, impulsive decisions, or complete avoidance of decision-making.",
        },
        {
          cardTitle: "Regret",
          cardDescription:
            'When there are too many options, people may worry they didn’t make the "best" choice. They might dwell on what they could have picked instead, leading to feelings of dissatisfaction and regret, even if their choice was a good one.',
        },
      ],
    },
    "railway-case-study": {
      preTitle:
        "For my regular journeys from Bangalore to Kochi, I’ve always relied on IRCTC—even when I knew the experience might be a bit rough around the edges. From unexpected ads to the dreaded reCAPTCHA loop, booking a ticket often tested my patience. Over time, apps like ConfirmTkt began offering a much smoother alternative, and many users, including myself, started drifting away. That’s when I felt the urge to reimagine the experience—not just as a designer, but as a frequent traveler who still wanted to root for IRCTC. And that’s where this journey began.",
      title:
        "On average, IRCTC handles around 800,000 to 1 million ticket bookings per day.",
      postTitle:
        "IRCTC, a branch of Indian Railways established in 1999, manages online ticket booking, catering, and tourism services across India. It runs one of the country’s largest e-commerce platforms through its website and app, handling millions of bookings daily. From serving meals on trains to offering food at stations, IRCTC takes care of passengers dining needs. It also curates travel experiences, including luxury train tours and domestic or international holiday packages. For last-minute travel, the Tatkal system helps users secure tickets quickly. To reward frequent travelers, IRCTC offers wallet services and a loyalty program called iMudra.",
      summaryCard: [
        {
          cardTitle: "Official Platform",
          cardDescription:
            "IRCTC is the official ticketing platform for Indian Railways, making it the most reliable and trusted source for booking train tickets in India.",
        },
        {
          cardTitle: "Comprehensive Services",
          cardDescription:
            "IRCTC offers a wide range of services beyond just ticket booking, including checking PNR status, train schedules, seat availability, and catering services, all in one place.",
        },
        {
          cardTitle: "Exclusive Features",
          cardDescription:
            "Features like Tatkal and Premium Tatkal booking, which allow last-minute ticket purchases, are exclusive to IRCTC. These are essential for users who need to travel on short notice.",
        },
        {
          cardTitle: "Wide Coverage",
          cardDescription:
            "IRCTC provides access to all Indian Railways trains, covering the entire country. No other app offers such extensive coverage, making IRCTC indispensable for train travelers in India.",
        },
        {
          cardTitle: "Security and Trust",
          cardDescription:
            "Being the official platform, IRCTC ensures secure transactions and reliable customer support, which builds trust among users. Many third-party apps lack this level of security and support.",
        },
        {
          cardTitle: "Direct Integration",
          cardDescription:
            "IRCTC is directly integrated with the Indian Railways system, ensuring real-time updates on train schedules, cancellations, and booking statuses, which third-party apps may not provide with the same accuracy.",
        },
        {
          cardTitle: "Government Endorsement",
          cardDescription:
            "IRCTC supports multiple payment methods, including UPI, credit/debit cards, net banking, and e-wallets, catering to a wide range of user preferences.",
        },
        {
          cardTitle: "Familiarity",
          cardDescription:
            "Over time, many users have become familiar with the IRCTC platform, preferring its interface and services over other apps. This familiarity reduces the learning curve and makes it easier to use.",
        },
      ],
    },
  };
  return (
    <CaseStudyContext.Provider value={{ caseStudyIntro, summary }}>
      {children}
    </CaseStudyContext.Provider>
  );
};
export default CaseStudyProvider;
