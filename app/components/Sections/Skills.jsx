import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import { PlusCircle, TrashIcon } from "lucide-react";

function Skills({ skills, setSkills }) {
  const handleAddSkill = () => {
    setSkills((prevSkills) => [...prevSkills, ""]);
  };

  const handleChangeInput = (e, index) => {
    const { value } = e.target;

    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index] = value;
      return updatedSkills;
    });
  };

  const handleDeleteSkill = (index) => {
    setSkills((prevSkills) => {
      const updatedSkills = prevSkills.filter((_, i) => i !== index);
      return updatedSkills;
    });
  };

  console.log("skills", skills);
  return (
    <section className="flex flex-col gap-3">
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <h1 className="font-bold text-xl">Skills</h1>
        </AccordionTrigger>
        <AccordionContent className="p-1">
          {skills.map((skill, index) => {
            console.log("skiii", skill);
            return (
              <div key={index} className="grid w-full gap-1">
                <Input
                  type="text"
                  placeholder={skill}
                  id="skill"
                  name="skill"
                  onChange={(e) => handleChangeInput(e, index)}
                  value={skill}
                />
                <Button
                  variant="destructive"
                  className="w-6 h-6 opacity-100 ms-auto"
                  size="icon"
                  onClick={() => handleDeleteSkill(index)}
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            );
          })}
          <Button variant="outline" className="w-16" onClick={handleAddSkill}>
            <PlusCircle className="h-4 w-4" />
          </Button>
        </AccordionContent>
      </AccordionItem>
    </section>
  );
}

export default Skills;
