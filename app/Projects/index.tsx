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
                    {typeof window !== "undefined" && 'ontouchstart' in window ? <Icon icon="mdi:gesture-swipe-horizontal" color="#00b3f0" className="absolute right-[5%] lg:right-[10%] lgp:right-[20%] translate-y-4 md:w-12 md:h-12 animate-pulse" width="24" height="24" />
                        : <></>}
                </div>


                <div className="flex justify-center w-full py-2 gap-2">
                    {PROJECTS.map((_, index) =>
                        <a key={crypto.randomUUID()} href={`#item${index}`} className={`btn btn-xs ${index < PROJECTS.length / 2 ? "text-green-500" : "text-green-700"}`}>{index}</a>
                    )}
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