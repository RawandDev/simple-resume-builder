import { useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { ToastAction } from "~/components/ui/toast";
import { useToast } from "~/components/ui/use-toast";
import { ListRestartIcon } from "lucide-react";
import Projects from "../components/Sections/Projects";
import Socials from "../components/Sections/Socials";
import Skills from "../components/Sections/Skills";
import UserDetails from "../components/Sections/UserDetails";
import InitialTemplate from "../components/Templates/InitialTemplate";
import { INITIAL, MAP_STATE_TO_TYPE, RESET } from "../constants/general";
import { useReactToPrint } from "react-to-print";
import ModernTemplate from "../components/Templates/ModernTemplate";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [userDetails, setUserDetails] = useState(
    MAP_STATE_TO_TYPE[INITIAL].userDetails
  );
  const [projects, setProjects] = useState(MAP_STATE_TO_TYPE[INITIAL].projects);
  const [socials, setSocials] = useState(MAP_STATE_TO_TYPE[INITIAL].socials);
  const [skills, setSkills] = useState(MAP_STATE_TO_TYPE[INITIAL].skills);
  const templateRef = useRef();

  const { toast } = useToast();

  console.log("start", startDate, endDate);

  const handlePrint = useReactToPrint({
    content: () => templateRef.current,
    documentTitle: `${userDetails.firstName} ${userDetails.lastName} - CV`,
  });

  return (
    <div className="flex gap-20 p-5 relative">
      <div className="w-2/5 flex flex-col gap-10 print:hidden">
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
            setUserDetails(MAP_STATE_TO_TYPE[RESET].userDetails);
            setProjects(MAP_STATE_TO_TYPE[RESET].projects);
            setSocials(MAP_STATE_TO_TYPE[RESET].socials);
            setSkills(MAP_STATE_TO_TYPE[RESET].skills);

            toast({
              title: "Fields have been cleared ✔",
              description:
                "If you want to undo the changes simply click on the `Undo` button.",
              action: (
                <ToastAction
                  altText="Undo action"
                  onClick={() => {
                    setUserDetails(MAP_STATE_TO_TYPE[INITIAL].userDetails);
                    setProjects(MAP_STATE_TO_TYPE[INITIAL].projects);
                    setSocials(MAP_STATE_TO_TYPE[INITIAL].socials);
                    setSkills(MAP_STATE_TO_TYPE[INITIAL].skills);
                  }}
                >
                  Undo
                </ToastAction>
              ),
            });
          }}
        >
          Reset Fields
          <ListRestartIcon className="mr-2 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            handlePrint();
          }}
        >
          Download
          <ListRestartIcon className="mr-2 h-4 w-4" />
        </Button>
      </div>
      <section
        className="fixed left-2/4 w-1/2 print:left-0 print:w-full"
        ref={templateRef}
      >
        <div
          className="border-black border-2 print:border-none h-[267mm]"
          id="container"
        >
          {/* <InitialTemplate
            userDetails={userDetails}
            projects={projects}
            skills={skills}
            socials={socials}
          /> */}
          <ModernTemplate
            userDetails={userDetails}
            projects={projects}
            skills={skills}
            socials={socials}
          />
        </div>
      </section>
    </div>
  );
}
