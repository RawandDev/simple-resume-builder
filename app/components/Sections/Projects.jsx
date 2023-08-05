import { Fragment } from "react";
import DatePicker from "../../components/DatePicker/DatePicker";
import { PlusCircle, TrashIcon } from "lucide-react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

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
                <div className="grid w-full gap-1 transition-all ease-in duration-1000">
                  <Label
                    className="flex justify-between items-end"
                    htmlFor={index}
                  >
                    Project Title{" "}
                  </Label>
                  <Input
                    type="text"
                    placeholder="title eeee"
                    id={index}
                    name="projectTitle"
                    onChange={(e) => handleChangeInput(e, index)}
                    value={project.projectTitle}
                  />
                </div>
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
                <div className="grid w-full gap-1.5">
                  <Label htmlFor={`bio-${index}`}>Brief Explanation</Label>
                  <Textarea
                    placeholder={project.projectDescription}
                    id={`bio-${index}`}
                    name="projectDescription"
                    onChange={(e) => handleChangeInput(e, index)}
                    className="h-28"
                  />
                </div>
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
