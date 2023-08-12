import { Link } from "@remix-run/react";
import { format } from "date-fns";
import { DUMMY_DATA, DUMMY_START_DATE } from "../../constants/general";
import PhotoPreview from "../Sections/Photo/PhotoPreview";

function InitialTemplate({
  userDetails,
  projects,
  skills,
  socials,
  educations,
  selectedImage,
  border,
}) {
  return (
    <div className="p-10 flex gap-10">
      <section className="flex flex-col gap-y-20 flex-1 flex-wrap">
        <div className="flex flex-col">
          <PhotoPreview selectedImage={selectedImage} border={border} />
          <div>
            <p className="text-2xl font-semibold">
              {userDetails.firstName} {userDetails.lastName}
            </p>
            <p className="text-2xl text-custom-primary font-semibold">
              {userDetails.jobTitle}
            </p>
          </div>
        </div>
        <div>
          <p className="uppercase opacity-75 text-lg font-semibold text-custom-primary">
            Summary
          </p>
          <p>{userDetails.bio}</p>
        </div>
        <div>
          <p className="uppercase opacity-75 text-lg font-semibold text-custom-primary">
            Projects
          </p>
          <div className="flex flex-col gap-5">
            <div>
              {projects?.map((project, index) => (
                <div key={index} className="group relative">
                  <header className="flex flex-col">
                    <div className="opacity-40">
                      <span>
                        {project.stDate
                          ? format(project.stDate, "MMM do, yyyy")
                          : format(DUMMY_START_DATE, "MMM do, yyyy")}
                      </span>{" "}
                      -{" "}
                      <span>
                        {project.enDate
                          ? format(project.enDate, "MMM do, yyyy")
                          : "Present"}
                      </span>
                    </div>
                    <p className="font-semibold">
                      {project.projectTitle || DUMMY_DATA.projectTitle}
                    </p>
                  </header>
                  <pre className="w-full overflow-hidden resize-none mb-4 max-w-sm font-[inherit] whitespace-break-spaces">
                    {project.projectDescription ||
                      DUMMY_DATA.projectDescription}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex-1 flex flex-col gap-10 ms-2 flex-wrap">
        <div className="flex flex-col mb-10">
          <Link to={`mailto:${userDetails.email}`}>{userDetails.email}</Link>
        </div>
        <div className="flex flex-col">
          <p className="uppercase opacity-75 text-lg font-semibold text-custom-primary">
            Socials
          </p>
          {socials.map((social, index) => (
            <Link
              to={social.socialLink || DUMMY_DATA.socialLink}
              target="_blank"
              rel="noreferrer noopener"
              key={index}
            >
              {social.socialName || DUMMY_DATA.socialName}
            </Link>
          ))}
        </div>
        <div>
          <p className="uppercase opacity-75 text-lg font-semibold text-custom-primary">
            Skills
          </p>
          {skills.map((skill, index) => (
            <p key={index}>{skill || DUMMY_DATA.skill[index]}</p>
          ))}
        </div>
        <div>
          <p className="uppercase opacity-75 text-lg font-semibold text-custom-primary">
            Education
          </p>
          <div className="flex flex-col gap-5">
            {educations?.map((education, index) => (
              <div key={index} className="group relative">
                <header className="flex flex-col">
                  <p className="font-semibold">
                    {education.educationTitle || DUMMY_DATA.educationTitle}
                  </p>{" "}
                  <div className="opacity-40">
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
                </header>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default InitialTemplate;
