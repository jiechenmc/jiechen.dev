'use client'
import { Icon } from "@iconify/react";
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
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center w-full py-2 gap-2">
                    {PROJECTS.map((_, index) =>
                        <a key={crypto.randomUUID()} href={`#item${index}`} className={`btn btn-xs ${index < PROJECTS.length / 2 ? "text-green-500" : "text-green-700"}`}>{index}</a>
                    )}
                </div>
                <div role="alert" className="alert w-fit mx-auto prose text-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>You can swipe if you have touch screen.</span>
                </div>
            </div>
            {/* <div className="flex justify-center">
                <img
                    className="w-full md:w-[60%] lg:w-[45%] xl:w-[35%] 2xl:w-[25%]"
                    id="GithubStats"
                />
            </div> */}
        </div >
    );
};

export default Projects;