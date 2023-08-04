import { Button } from "~/components/ui/button";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="bg-green-500">Welcome to Remix</h1>
      <Button>Abc</Button>
    </div>
  );
}
