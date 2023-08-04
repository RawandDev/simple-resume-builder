import { Fragment } from "react";
import DatePicker from "../../components/DatePicker/DatePicker";
import { PlusCircle, TrashIcon } from "lucide-react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

function Projects({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  projects,
  setProjects,
}) {
  const addProject = () => {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        projectTitle: "",
        stDate: "",
        enDate: "",
        projectDescription: "",
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

  console.log("pr", projects);
  return (
    <section className="flex flex-col gap-3">
      <h1 className="font-bold text-xl">Projects</h1>
      {projects.map((project, index) => {
        return (
          <Fragment key={index}>
            <div className="grid w-full gap-1 transition-all ease-in duration-1000">
              <Label className="flex justify-between items-end" htmlFor={index}>
                Project Title{" "}
                <Button
                  variant="destructive"
                  className="w-6 h-6 opacity-100"
                  size="icon"
                  onClick={() => handleDeleteProject(index)}
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
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
                date={startDate}
                setDate={setStartDate}
                label="Start Date"
              />
              -
              <DatePicker
                date={endDate}
                setDate={setEndDate}
                label="End Date"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="bio">Brief Explanation</Label>
              <Textarea
                placeholder={project.projectDescription}
                id="projectDescription"
                name="projectDescription"
                onChange={(e) => handleChangeInput(e, index)}
              />
            </div>
          </Fragment>
        );
      })}
      <Button variant="outline" className="w-16" onClick={addProject}>
        <PlusCircle className="h-4 w-4" />
      </Button>{" "}
    </section>
  );
}

export default Projects;