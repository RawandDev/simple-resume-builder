import { format } from "date-fns";
import { DUMMY_DATA, DUMMY_START_DATE } from "../../constants/general";
import { Link } from "@remix-run/react";
import PhotoPreview from "../Sections/Photo/PhotoPreview";
import { Separator } from "~/components/ui/separator";

function CalmTemplate({
  userDetails,
  projects,
  skills,
  socials,
  educations,
  selectedImage,
  border
}) {
  return (
    <div className="p-5">
      <header className="grid grid-cols-1 items-center self-center content-center">
        <div className="flex my-0 mx-auto gap-4 flex-col">
          <div className="flex items-end gap-2">
            <PhotoPreview selectedImage={selectedImage} border={border} />
            <div className="flex flex-col">
              <p className="text-3xl font-bold text-custom-primary">
                {userDetails.firstName} {userDetails.lastName}
              </p>
              <p className="text-xl font-bold mb-4 text-custom-primary">
                {userDetails.jobTitle}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 opacity-50">
            <p>{userDetails.email}</p>
            <div className="flex gap-3 flex-wrap max-w-md">
              {socials.map((social, index) => (
                <Link
                  to={social.socialLink || DUMMY_DATA.socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={index}
                  className="block"
                >
                  {social.socialName || DUMMY_DATA.socialName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      <Separator className="h-[1px]" />
      <section className="flex my-6">
        <p className="text-lg font-bold text-custom-primary w-2/5">Profile</p>
        <p className="opacity-80 w-full">{userDetails.bio}</p>
      </section>
      <Separator className="h-[1px]" />
      <section className="flex flex-col gap-3 my-6">
        <p className="text-lg font-bold text-custom-primary w-full">
          Education
        </p>
        {educations?.map((education, index) => (
          <div key={index} className="flex">
            <div className="opacity-40 w-2/5">
              <span>
                {education.stDate
                  ? format(education.stDate, "MMM do, yyyy")
                  : format(DUMMY_START_DATE, "MMM do, yyyy")}
              </span>{" "}
              -{" "}
              <span>
                {education.enDate
                  ? format(education.enDate, "MMM do, yyyy")
                  : "Present"}
              </span>
            </div>
            <p className="font-semibold w-full opacity-80">
              {education.educationTitle || DUMMY_DATA.educationTitle}
            </p>
          </div>
        ))}
      </section>
      <Separator className="h-[1px]" />
      <section className="flex flex-col gap-3 my-6">
        <p className="text-lg font-bold text-custom-primary w-full">
          Work Experience
        </p>
        {projects?.map((project, index) => (
          <div key={index} className="flex">
            <div className="opacity-40 w-2/5">
              <div
                className={`opacity-40 ${!project.stDate ? "hidden" : "block"}`}
              >
                <span>
                  {project.stDate && format(project.stDate, "MMM do, yyyy")}
                </span>{" "}
                -{" "}
                <span>
                  {project.enDate
                    ? format(project.enDate, "MMM do, yyyy")
                    : "Present"}
                </span>
              </div>
            </div>
            <div className="w-full">
              <p className="font-semibold">
                {project.projectTitle || DUMMY_DATA.projectTitle}
              </p>{" "}
              <pre className="w-full overflow-hidden resize-none mb-4 max-w-sm font-[inherit] whitespace-break-spaces">
                {project.projectDescription || DUMMY_DATA.projectDescription}
              </pre>
            </div>
          </div>
        ))}
      </section>
      <Separator className="h-[1px]" />
      <section className="flex gap-3 my-6">
        <p className="text-lg font-bold text-custom-primary w-2/5">Skills</p>
        <div className="opacity-80 w-full grid grid-cols-4">
          {skills.map((skill, index) => (
            <p key={index}>{skill || DUMMY_DATA.skill[index]}</p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CalmTemplate;
