import { Button } from "~/components/ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import { PlusCircle, TrashIcon } from "lucide-react";
import CustomInput from "../CustomInput/CustomInput";
import { DUMMY_DATA } from "../../constants/general";

function Socials({ socials, setSocials }) {
  const handleAddSocial = () => {
    setSocials((prevSocials) => [
      ...prevSocials,
      {
        socialName: "",
        socialLink: "",
      },
    ]);
  };

  const handleChangeInput = (e, index) => {
    const { name, value } = e.target;

    setSocials((prevSocials) => {
      const updatedSocials = [...prevSocials];
      updatedSocials[index] = {
        ...updatedSocials[index],
        [name]: value,
      };
      return updatedSocials;
    });
  };

  const handleDeleteProject = (index) => {
    setSocials((prevSocials) => {
      const updatedSocials = prevSocials.filter((_, i) => i !== index);
      return updatedSocials;
    });
  };

  return (
    <section className="flex flex-col gap-3">
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <h1 className="font-bold text-xl">Social Links</h1>
        </AccordionTrigger>
        <AccordionContent className="p-1">
          {socials.map((social, index) => {
            return (
              <div key={index} className="flex gap-5">
                <div className="w-1/3">
                  <CustomInput
                    type="text"
                    onChangeHandler={(e) => handleChangeInput(e, index)}
                    id={index}
                    name="socialName"
                    placeholder={DUMMY_DATA.socialName}
                    value={social.socialName}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <CustomInput
                    type="text"
                    onChangeHandler={(e) => handleChangeInput(e, index)}
                    id={index}
                    name="socialLink"
                    placeholder={DUMMY_DATA.socialLink}
                    value={social.socialLink}
                  />
                  <Button
                    variant="destructive"
                    className="w-6 h-6 opacity-100 ms-auto"
                    size="icon"
                    onClick={() => handleDeleteProject(index)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
          <Button variant="outline" className="w-16" onClick={handleAddSocial}>
            <PlusCircle className="h-4 w-4" />
          </Button>
        </AccordionContent>
      </AccordionItem>
    </section>
  );
}

export default Socials;
