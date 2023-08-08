export const INITIAL = "INITIAL";
export const RESET = "RESET";

export const MAP_STATE_TO_TYPE = {
  INITIAL: {
    userDetails: {
      firstName: "Rawand",
      lastName: "Kamal",
      email: "hello@example.com",
      jobTitle: "Frontend web developer",
      bio: "A passionate frontend developer. I like to build cutting edge application with latest technoglogies. I have started to programming in June 2020 and loving it.",
    },
    projects: [
      {
        projectTitle: "Project Title/Work Position",
        projectDescription:
          "A side project to help people create their\nCV with ease. \n - Agile methodology \n - Used Remix + Shadcn ui",
        stDate: null,
        enDate: null,
      },
    ],
    socials: [
      {
        socialName: "GitHub",
        socialLink: "https://github.com/RawandDev",
      },
    ],
    skills: ["Remix", "Shadcn/ui"],
    education: [
      {
        educationTitle: "Koya University - Software Engineering",
        stDate: null,
        enDate: null,
      },
    ],
  },
  RESET: {
    userDetails: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      bio: "",
    },
    projects: [
      {
        projectTitle: "",
        projectDescription: "",
        stDate: null,
        enDate: null,
      },
    ],
    socials: [
      {
        socialName: "",
        socialLink: "",
      },
    ],
    skills: [""],
  },
};

export const INITIAL_TEMPLATE = "INITIAL_TEMPLATE";
export const MODERN_TEMPLATE = "MODERN_TEMPLATE";

export const DUMMY_START_DATE = new Date("January 02, 2020");

export const COLOR_VARIANTS = [
  { hexCode: "#272829", twColor: "bg-[#272829]" },
  { hexCode: "#9b2226", twColor: "bg-[#9b2226]" },
  { hexCode: "#2b2d42", twColor: "bg-[#2b2d42]" },
  { hexCode: "#b4eeb4", twColor: "bg-[#b4eeb4]" },
  { hexCode: "#720443", twColor: "bg-[#720443]" },
  { hexCode: "#102C57", twColor: "bg-[#102C57]" },
  { hexCode: "#1ABC9C", twColor: "bg-[#1ABC9C]" },
  { hexCode: "#27AE60", twColor: "bg-[#27AE60]" },
  { hexCode: "#7EAA92", twColor: "bg-[#7EAA92]" },
  { hexCode: "#0D1282", twColor: "bg-[#0D1282]" },
  { hexCode: "#E9B384", twColor: "bg-[#E9B384]" },
  { hexCode: "#e98a15", twColor: "bg-[#e98a15]" },
  { hexCode: "#ff66b3", twColor: "bg-[#ff66b3]" },
];
