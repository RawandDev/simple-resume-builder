import { useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { ToastAction } from "~/components/ui/toast";
import { useToast } from "~/components/ui/use-toast";
import { DownloadIcon, ListRestartIcon } from "lucide-react";
import Projects from "../components/Sections/Projects";
import Socials from "../components/Sections/Socials";
import Skills from "../components/Sections/Skills";
import UserDetails from "../components/Sections/UserDetails";
import {
  INITIAL,
  INITIAL_TEMPLATE,
  MAP_STATE_TO_TYPE,
  RESET,
} from "../constants/general";
import { useReactToPrint } from "react-to-print";
import { Accordion } from "~/components/ui/accordion";
import TemplateRenderer from "../components/TemplateRender/TemplateRender";
import TemplatePicker from "../components/TemplatePicker/TemplatePicker";
import Education from "../components/Sections/Education";
import ColorPicker from "../components/Sections/ColorPicker";

export const meta = () => {
  return [
    { title: "Simple Resume Builder" },
    { name: "description", content: "Elegant way of creating your resume." },
  ];
};

export default function Index() {
  const [userDetails, setUserDetails] = useState(
    MAP_STATE_TO_TYPE[INITIAL].userDetails
  );
  const [projects, setProjects] = useState(MAP_STATE_TO_TYPE[INITIAL].projects);
  const [socials, setSocials] = useState(MAP_STATE_TO_TYPE[INITIAL].socials);
  const [skills, setSkills] = useState(MAP_STATE_TO_TYPE[INITIAL].skills);
  const [educations, setEducations] = useState(
    MAP_STATE_TO_TYPE[INITIAL].education
  );
  const templateRef = useRef();
  const [selectedTemplate, setSelectedTemplate] = useState(INITIAL_TEMPLATE);
  const [selectedImage, setSelectedImage] = useState(null);

  const { toast } = useToast();

  const handlePrint = useReactToPrint({
    content: () => templateRef.current,
    documentTitle: `${userDetails.firstName} ${userDetails.lastName} - CV`,
  });

  return (
    <div className="flex gap-20 p-5 relative justify-center">
      <div className="w-2/5 flex flex-col gap-10 print:hidden">
        <Accordion type="multiple" className="w-full">
          <UserDetails
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            setSelectedImage={setSelectedImage}
          />
          <Separator />
          <Projects projects={projects} setProjects={setProjects} />
          <Separator />
          <Socials socials={socials} setSocials={setSocials} />
          <Separator />
          <Skills skills={skills} setSkills={setSkills} />
          <Separator />
          <Education educations={educations} setEducations={setEducations} />
          <Separator />
          <ColorPicker />
          <Separator />
        </Accordion>
        <div className="flex gap-2">
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
                  "If you want to undo the changes to initial state simply click on the `Undo` button.",
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
            <ListRestartIcon className="ms-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              handlePrint();
            }}
          >
            Download CV
            <DownloadIcon className="ms-2 h-4 w-4" />
          </Button>
        </div>
        <TemplatePicker setSelectedTemplate={setSelectedTemplate} />
      </div>
      <section className="print:left-0 print:w-full" ref={templateRef}>
        <div
          className="border-black border-2 print:border-none h-[267mm]"
          id="container"
        >
          <TemplateRenderer
            selectedTemplate={selectedTemplate}
            userDetails={userDetails}
            projects={projects}
            skills={skills}
            socials={socials}
            educations={educations}
            selectedImage={selectedImage}
          />
        </div>
      </section>
    </div>
  );
}
