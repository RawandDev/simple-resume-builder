import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "../../utils";
import { Button } from "~/components/ui/button";
import { useRef } from "react";

function DatePicker({ date, label, setProjects, index }) {
  const inputRef = useRef(null);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <input
            ref={inputRef}
            type="hidden"
            name={label === "Start Date" ? "stDate" : "enDate"}
            id={label === "Start Date" ? "stDate" : "enDate"}
            value={date || ""}
          />
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "MMM do, yyyy") : <span>{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e) => {
            setProjects((prevProjects) => {
              const updatedProjects = [...prevProjects];
              updatedProjects[index] = {
                ...updatedProjects[index],
                [inputRef.current?.name]: e,
              };
              return updatedProjects;
            });
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default DatePicker;
