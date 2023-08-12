import { useEffect, useState } from "react";
import { getAccessibleColor, getRGBColor } from "../../lib/helpers";
import { COLOR_VARIANTS } from "../../constants/general";

import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { SettingsIcon } from "lucide-react";
import ColorPicker from "./ColorPicker";
import TemplatePicker from "../TemplatePicker/TemplatePicker";
import Border from "./Photo/Border";

function Customization({
  selectedTemplate,
  setSelectedTemplate,
  border,
  setBorder,
}) {
  const [selectedColor, setSelectedColor] = useState(COLOR_VARIANTS[0].hexCode);

  const primaryColor = getRGBColor(selectedColor, "primary");
  const a11yColor = getRGBColor(getAccessibleColor(selectedColor), "a11y");

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = `:root {
      ${primaryColor} ${a11yColor}
    }`;

    document.head.appendChild(styleTag);

    return () => document.head.removeChild(styleTag);
  }, [a11yColor, primaryColor]);

  const handleChangeBorder = (value) => {
    setBorder(...value);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-1/2">
          Customization
          <SettingsIcon className="ms-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-3/4">
        <div className="grid gap-8">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-xl">Customization</h4>
            <p className="text-sm text-muted-foreground">
              Customize your template the way you prefer!
            </p>
          </div>
          <div className="grid gap-5">
            <ColorPicker
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <TemplatePicker
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
            />
            <Border border={border} onChangeHandler={handleChangeBorder} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Customization;
