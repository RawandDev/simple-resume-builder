import { LayoutTemplateIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { INITIAL_TEMPLATE, MODERN_TEMPLATE } from "../../constants/general";

function TemplatePicker({ setSelectedTemplate }) {
  return (
    <div>
      <p className="flex items-center gap-2 mb-2 text-xl font-semibold">
        Available Templates
        <LayoutTemplateIcon className="mr-2 h-4 w-4" />
      </p>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => {
            setSelectedTemplate(INITIAL_TEMPLATE);
          }}
        >
          Classic
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setSelectedTemplate(MODERN_TEMPLATE);
          }}
        >
          Modern
        </Button>
      </div>
    </div>
  );
}

export default TemplatePicker;
