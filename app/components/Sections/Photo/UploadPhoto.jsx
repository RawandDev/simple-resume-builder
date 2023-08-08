import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { useRef } from "react";
import { TrashIcon } from "lucide-react";

const UploadPhoto = ({ setSelectedImage }) => {
  const fileRef = useRef();

  return (
    <div className="grid w-full gap-1 relative">
      <Label htmlFor="photo">Upload your photo</Label>
      <Input
        ref={fileRef}
        type="file"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
        accept="image/*"
        className="file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-200 file:rounded-md cursor-pointer file:cursor-pointer"
      />
      {fileRef.current?.value && (
        <Button
          variant="destructive"
          className="w-6 h-6 absolute right-2 top-1/2"
          size="icon"
          onClick={() => {
            setSelectedImage(null);
            fileRef.current.value = "";
          }}
        >
          <TrashIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default UploadPhoto;
