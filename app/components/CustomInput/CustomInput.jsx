import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

function CustomInput({
  type,
  placeholder,
  onChangeHandler,
  label: { text, htmlFor } = {},
  name,
  id,
}) {
  return (
    <div className="w-full">
      {text && <Label htmlFor={htmlFor}>{text}</Label>}
      {type === "textarea" ? (
        <Textarea
          placeholder={placeholder}
          name={name}
          id={id}
          onChange={onChangeHandler}
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          onChange={onChangeHandler}
        />
      )}
    </div>
  );
}

export default CustomInput;
