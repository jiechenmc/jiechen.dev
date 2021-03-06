import ProjectEntries from "./subcomponents/ProjectEntries";
import PROJECTS from "../data/PROJECTS";
import { v4 as uuidv4 } from "uuid";

export interface ProjectElement {
  title: string;
  date: string;
  description: string;
  repo: string;
  status: string;
  stack: string;
  demo: string;
}

const Projects = () => {
  return (
    <div id="projects" className="">
      <h1 className="my-4 text-2xl light:text-gray-700 dark:text-base-content font-bold text-center">
        Projects
      </h1>

      <div className="sm:flex-col lg:grid lg:grid-cols-3 hd:grid-cols-4 mba:grid-cols-5 justify-between ">
        {[...PROJECTS]?.reverse().map((project: ProjectElement) => (
          <ProjectEntries
            key={uuidv4()}
            title={project?.title}
            date={project?.date}
            description={project?.description}
            repo={project?.repo}
            status={project?.status}
            stack={project?.stack}
            demo={project?.demo}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <img
          className="w-full md:w-[60%] lg:w-[45%] xl:w-[35%] 2xl:w-[25%]"
          id="GithubStats"
        />
      </div>
    </div>
  );
};

export default Projects;
