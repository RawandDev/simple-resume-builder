import { Link } from "@remix-run/react";
import { format } from "date-fns";
import { DUMMY_START_DATE } from "../../constants/general";

function ModernTemplate({
  userDetails,
  projects,
  skills,
  socials,
  educations,
}) {
  return (
    <>
      <header className="flex bg-custom-primary bg-opacity-80 p-10 gap-20">
        <div className="w-4/6 text-custom-a11y">
          <p className="text-3xl font-bold">
            {userDetails.firstName} {userDetails.lastName}
          </p>
          <p className="text-xl font-bold mb-4">{userDetails.jobTitle}</p>
          <p>{userDetails.bio}</p>
        </div>
        <div className="text-custom-a11y">
          <p>{userDetails.email}</p>
          {socials.map((social, index) => (
            <Link
              to={social.socialLink}
              target="_blank"
              rel="noreferrer noopener"
              key={index}
              className="block"
            >
              {social.socialName}
            </Link>
          ))}
        </div>
      </header>
      <div className="p-10 flex gap-10">
        <section className="flex-1">
          <p className="text-xl font-bold text-custom-primary mb-4">
            Work Experience
          </p>
          {projects?.map((project, index) => (
            <div key={index} className="group relative">
              <header className="flex flex-col mb-2">
                <p className="font-semibold">{project.projectTitle}</p>{" "}
                <div
                  className={`opacity-40 ${
                    !project.stDate ? "hidden" : "block"
                  }`}
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
              </header>
              <pre className="w-full overflow-hidden resize-none mb-4 max-w-sm font-[inherit] whitespace-break-spaces">
                {project.projectDescription}
              </pre>
            </div>
          ))}
        </section>
        <section className="flex gap-10">
          <div className="flex-1">
            <p className="text-xl font-bold text-custom-primary mb-4">
              Education
            </p>
            {educations?.map((education, index) => (
              <div key={index} className="group relative">
                <header className="flex flex-col mb-2">
                  <p className="font-semibold">{education.educationTitle}</p>{" "}
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
            <div className="mt-10">
              <p className="text-xl font-bold text-custom-primary mb-4">
                Skills
              </p>
              {skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ModernTemplate;
