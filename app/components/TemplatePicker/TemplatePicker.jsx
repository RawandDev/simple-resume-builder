import { CheckIcon, LayoutTemplateIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { MAP_TEMPLATE_KEYS_TO_JSX } from "../TemplateRender/TemplateRender";

function TemplatePicker({ selectedTemplate, setSelectedTemplate }) {
  return (
    <div>
      <p className="flex items-center gap-2 mb-2 text-xl font-semibold">
        Available Templates
        <LayoutTemplateIcon className="mr-2 h-4 w-4" />
      </p>
      <div className="grid grid-cols-3 gap-3">
        {Object.keys(MAP_TEMPLATE_KEYS_TO_JSX).map((templateKey) => {
          return (
            <Button
              variant="outline"
              onClick={() => {
                setSelectedTemplate(templateKey);
              }}
              key={templateKey}
            >
              {MAP_TEMPLATE_KEYS_TO_JSX[templateKey].name}
              {selectedTemplate === templateKey && (
                <CheckIcon className="ms-2 w-4 h-4" />
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default TemplatePicker;
