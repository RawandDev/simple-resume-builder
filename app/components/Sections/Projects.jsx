import { Fragment } from "react";
import DatePicker from "../../components/DatePicker/DatePicker";
import { PlusCircle, TrashIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import CustomInput from "../CustomInput/CustomInput";

function Projects({ projects, setProjects }) {
  const addProject = () => {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        projectTitle: "New Project/Work",
        stDate: "",
        enDate: "",
        projectDescription: "Some description...",
      },
    ]);
  };

  const handleChangeInput = (e, index) => {
    const { name, value } = e.target;

    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[index] = {
        ...updatedProjects[index],
        [name]: value,
      };
      return updatedProjects;
    });
  };

  const handleDeleteProject = (index) => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.filter((_, i) => i !== index);
      return updatedProjects;
    });
  };

  return (
    <section className="flex flex-col gap-3">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h1 className="font-bold text-xl">Projects</h1>
        </AccordionTrigger>
        <AccordionContent className="p-1">
          {projects.map((project, index) => {
            return (
              <Fragment key={index}>
                <CustomInput
                  type="text"
                  onChangeHandler={(e) => handleChangeInput(e, index)}
                  label={{
                    htmlFor: index,
                    text: "Project Title",
                  }}
                  id={index}
                  name="projectTitle"
                  placeholder={project.projectTitle}
                />
                <div className="flex gap-5 items-center">
                  <DatePicker
                    date={project.stDate}
                    label="Start Date"
                    setProjects={setProjects}
                    index={index}
                  />
                  -
                  <DatePicker
                    date={project.enDate}
                    setProjects={setProjects}
                    label="End Date"
                    index={index}
                  />
                </div>
                <CustomInput
                  type="textarea"
                  onChangeHandler={(e) => handleChangeInput(e, index)}
                  label={{
                    htmlFor: `description-${index}`,
                    text: "Brief Explanation",
                  }}
                  id={`description-${index}`}
                  name="projectDescription"
                  placeholder={project.projectDescription}
                />
                <Button
                  variant="destructive"
                  className="w-6 h-6 ms-auto"
                  size="icon"
                  onClick={() => handleDeleteProject(index)}
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </Fragment>
            );
          })}
          <Button variant="outline" className="w-16" onClick={addProject}>
            <PlusCircle className="h-4 w-4" />
          </Button>{" "}
        </AccordionContent>
      </AccordionItem>
    </section>
  );
}

export default Projects;
