import { HelpCircleIcon } from "lucide-react";
import { Slider } from "~/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

function Border({ border, onChangeHandler }) {
  return (
    <div>
      <p className="flex items-center gap-2 mb-2 text-xl font-semibold">
        Border
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircleIcon className="w-4 h-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Customizes border once you have uploaded a photo.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </p>
      <Slider
        defaultValue={[border]}
        max={10}
        step={1}
        onValueChange={onChangeHandler}
        className="w-4/5"
      />
    </div>
  );
}

export default Border;
