// lib/assets.js

// Detect if running in production (GitHub Pages)
const prefix =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

// --- Icons & Images ---
export const assets = {
  user_image: `${prefix}/assets/user-image.png`,
  user_image1: `${prefix}/assets/user-image1.png`,
  code_icon: `${prefix}/assets/code-icon.png`,
  code_icon_dark: `${prefix}/assets/code-icon-dark.png`,
  edu_icon: `${prefix}/assets/edu-icon.png`,
  edu_icon_dark: `${prefix}/assets/edu-icon-dark.png`,
  project_icon: `${prefix}/assets/project-icon.png`,
  project_icon_dark: `${prefix}/assets/project-icon-dark.png`,
  vscode: `${prefix}/assets/vscode.png`,
  firebase: `${prefix}/assets/firebase.png`,
  figma: `${prefix}/assets/figma.png`,
  git: `${prefix}/assets/git.png`,
  mongodb: `${prefix}/assets/mongodb.png`,
  right_arrow_white: `${prefix}/assets/right-arrow-white.png`,
  right_arrow: `${prefix}/assets/right-arrow.png`,
  right_arrow_bold: `${prefix}/assets/right-arrow-bold.png`,
  right_arrow_bold_dark: `${prefix}/assets/right-arrow-bold-dark.png`,
  logo: `${prefix}/assets/logo.png`,
  logo_dark: `${prefix}/assets/logo-dark.png`,
  logo1: `${prefix}/assets/logo1.png`,
  mail_icon: `${prefix}/assets/mail-icon.png`,
  mail_icon_dark: `${prefix}/assets/mail-icon-dark.png`,
  profile_img: `${prefix}/assets/profile-img.png`,
  download_icon: `${prefix}/assets/download-icon.png`,
  hand_icon: `${prefix}/assets/hand-icon.png`,
  header_bg_color: `${prefix}/assets/header-bg-color.png`,
  moon_icon: `${prefix}/assets/moon-icon.png`,
  sun_icon: `${prefix}/assets/sun-icon.png`,
  arrow_icon: `${prefix}/assets/arrow-icon.png`,
  arrow_icon_dark: `${prefix}/assets/arrow-icon-dark.png`,
  menu_black: `${prefix}/assets/menu-black.png`,
  menu_white: `${prefix}/assets/menu-white.png`,
  close_black: `${prefix}/assets/close-black.png`,
  close_white: `${prefix}/assets/close-white.png`,
  web_icon: `${prefix}/assets/web-icon.png`,
  mobile_icon: `${prefix}/assets/mobile-icon.png`,
  ui_icon: `${prefix}/assets/ui-icon.png`,
  graphics_icon: `${prefix}/assets/graphics-icon.png`,
  send_icon: `${prefix}/assets/send-icon.png`,

  // --- Work / Project Images ---
  work1: `${prefix}/assets/work-1.png`,
  work2: `${prefix}/assets/work-2.png`,
  work3: `${prefix}/assets/work-3.png`,
  work4: `${prefix}/assets/work-4.png`,
  designPortfolio: `${prefix}/assets/projects/designwithraghusite.gif`,

  // --- Certificates ---
  cert1: `${prefix}/assets/certificates/SAP_Certificate.png`,
  cert2: `${prefix}/assets/certificates/salesforce.png`,
  cert3: `${prefix}/assets/certificates/Github.png`,
  cert4: `${prefix}/assets/certificates/IT_essential.png`,
  cert5: `${prefix}/assets/certificates/Kodacy.png`,
  cert6: `${prefix}/assets/certificates/tcs_codevita.png`,
  cert7: `${prefix}/assets/certificates/certificat_add_a-01.png`,
  cert8: `${prefix}/assets/certificates/certificat_add_a-03.png`,
  cert9: `${prefix}/assets/certificates/certificat_add_a-04.png`,
  cert10: `${prefix}/assets/certificates/certificat_add_a-05.png`,
  cert11: `${prefix}/assets/certificates/certificat_add_a-06.png`,
  cert12: `${prefix}/assets/certificates/certificat_add_a-08.png`,
};

// --- Services ---
export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description:
      "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

// --- Info List ---
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "Python, C & CPP, MATLAB, HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Electronics & Communication",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

// --- Tools ---
export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
