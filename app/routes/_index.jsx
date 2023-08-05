import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { ListRestartIcon } from "lucide-react";
import Projects from "../components/Sections/Projects";
import Socials from "../components/Sections/Socials";
import Skills from "../components/Sections/Skills";
import UserDetails from "../components/Sections/UserDetails";
import InitialTemplate from "../components/Templates/InitialTemplate";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [userDetails, setUserDetails] = useState({
    firstName: "Rawand",
    lastName: "Kamal",
    email: "hello@example.com",
    jobTitle: "Frontend web developer",
    bio: "A passionate frontend developer. I like to build cutting edge application with latest technoglogies. I have started to programming in June 2020 and loving it.",
  });
  const [projects, setProjects] = useState([
    {
      projectTitle: "Hello World",
      projectDescription:
        "A side project to help people create their\nCV with ease. \n - Agile methodology \n - Used Remix + Shadcn ui",
      stDate: null,
      enDate: null,
    },
  ]);
  const [socials, setSocials] = useState([
    {
      socialName: "GitHub",
      socialLink: "https://github.com/RawandDev",
    },
  ]);
  const [skills, setSkills] = useState(["Remix"]);

  console.log("start", startDate, endDate);

  return (
    <div className="flex gap-20 p-5 relative">
      <div className="w-2/5 flex flex-col gap-10">
        <UserDetails
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
        <Separator />
        <Projects
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          projects={projects}
          setProjects={setProjects}
        />
        <Separator />
        <Socials socials={socials} setSocials={setSocials} />
        <Separator />
        <Skills skills={skills} setSkills={setSkills} />
        <Button
          variant="outline"
          onClick={() => {
            setUserDetails({
              firstName: "",
              lastName: "",
              email: "",
              jobTitle: "",
              bio: "",
            });

            setProjects([
              {
                projectTitle: "",
                projectDescription: "",
                stDate: null,
                enDate: null,
              },
            ]);

            setSocials([
              {
                socialName: "",
                socialLink: "",
              },
            ]);

            setSkills([""]);
          }}
        >
          Reset Fields
          <ListRestartIcon className="mr-2 h-4 w-4" />
        </Button>
      </div>
      <section className="fixed left-2/4">
        <div
          data-size="A4"
          className="p-10 flex gap-10 border-black border-2 print:border-none h-[267mm]"
          id="container"
        >
          <InitialTemplate
            userDetails={userDetails}
            projects={projects}
            skills={skills}
          />
        </div>
      </section>
    </div>
  );
}
