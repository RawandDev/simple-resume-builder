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
