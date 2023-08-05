import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

function UserDetails({ userDetails, setUserDetails }) {
  function handleChangeInput(e) {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
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
            value={userDetails.firstName}
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
            value={userDetails.lastName}
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
            value={userDetails.email}
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
            onChange={(e) => handleChangeInput(e)}
            value={userDetails.jobTitle}
          />
        </div>
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="bio">Write your bio</Label>
        <Textarea
          placeholder="Hmm, thinking deep? Write about yourself mate!"
          id="bio"
          name="bio"
          onChange={(e) => handleChangeInput(e)}
          value={userDetails.bio}
        />
      </div>
    </section>
  );
}

export default UserDetails;
