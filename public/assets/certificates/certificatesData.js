"use client";

import certSAP from "./SAP_Certificate.png";
import certSalesforce from "./salesforce.png";
import certGithub from "./Github.png";
import certIT from "./IT_essential.png";
import certKodacy from "./Kodacy.png";
import certTCS from "./tcs_codevita.png";
import certCISCO from "./CPA_C++_Cisco_netacd.png";
import certEmbedded from "./Embedded_Sys_Internshala.png";
import certDL from "./Fundamental_of_DL_Nvidia.png";
import certLinkedinBA from "./Linkedin_learning_Intro_BA.png";
import certWireless from "./Linkedin_learning_wireless_network_essential.png";
import certMathworks from "./Mathworks_Virtual_internship.png";
import certML from "./ML_NITLIT_Gorakhpur.png";
import certOS from "./NPTELOperating_system.png";
import certDBMS from "./NPTEL_DBMS.png";
import certSemi from "./NPTEL_Funda_of_Semiconducor.png";
import certSoftskill from "./NPTEL_Softskill.png";
import certADCA from "./SAI_Softnet_ADCA.png";
import certSpokenC from "./Spoken_tutorial_C_CPp.png";
import certSpokenHTML from "./SPoken_tutorial_HTML.png";
import certSpokenIntro from "./Spoken_tutorial_introduction_of_computers.png";
import certIITJodhpur from "./IIT_jodhpur_Internship.png";

export const certificates = [
  {
    id: 1,
    src: certSAP,
    title: "SAP Certificate",
    issuer: "SAP Global Certification",
    date: "March 2024",
    validation: "Valid Forever",
    description:
      "Earned SAP Global Certification demonstrating expertise in SAP ERP modules and enterprise solutions."
  },
  {
    id: 2,
    src: certSalesforce,
    title: "Salesforce",
    issuer: "Salesforce Trailhead",
    date: "February 2024",
    validation: "Valid Forever",
    description:
      "Successfully completed Salesforce Trailhead certification covering CRM solutions, automation workflows, and cloud-based business applications."
  },
  {
    id: 3,
    src: certGithub,
    title: "GitHub",
    issuer: "GitHub Education",
    date: "January 2024",
    validation: "Valid Forever",
    description:
      "Recognized for contributions and completion of GitHub Student Developer Pack training, demonstrating version control and collaborative software development."
  },
  {
    id: 4,
    src: certIT,
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    date: "December 2023",
    validation: "Valid Forever",
    description:
      "Completed Cisco’s IT Essentials course covering computer hardware, software, networking basics, security practices, and troubleshooting techniques."
  },
  {
    id: 5,
    src: certKodacy,
    title: "Kodacy",
    issuer: "Kodacy Platform",
    date: "November 2023",
    validation: "Valid Forever",
    description:
      "Achieved certification in Kodacy focusing on software code analysis, automation testing, and quality assurance methods."
  },
  {
    id: 6,
    src: certTCS,
    title: "TCS CodeVita",
    issuer: "Tata Consultancy Services (TCS)",
    date: "October 2023",
    validation: "Competition Participation",
    description:
      "Participated in TCS CodeVita coding competition, solving algorithmic challenges under time constraints."
  },
  {
    id: 7,
    src: certCISCO,
    title: "C++ Programming Essentials",
    issuer: "Cisco Networking Academy",
    date: "September 2023",
    validation: "Valid Forever",
    description: "Completed Cisco’s CPA: Programming Essentials in C++ certification."
  },
  {
    id: 8,
    src: certEmbedded,
    title: "Embedded Systems",
    issuer: "Internshala",
    date: "August 2023",
    validation: "Valid Forever",
    description:
      "Successfully completed Embedded Systems certification covering microcontrollers, hardware interfacing, and embedded C programming."
  },
  {
    id: 9,
    src: certDL,
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "July 2023",
    validation: "Valid Forever",
    description:
      "Completed NVIDIA’s Fundamentals of Deep Learning course, gaining hands-on knowledge in neural networks and AI model training."
  },
  {
    id: 10,
    src: certLinkedinBA,
    title: "Intro to Business Analysis",
    issuer: "LinkedIn Learning",
    date: "June 2023",
    validation: "Valid Forever",
    description: "Completed LinkedIn Learning’s Introduction to Business Analysis course."
  },
  {
    id: 11,
    src: certWireless,
    title: "Wireless Network Essentials",
    issuer: "LinkedIn Learning",
    date: "May 2023",
    validation: "Valid Forever",
    description: "Completed Wireless Networking Essentials covering post-5G wireless technologies."
  },
  {
    id: 12,
    src: certMathworks,
    title: "MathWorks Virtual Internship",
    issuer: "AICTE x MathWorks",
    date: "April 2023",
    validation: "Valid Forever",
    description:
      "Completed MathWorks AICTE internship program, focusing on MATLAB, Simulink, and simulation-based modeling."
  },
  {
    id: 13,
    src: certML,
    title: "Machine Learning",
    issuer: "NIELIT Gorakhpur",
    date: "March 2023",
    validation: "Valid Forever",
    description:
      "Certified in Machine Learning fundamentals covering supervised and unsupervised algorithms."
  },
  {
    id: 14,
    src: certOS,
    title: "Operating System",
    issuer: "NPTEL",
    date: "February 2023",
    validation: "Valid Forever",
    description: "Completed NPTEL course on Operating Systems."
  },
  {
    id: 15,
    src: certDBMS,
    title: "Database Management Systems",
    issuer: "NPTEL",
    date: "January 2023",
    validation: "Valid Forever",
    description: "Completed NPTEL course on DBMS covering relational models, SQL, and transaction management."
  },
  {
    id: 16,
    src: certSemi,
    title: "Fundamentals of Semiconductor Devices",
    issuer: "NPTEL",
    date: "December 2022",
    validation: "Valid Forever",
    description: "Completed NPTEL course covering semiconductors, diodes, and transistors."
  },
  {
    id: 17,
    src: certSoftskill,
    title: "Developing Soft Skills & Personality",
    issuer: "NPTEL",
    date: "November 2022",
    validation: "Valid Forever",
    description: "Certified in Developing Soft Skills & Personality by NPTEL."
  },
  {
    id: 18,
    src: certADCA,
    title: "Advanced Diploma in Computer Applications",
    issuer: "SAI Softnet",
    date: "October 2022",
    validation: "Valid Forever",
    description: "Completed ADCA program covering MS Office, basic programming, and IT tools."
  },
  {
    id: 19,
    src: certSpokenC,
    title: "C/C++ Programming",
    issuer: "Spoken Tutorial (IIT Bombay)",
    date: "September 2022",
    validation: "Valid Forever",
    description: "Completed Spoken Tutorial certification for C and C++ programming."
  },
  {
    id: 20,
    src: certSpokenHTML,
    title: "HTML",
    issuer: "Spoken Tutorial (IIT Bombay)",
    date: "August 2022",
    validation: "Valid Forever",
    description: "Completed Spoken Tutorial certification for HTML basics."
  },
  {
    id: 21,
    src: certSpokenIntro,
    title: "Introduction to Computers",
    issuer: "Spoken Tutorial (IIT Bombay)",
    date: "July 2022",
    validation: "Valid Forever",
    description: "Completed Spoken Tutorial certification in Introduction to Computers."
  },
  {
    id: 22,
    src: certIITJodhpur,
    title: "IIT Jodhpur Internship",
    issuer: "IIT Jodhpur",
    date: "July 2024",
    validation: "Valid Forever",
    description: "Research Internship at IIT Jodhpur on Traffic Flow Simulation Models."
  }
];
