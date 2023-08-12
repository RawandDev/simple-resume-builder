import { Button } from "~/components/ui/button";
import { COLOR_VARIANTS } from "../../constants/general";
import { CheckIcon } from "lucide-react";

function ColorPicker({ selectedColor, setSelectedColor }) {
  return (
    <section>
      <h1 className="font-semibold text-xl mb-2">Template Color</h1>
      <div className="flex gap-2 flex-wrap">
        {COLOR_VARIANTS.map((color) => {
          return (
            <Button
              key={color.hexCode}
              type="button"
              onClick={() => {
                setSelectedColor(color.hexCode);
              }}
              className={`rounded-full w-8 h-8 ${color.twColor} hover:${color.twColor} hover:bg-opacity-70`}
              size="icon"
            >
              {selectedColor === color.hexCode && <CheckIcon />}
            </Button>
          );
        })}
      </div>
    </section>
  );
}

export default ColorPicker;
