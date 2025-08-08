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
      whatHappened: [
        {
          title: "Cluttered Interface",
          description:
            "The interface can be overwhelming due to an abundance of options, menus, and links, making navigation difficult for users, especially those who are not tech-savvy.",
          width: "389px",
          ml: "0px",
        },
        {
          title: "Slow loading times",
          description:
            "The website and app have historically faced slow loading times, particularly during peak hours or special ticket booking windows (like Tatkal). This can lead to frustration and difficulty in completing bookings.",
          width: "382px",
          ml: "119px",
        },
        {
          title: "Complex booking ",
          description:
            "The ticket booking process involves multiple steps, which can be confusing. Users often have to navigate through several pages, each with different fields and options, leading to a cumbersome experience.",
          width: "414px",
          ml: "0px",
        },
        {
          title: "Poor error handling",
          description:
            "Error messages are often not informative, leaving users unsure about what went wrong or how to correct it. This lack of clarity can lead to repeated errors and frustration.",
          width: "387px",
          ml: "94px",
        },
        {
          title: "Unintuitive Payment Process",
          description:
            "The payment gateway can be unintuitive, with users often encountering issues such as session timeouts, failed transactions, and unclear instructions, leading to incomplete bookings.",
          width: "405px",
          ml: "0px",
        },
        {
          title: "Inadequate Mobile Optimization",
          description:
            "While there is an app, the mobile web version of the site has been criticized for not being fully optimized, with elements that don’t fit well on smaller screens, making it hard to use on mobile devices.",
          width: "387px",
          ml: "103px",
        },
        {
          title: "Limited Personalization",
          description:
            "The website lacks advanced personalization features, which could streamline the user experience by remembering user preferences, frequent journeys, or payment methods.",
          width: "375px",
          ml: "0px",
        },
        {
          title: "Confusing Captchas",
          description:
            "The Captchas used during the booking process are often difficult to read, adding an unnecessary hurdle for users trying to complete their transactions quickly.",
          width: "414px",
          ml: "133px",
        },
      ],
      comeptitorsImg: [
        "https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/Mask%20group-2.svg?updatedAt=1753628249095",
        "https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/Mask%20group-3.svg?updatedAt=1753628249112",
        "https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/Mask%20group-4.svg?updatedAt=1753628249033",
        "https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/Mask%20group-5.svg?updatedAt=1753628249194",
        "https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/Mask%20group-1.svg?updatedAt=1753628249088",
        "https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/Mask%20group-1.svg?updatedAt=1753628249088",
      ],
    },
  };
  const paradoxDetails = [
    {
      title: "AirBnB",
      subtitle: "Curated Categories & Prioritized Listings",
      description:
        "Instead of overwhelming them with too many options, it displays a manageable number of listings at a time, ensuring a smooth experience. Nudges like “Only X left at this price!” encourage quick decisions, while prioritized “top picks” reduce unnecessary scrolling, making booking effortless and stress-free.",
      img: "https://ik.imagekit.io/Gdragon/Portfolio/Paradox/Group%209896.svg?updatedAt=1753627957195",
      top: "740px",
      imgTop: "455px",
      boxWidth: "514px",
      contentWidth: "366px",
    },

    {
      title: "Netflix",
      subtitle: "Personalized Recommendations",
      description:
        "Instead of displaying all content at once, Netflix curates recommendations based on user behavior, showing a manageable selection to encourage quick decisions.",
      img: "https://ik.imagekit.io/Gdragon/Portfolio/Paradox/Group%209897.svg?updatedAt=1753627958055",
      top: "1922px",
      imgTop: "1599px",
      boxWidth: "361px",
      contentWidth: "329px",
    },
    {
      title: "Duolingo",
      subtitle: "Limited Daily Lessons",
      description:
        "Duolingo caps the number of lessons per day, keeping learning manageable and encouraging consistent engagement without burnout.",
      img: "https://ik.imagekit.io/Gdragon/Portfolio/Paradox/Group%209898.svg?updatedAt=1753627960438",
      top: "3055px",
      imgTop: "2743px",

      boxWidth: "514px",
      contentWidth: "352px",
    },

    {
      title: "Apple",
      subtitle: "Fewer Product Choices",
      description:
        "Apple offers only a few iPhone, iPad, and Mac models instead of dozens of variations. Reduces decision fatigue and makes purchasing easier.",
      img: "https://ik.imagekit.io/Gdragon/Portfolio/Paradox/Group%209899.svg?updatedAt=1753627958962",
      boxWidth: "514px",
      contentWidth: "352px",
      top: "4199px",
      imgTop: "3887px",
    },
  ];
  const ideaBox = [
    {
      title: "Hick’s Law",
      subtitle:
        "The time it takes to make a decision increases with the number of choices.",
      description:
        "Apple simplifies product selection by offering only a few models per category.",
    },
    {
      title: "Miller’s Law",
      subtitle:
        "The average person can hold 7 ± 2 items in their working memory.",
      description:
        "Google Search surfaces featured snippets to avoid cognitive overload.",
    },
    {
      title: "Fitts’ Law",
      subtitle:
        "The time to interact with an option depends on its size and distance. Fewer, larger buttons improve usability. ",
      description:
        "Netflix’s limited home screen options make selecting a show easier.",
    },
    {
      title: "The Rule of Three",
      subtitle:
        "People process information best when presented in three key choices or categories. ",
      description: "Uber keeps ride choices simple, Economy, Comfort, and XL.",
    },
    {
      title: "KISS Principle ",
      subtitle:
        "Keep It Simple, Stupid - The time it takes to make a decision increases with the number of choices.",
      description:
        "Tinder’s one-swipe interface keeps interactions effortless.",
    },
  ];
  return (
    <CaseStudyContext.Provider
      value={{ caseStudyIntro, summary, paradoxDetails, ideaBox }}
    >
      {children}
    </CaseStudyContext.Provider>
  );
};
export default CaseStudyProvider;
