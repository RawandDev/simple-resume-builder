import { Link } from "@remix-run/react";
import { format } from "date-fns";

function InitialTemplate({ userDetails, projects, skills }) {
  return (
    <>
      <section className="flex flex-col gap-y-20 flex-1">
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
                        {project.stDate && format(project.stDate, "PPP")}
                      </span>{" "}
                      -{" "}
                      <span>
                        {project.enDate
                          ? format(project.enDate, "PPP")
                          : "Present"}
                      </span>
                    </div>
                    <p className="font-semibold">{project.projectTitle}</p>{" "}
                  </header>
                  <pre className="w-full overflow-hidden resize-none mb-4 max-w-sm font-[inherit]">
                    {project.projectDescription}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex-1 flex flex-col gap-10">
        <div className="flex flex-col mb-10">
          <Link to={`mailto:${userDetails.email}`}>{userDetails.email}</Link>
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
    </>
  );
}

export default InitialTemplate;
