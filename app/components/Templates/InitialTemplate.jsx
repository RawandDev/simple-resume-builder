import { Link } from "@remix-run/react";
import { format } from "date-fns";

function InitialTemplate({ userDetails, projects, skills, socials }) {
  return (
    <div className="p-10 flex gap-10">
      <section className="flex flex-col gap-y-20 flex-1 flex-wrap">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold">
            {userDetails.firstName} {userDetails.lastName}
          </p>
          <p className="text-2xl text-blue-600 font-semibold">
            {userDetails.jobTitle}
          </p>
        </div>
        <div>
          <p className="uppercase opacity-75 text-lg font-semibold">Summmary</p>
          <p>{userDetails.bio}</p>
        </div>
        <div>
          <p className="uppercase opacity-75 text-lg font-semibold">Projects</p>
          <div className="flex flex-col gap-5">
            <div>
              {projects?.map((project, index) => (
                <div key={index} className="group relative">
                  <header className="flex flex-col">
                    <div
                      className={`opacity-40 ${
                        !project.stDate ? "hidden" : "block"
                      }`}
                    >
                      <span>
                        {project.stDate &&
                          format(project.stDate, "MMM do, yyyy")}
                      </span>{" "}
                      -{" "}
                      <span>
                        {project.enDate
                          ? format(project.enDate, "MMM do, yyyy")
                          : "Present"}
                      </span>
                    </div>
                    <p className="font-semibold">{project.projectTitle}</p>{" "}
                  </header>
                  <pre className="w-full overflow-hidden resize-none mb-4 max-w-sm font-[inherit] whitespace-break-spaces">
                    {project.projectDescription}
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
          <p className="uppercase opacity-75 text-lg font-semibold">Socials</p>
          {socials.map((social, index) => (
            <Link
              to={social.socialLink}
              target="_blank"
              rel="noreferrer noopener"
              key={index}
            >
              {social.socialName}
            </Link>
          ))}
        </div>
        <div>
          <p className="uppercase opacity-75 text-lg font-semibold">Skills</p>
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
        <div>
          <p className="uppercase opacity-75 text-lg font-semibold">
            Education
          </p>
        </div>
      </section>
    </div>
  );
}

export default InitialTemplate;
