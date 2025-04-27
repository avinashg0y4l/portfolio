// assets/experienceData.js

import { FaBriefcase, FaUniversity, FaCode, FaCloud, FaCog, FaRobot, FaGraduationCap } from 'react-icons/fa';
import { GiCircuitry } from "react-icons/gi"; // Example for Embedded Systems

const experiencesData = [
  {
    id: 4,
    title: "Machine Learning Intern",
    company_name: "ML Training Program / Company", // Placeholder - Replace if known
    icon: FaRobot,
    iconBg: "#10B981", // CHOOSE YOUR COLOR
    date: "Dec 2024 - Jan 2025",
    points: [
      "Applied supervised/unsupervised ML techniques (classification, regression).", // Combined techniques
      "Focused on model selection, optimization & data visualization.", // Combined focus areas
    ],
    // location: "Remote / City, State"
  },
  {
    id: 3,
    title: "Project Intern",
    company_name: "Dept. of Civil & Infrastructure, IIT Jodhpur",
    icon: FaUniversity,
    iconBg: "#3B82F6", // CHOOSE YOUR COLOR
    date: "May 2024 – Jul 2024",
    points: [
      "Developed traffic flow simulation model for safety optimization.", // Focused on outcome
      "Calculated key safety metrics (TTC, DST, PET, GT) & assessed intersection safety.", // Combined actions
      // "Collaborated on simulating diverse traffic scenarios." // Optional addition if space allows
    ],
    location: "Jodhpur, India"
  },
  {
    id: 2,
    title: "Salesforce Developer Intern",
    company_name: "CRM Solutions Co. / Platform", // Placeholder - Replace if known
    icon: FaCloud,
    iconBg: "#8B5CF6", // CHOOSE YOUR COLOR
    date: "Dec 2023 - Jan 2024",
    points: [
      "Learned SF fundamentals; developed Apex code & Lightning Web Components (LWC).", // Combined learning & dev
      "Utilized VS Code/CLI; earned 3x Super Badges (Apex Specialist, etc.).", // Combined tools & achievement
    ],
     // location: "Remote / City, State"
  },
  {
    id: 1,
    title: "MathWorks Virtual Intern",
    company_name: "MathWorks",
    icon: FaCog,
    iconBg: "#F59E0B", // CHOOSE YOUR COLOR
    date: "Jul 2023 - Sep 2023", // Please verify this date!
    points: [
      "Utilized MATLAB for image/signal processing, ML/DL exploration & problem-solving.", // Single comprehensive point
    ],
    location: "Virtual"
  },
  // --- Optional Education Example ---
  // {
  //   id: 0,
  //   title: "B.Tech in [Your Branch]",
  //   company_name: "[Your University Name]",
  //   icon: FaGraduationCap,
  //   iconBg: "#EC4899", // CHOOSE YOUR COLOR
  //   date: "Month Year - Month Year",
  //   points: [
  //     "Specialized in Robotics & Embedded Systems.",
  //     "Key Coursework: Control Systems, CV, AI.", // Even shorter list
  //     "Senior Project: [Short Topic/Outcome].", // Focus outcome if possible
  //   ],
  //   location: "City, State"
  // },
];

// Export the array
export { experiencesData };