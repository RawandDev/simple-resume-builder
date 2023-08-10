import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { COLOR_VARIANTS } from "../../constants/general";
import { CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getAccessibleColor, getRGBColor } from "../../lib/helpers";

function ColorPicker() {
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

  return (
    <section>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          <h1 className="font-bold text-xl">Colors</h1>
        </AccordionTrigger>
        <AccordionContent className="p-1">
          <div className="flex gap-2 flex-wrap">
            {COLOR_VARIANTS.map((color) => {
              return (
                <Button
                  key={color.hexCode}
                  type="button"
                  onClick={() => {
                    setSelectedColor(color.hexCode);
                  }}
                  className={`rounded-full w-10 h-10 ${color.twColor} hover:${color.twColor} hover:bg-opacity-70`}
                  size="icon"
                >
                  {selectedColor === color.hexCode && <CheckIcon />}
                </Button>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </section>
  );
}

export default ColorPicker;
