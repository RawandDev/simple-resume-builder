import { Link } from "@remix-run/react";
import { format } from "date-fns";

function ModernTemplate({ userDetails, projects, skills, socials }) {
  return (
    <>
      <header className="flex bg-emerald-200 p-10 gap-20">
        <div className="w-4/6">
          <p className="text-3xl font-bold">
            {userDetails.firstName} {userDetails.lastName}
          </p>
          <p className="text-xl font-bold text-emerald-500 mb-4">
            {userDetails.jobTitle}
          </p>
          <p>{userDetails.bio}</p>
        </div>
        <div>
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
      <section className="p-10 flex gap-10">
        <div className="flex-1">
          <p className="text-xl font-bold text-emerald-500 mb-4">
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
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold text-emerald-500 mb-4">Skills</p>
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </section>
    </>
  );
}

export default ModernTemplate;
