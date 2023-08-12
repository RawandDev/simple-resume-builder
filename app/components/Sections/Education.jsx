import { Button } from "~/components/ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Fragment } from "react";
import DatePicker from "../DatePicker/DatePicker";
import { PlusCircle, TrashIcon } from "lucide-react";
import CustomInput from "../CustomInput/CustomInput";
import { DUMMY_DATA } from "../../constants/general";

function Education({ educations, setEducations }) {
  const addEducation = () => {
    setEducations((prevEducations) => [
      ...prevEducations,
      {
        educationTitle: "",
        stDate: "",
        enDate: "",
      },
    ]);
  };

  const handleChangeInput = (e, index) => {
    const { name, value } = e.target;

    setEducations((prevEducations) => {
      const updatedEducations = [...prevEducations];
      updatedEducations[index] = {
        ...updatedEducations[index],
        [name]: value,
      };
      return updatedEducations;
    });
  };

  const handleDeleteEducation = (index) => {
    setEducations((prevEducations) => {
      const updatedEducations = prevEducations.filter((_, i) => i !== index);
      return updatedEducations;
    });
  };
  return (
    <section className="flex flex-col gap-3">
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <h1 className="font-bold text-xl">Education</h1>
        </AccordionTrigger>
        <AccordionContent className="p-1">
          {educations.map((education, index) => {
            return (
              <Fragment key={index}>
                <CustomInput
                  type="email"
                  onChangeHandler={(e) => handleChangeInput(e, index)}
                  label={{
                    htmlFor: `education-${index}`,
                    text: "Degree",
                  }}
                  id={`education-${index}`}
                  name="educationTitle"
                  placeholder={DUMMY_DATA.educationTitle}
                  value={education.educationTitle}
                />
                <div className="flex gap-5 items-center">
                  <DatePicker
                    date={education.stDate}
                    label="Start Date"
                    setProjects={setEducations}
                    index={index}
                  />
                  -
                  <DatePicker
                    date={education.enDate}
                    setProjects={setEducations}
                    label="End Date"
                    index={index}
                  />
                </div>
                <Button
                  variant="destructive"
                  className="w-6 h-6 ms-auto"
                  size="icon"
                  onClick={() => handleDeleteEducation(index)}
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </Fragment>
            );
          })}
          <Button variant="outline" className="w-16" onClick={addEducation}>
            <PlusCircle className="h-4 w-4" />
          </Button>{" "}
        </AccordionContent>
      </AccordionItem>
    </section>
  );
}

export default Education;
