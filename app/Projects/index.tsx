'use client'

import ProjectEntries, { ProjectElement, PROJECTS } from "./ProjectEntries";

const Projects = () => {
    // const recentProjects = PROJECTS.filter((e) => e.status != "").reverse();
    return (
        <div id="projects" className="">
            <div className="">
                <h1 className="my-4 text-2xl light:text-gray-700 dark:text-base-content font-bold text-center">
                    Projects
                </h1>
                <div className="flex-col justify-center mx-3">
                    {PROJECTS.toReversed().toSorted((project: ProjectElement) => {
                        return project.completed ? 0 : -1
                    }).map((project: ProjectElement) => (
                        <ProjectEntries
                            key={crypto.randomUUID()}
                            {...project}
                        />
                    ))}
                </div>
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