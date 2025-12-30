import { desc, sub, summary, title } from "framer-motion/client";
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
  const personaDetails = {
    persona1: {
      title: "Persona 1 - Lakshmi, Corporate",
      sub1: "Name",
      desc1: "Lakshmi Asokan",
      sub2: "Occupation",
      desc2: "Works in a well known company as Electronics Engineer",
      sub3: "Demographics",
      desc3:
        "33 years old \n Lives in Bangalore,\n Karnataka Takes care of her family in Kochi, for which travels once a month",
      card: [
        {
          title: "Goals",
          desc: "She lives with her partner in Bangalore but wants to care for her parents who live in Kochi. Lakshmi primarily uses IRCTC for her pre-planned trips between Bangalore and Kochi. ",
          height: "156px",
          bgColor: "#FFFBF3",
        },
        {
          title: "Pain point 1",
          desc: "She doesn't want to waste a lot of time booking tickets. She prefers to simply enter her destination and find the right train to book. The process of making selections and completing payments frustrates her.",
          height: "175px",
          bgColor: "#FFE6EB",
        },
        {
          title: "Goal 2",
          desc: "Her hometown is only a 12-hour journey, so she ensures to visit on weekends and travels back Sunday night to be ready for work on Monday.",
          height: "137px",
          bgColor: "#FFFBF3",
        },
        {
          title: "Pain point 2",
          desc: "She finds the booking process too tedious with captchas and error messages, so she asks her husband to handle it for her, and he always books it correctly.",
          height: "156px",
          bgColor: "#FFE6EB",
        },
        {
          title: "Goal 3",
          desc: "Train is the only mode of transportation where she can access a toilet facility. So she consistently prefers a lower berth on the train for convenient access to the toilet facility.",
          height: "156px",
          bgColor: "#FFFBF3",
        },
        {
          title: "Pain point 3",
          desc: "She pre book tickets for many months with different dates which confuses her and sometimes misses her journey.",
          height: "118px",
          bgColor: "#FFE6EB",
        },
        {
          title: "Goal 4",
          desc: "She always keeps reminder of her upcoming journeys",
          height: "99px",
          bgColor: "#FFFBF3",
        },
        {
          title: "Pain point 4",
          desc: "Waiting for a train running late frustrates her more since she is a salary woman",
          height: "118px",
          bgColor: "#FFE6EB",
        },
        {
          title: "Goal 5",
          desc: "Lakshmi starts her days early and maintains a busy schedule during the weekdays. She handles her other tasks quickly and efficiently to return to focusing on her work.",
          height: "156px",
          bgColor: "#FFFBF3",
        },
      ],
    },
    persona2: {
      title: "Persona 2 - Akhil, Corporate",
      sub1: "Name",
      desc1: "Akhil Kumar",
      sub2: "Occupation",
      desc2: "Owns his own clinic",
      sub3: "Demographics",
      desc3:
        "24 years old \n Lives in Delhi \n Introvert, Likes to spend time inside his room",
      card: [
        {
          title: "Pain point 1",
          desc: "Akhil travels once a year, but he often struggles with booking tickets due to his lack of experience.",
          height: "156px",
          bgColor: "#FFE6EB",
        },
        {
          title: "Goal 1",
          desc: "Akhil takes a trip with his close circle of friends and family once a year, and he always prefers to book group tickets for these journeys.",
          height: "156px",
          bgColor: "#FFFBF3",
        },

        {
          title: "Pain point 2",
          desc: "He quickly loses patience with unnecessary time-consuming tasks and often finds it challenging to book tickets.",
          height: "156px",
          bgColor: "#FFE6EB",
        },
        {
          title: "Goal 2",
          desc: "Once he decides to travel, he arranges the trip around his friends' or family's available dates.",
          height: "156px",
          bgColor: "#FFFBF3",
        },

        {
          title: "Pain point 3",
          desc: "He’s a perfectionist, which is why he gets frustrated when train maps and running statuses are difficult to locate in the app.",
          height: "156px",
          bgColor: "#FFE6EB",
        },
        {
          title: "Goal 3",
          desc: "Akhil is full of enthusiasm and loves traveling by train, exploring rail maps, and learning the names of new stations along the way.",
          height: "156px",
          bgColor: "#FFFBF3",
        },
        {
          title: "Pain point 4",
          desc: "He gets easily distracted and so always prefer to remove or close ads that comes upfront while booing tickets",
          height: "156px",
          bgColor: "#FFFBF3",
        },
      ],
    },
    thinkEmpathyData1: [
      {
        title: "Says 1",
        desc: "It would have been been if i am able to book tickets faster",
        height: "118px",
        bgColor: "#E9E0C0",
      },
      {
        title: "Says 2",
        desc: "I love to know train status of my booked train",
        height: "118px",
        bgColor: "#E9E0C0",
      },
      {
        title: "Says 3",
        desc: "Its hard to get lower berth",
        height: "118px",
        bgColor: "#E9E0C0",
      },
      {
        title: "Says 4",
        desc: "My husband is of great help booking my preplanned trips",
        height: "118px",
        bgColor: "#E9E0C0",
      },
    ],
    thinkEmpathyData2: [
      {
        title: "Thinks 1",
        desc: "Is it really worth to spend time here while there are many other apps?",
        height: "118px",
        bgColor: "#BDE2BB",
      },
      {
        title: "Thinks 2",
        desc: "Is it safe and clean travel on my train? I wish i could easily get a lower berth",
        height: "118px",
        bgColor: "#BDE2BB",
      },
      {
        title: "Thinks 3",
        desc: "It is too much effort to go through my bookings",
        height: "118px",
        bgColor: "#BDE2BB",
      },
      {
        title: "Thinks 4",
        desc: "Am i relying on my partner too much?",
        height: "118px",
        bgColor: "#BDE2BB",
      },
    ],
    thinkEmpathyData3: [
      {
        title: "Feels 1",
        desc: "Feels anxious and overwhelmed while booking tickets",
        height: "118px",
        bgColor: "#C3CFE2",
      },
      {
        title: "Feels 2",
        desc: "Feels frustrated waiting for the delayed train in platform",
        height: "118px",
        bgColor: "#C3CFE2",
      },
      {
        title: "Feels 3",
        desc: "Feels stressed to travel night on trains and anxious to sleep on upper berth",
        height: "118px",
        bgColor: "#C3CFE2",
      },
      {
        title: "Feels 4",
        desc: "Feels embarrassed to depend pon someone to book tickets and it makes me feel useless",
        height: "118px",
        bgColor: "#C3CFE2",
      },
    ],
    thinkEmpathyData4: [
      {
        title: "Does 1",
        desc: "Go through other apps to easily book tickets",
        height: "118px",
        bgColor: "#D3C2CF",
      },
      {
        title: "Does 2",
        desc: "Listens to music, grab some snack waiting hours for the delayed train",
        height: "118px",
        bgColor: "#D3C2CF",
      },
      {
        title: "Does 3",
        desc: "Always carry wet wipes she also asks ttr for a berth change",
        height: "118px",
        bgColor: "#D3C2CF",
      },
      {
        title: "Does 4",
        desc: "Buying gifts to encourage husband to continue booking for her",
        height: "118px",
        bgColor: "#D3C2CF",
      },
    ],
    thinkEmpathyData5: [
      {
        title: "Says 1",
        desc: "I will go for a trip to Goa with my friends",
        height: "118px",
        bgColor: "#E9E0C0",
      },
      {
        title: "Says 2",
        desc: "Everyone will be alright booking tickets for night travel",
        height: "118px",
        bgColor: "#E9E0C0",
      },
      {
        title: "Says 3",
        desc: "I want to check maps and running status of my train",
        height: "118px",
        bgColor: "#E9E0C0",
      },
      {
        title: "Says 4",
        desc: "Those ads are distracting gthe purpose of my actions",
        height: "118px",
        bgColor: "#E9E0C0",
      },
    ],
    thinkEmpathyData6: [
      {
        title: "Thinks 1",
        desc: "I am worried if i can compete the process of group booking",
        height: "118px",
        bgColor: "#BDE2BB",
      },
      {
        title: "Thinks 2",
        desc: "Will i be able to book tickets in time?",
        height: "118px",
        bgColor: "#BDE2BB",
      },
      {
        title: "Thinks 3",
        desc: "Where can i find rail maps and running status?",
        height: "118px",
        bgColor: "#BDE2BB",
      },
      {
        title: "Thinks 4",
        desc: "How to close all ads",
        height: "118px",
        bgColor: "#BDE2BB",
      },
    ],
    thinkEmpathyData7: [
      {
        title: "Feels 1",
        desc: "Feels excited for the trip with my friends",
        height: "118px",
        bgColor: "#C3CFE2",
      },
      {
        title: "Feels 2",
        desc: "It is so frustrating to select trains by time",
        height: "118px",
        bgColor: "#C3CFE2",
      },
      {
        title: "Feels 3",
        desc: "How annoying it is to find PNR status and rail maps in this app",
        height: "118px",
        bgColor: "#C3CFE2",
      },
      {
        title: "Feels 4",
        desc: "Feels frustrated to get distracted with these ads positioning",
        height: "118px",
        bgColor: "#C3CFE2",
      },
    ],
    thinkEmpathyData8: [
      {
        title: "Does 1",
        desc: "Go through internet to find amazong spots in Goa",
        height: "118px",
        bgColor: "#D3C2CF",
      },
      {
        title: "Does 2",
        desc: "Calling friend to know their opinion on the same",
        height: "118px",
        bgColor: "#D3C2CF",
      },
      {
        title: "Does 3",
        desc: "Asking his roomate to help knowing where it is",
        height: "118px",
        bgColor: "#D3C2CF",
      },
      {
        title: "Does 4",
        desc: "Use another app for booking tickets",
        height: "118px",
        bgColor: "#D3C2CF",
      },
    ],
  };
  return (
    <CaseStudyContext.Provider
      value={{
        caseStudyIntro,
        summary,
        paradoxDetails,
        ideaBox,
        personaDetails,
      }}
    >
      {children}
    </CaseStudyContext.Provider>
  );
};
export default CaseStudyProvider;
