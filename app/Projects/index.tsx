'use client'

import ProjectEntries, { ProjectElement, PROJECTS } from "./ProjectEntries";

const Projects = () => {
    return (
        <div id="projects" className="">
            <div className="">
                <h1 className="my-4 text-4xl light:text-gray-700 dark:text-base-content font-bold text-center">
                    🔥 Projects 🔥
                </h1>

                <div className="carousel w-full">
                    {PROJECTS.toReversed().toSorted((project: ProjectElement) => {
                        return project.completed ? 0 : -1
                    }).map((project: ProjectElement, index: number) => (
                        <div id={`item${index}`} key={crypto.randomUUID()} className="carousel-item w-full" >
                            <ProjectEntries
                                {...project}
                            /></div>
                    ))}
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    {PROJECTS.map((a, index) =>
                        <a key={crypto.randomUUID()} href={`#item${index}`} className="btn btn-xs">{index}</a>
                    )}
                </div>
            </div>
            <div className="flex justify-center">
                {/* <img
                    className="w-full md:w-[60%] lg:w-[45%] xl:w-[35%] 2xl:w-[25%]"
                    id="GithubStats"
                /> */}
            </div>
        </div >
    );
};

export default Projects;