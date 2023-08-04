import { Fragment, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import { Textarea } from "~/components/ui/textarea";
import DatePicker from "../components/DatePicker/DatePicker";
import { PlusCircle } from "lucide-react";
import { addMonths, format } from "date-fns";
import Projects from "../components/Sections/Projects";
import Socials from "../components/Sections/Socials";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [projects, setProjects] = useState([
    {
      projectTitle: "Hello World",
      projectDescription:
        "A side project to help people create their CV with ease. \n - Agile methodology \n- Used Remix + Shadcn ui",
      stDate: format(new Date(), "PPP"),
      enDate: format(addMonths(new Date(), "3"), "PPP"),
    },
  ]);
  const [socials, setSocials] = useState([
    {
      socialName: "GitHub",
      socialLink: "https://github.com/RawandDev",
    },
  ]);

  const [userInfo, setUserInfo] = useState();

  function handleChangeInput(e) {
    console.log(e.target.value);
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  console.log(userInfo, startDate, endDate, "pr");

  return (
    <div className="flex gap-20 p-5 relative">
      <div className="w-2/5 flex flex-col gap-10">
        <section className="flex gap-4 flex-col">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 w-full">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
          </div>
          <div>
            <div className="grid w-full gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
          </div>
          <div>
            <div className="grid w-full gap-1">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                type="text"
                placeholder="Job Title"
                id="jobTitle"
                name="jobTitle"
              />
            </div>
          </div>
        </section>
        <Separator />
        <section>
          <h1 className="font-bold text-xl mb-2">Description</h1>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="bio">Write your bio</Label>
            <Textarea
              placeholder="Hmm, thinking deep? Write about yourself mate!"
              id="bio"
              name="bio"
            />
          </div>
        </section>
        <Separator />
        <Projects
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          projects={projects}
          setProjects={setProjects}
        />
        <Separator />
        <Socials socials={socials} setSocials={setSocials} />
        <Separator />
        <section className="flex flex-col gap-3">
          <h1 className="font-bold text-xl">Skills</h1>
          <div className="grid w-full gap-1">
            <Input type="text" placeholder="Remix" id="skill" name="skill" />
          </div>
        </section>
      </div>
      <section className="fixed left-2/3">Preview Print</section>
    </div>
  );
}
