'use client'
import { Icon } from '@iconify/react';
import getIconElement from '../hooks/getIconElement';
import Link from 'next/link';
import Image from 'next/image';

export interface ProjectElement {
    title: string;
    date: string;
    description: string;
    repo: string;
    completed: boolean;
    stack: string;
    demo: string;
    thumbnail?: string
}

export const PROJECTS = [
    {
        title: "Bazaar Prices",
        date: "Summer 2020",
        description:
            "A simple web application get to latest Bazaar prices for Hypixel Skyblock.",
        repo: "https://github.com/jiechenmc/bazaarPrices",
        demo: "https://jiechenmc.github.io/bazaarPrices/",
        completed: true,
        stack: "Python,JavaScript",
        thumbnail: "/thumbnails/none.svg"
    },
    {
        title: "Where It Snows",
        date: "Winter 2020",
        description:
            "One of my very first ever Hackathons before college. Won 4th place at NC Hacks.",
        repo: "https://github.com/jiechenmc/NC-Hack",
        demo: "#",
        completed: true,
        stack: "Python,Flask,Google Cloud",
        thumbnail: "/thumbnails/none.svg"
    },
    {
        title: "Gradus",
        date: "November 2022",
        description:
            "RESTful API written in FastAPI with grade distribution data from Stony Brook Class Evaluations.",
        repo: "https://github.com/jiechenmc/Gradus",
        demo: "#",
        completed: true,
        stack: "Python,MongoDB,Playwright,FastAPI,Docker,Heroku",
        thumbnail: "/thumbnails/gradus.jpg"
    }, {
        title: "ARWU Scraper",
        date: "September 2022",
        description:
            "Web scraper for Shanghi Ranking's academic ranking data. Incepted to avoid the pain of manual data collections and increased data set by 6x.",
        repo: "https://github.com/jiechenmc/shr-scraper-ultimate",
        demo: "#",
        completed: true,
        stack: "Python,Nodejs,Playwright",
        thumbnail: "/thumbnails/none.svg"
    }, {
        title: "Intrack",
        date: "September 2022",
        description:
            "Minimalistic Internship Tracker written in Solidjs with FastAPI backend connector to SQLite",
        repo: "https://github.com/jiechenmc/intrack",
        demo: "#",
        completed: true,
        stack: "Solidjs,FastAPI,Sqlite,Docker",
        thumbnail: "/thumbnails/none.svg"
    },
    {
        title: "Distr",
        date: "December 2022",
        description:
            "Distr is a way for students to view past grade data distribution with interactive charts created by Chart.js",
        repo: "https://github.com/jiechenmc/Distr",
        demo: "#",
        completed: true,
        stack: "TypeScript,NextJS,TailwindCSS",
        thumbnail: "/thumbnails/distr.jpg"
    },
    {
        title: "Cls",
        date: "January 2023",
        description:
            "A Go script to retrieve real-time data from SBU Class Find to quickly check the availability of seats in a class",
        repo: "https://github.com/jiechenmc/Cls",
        demo: "#",
        completed: true,
        stack: "Go,Playwright",
        thumbnail: "/thumbnails/cls.jpg"
    },
    {
        title: "Loqi",
        date: "Present",
        description:
            "Generative AI study application with Microservices architecture and deployed through Cloudflare Tunnels.",
        repo: "https://github.com/viLoqi",
        demo: "https://loqi.jiechen.dev",
        completed: false,
        stack: "Amazon Web Services,Google Cloud,go,traefik,cloudflare,Github Actions,docker,kubernetes,MongoDB",
        thumbnail: "/thumbnails/loqi.png"
    },
    {
        title: "Kamrui",
        date: "December 2023",
        description:
            "Cloud automation and monitor project using tools like Go, Kubernetes, Terraform, Grafana, Prometheus.",
        repo: "https://github.com/jiechenmc/Kamrui",
        demo: "#",
        completed: true,
        stack: "Go, Kubernetes, Terraform, Grafana, Prometheus, MongoDB",
        thumbnail: "/thumbnails/kamrui.png"
    }, {
        title: "SSH Cloud Agent",
        date: "May 2024",
        description:
            "Go script to concurrently connect, transfer, and execute commands on remote machines.",
        repo: "https://github.com/jiechenmc/SSH_Cloud_Agent",
        demo: "#",
        completed: true,
        stack: "Go, Bash",
        thumbnail: "/thumbnails/none.svg"
    },
    {
        title: "jiechen.dev v2",
        date: "May 2024",
        description:
            "Portfolio Website that has gone through many iterations to what it is today!",
        repo: "https://github.com/jiechenmc/jiechen.dev",
        demo: "https://jiechen.dev/",
        completed: true,
        stack: "TypeScript,Nextjs,TailwindCSS",
        thumbnail: "/thumbnails/jiechen.dev.jpg"
    }
];


const ProjectEntries = ({
    title,
    date,
    description,
    repo,
    completed,
    stack,
    demo,
    thumbnail
}: ProjectElement) => {

    const icons = stack.split(",").map((e: string) => getIconElement(e.trim()));

    return (
        <div className="flex justify-center mb-2 mx-auto">
            <div
                className={`flex justify-center w-full lg:max-w-4xl mb-2 border-2 rounded-lg shadow-lg indicator border-success `}
            >
                <div className="card sm:card-side">
                    <figure className='flex-shrink-0 flex-grow-0 md:w-80 md:h-80'><Image src={thumbnail!} width="320" height="320" className=" p-4" alt="Project Thumbnail" /></figure>
                    <div className="card-body w-full">
                        <h2 className="card-title text-center ">
                            <p>{title}</p>
                        </h2>
                        <div className="flex justify-center">
                            <div className={`badge badge-md mr-1 capitalize mt-auto mb-auto bg-transparent w-max text-md ${completed ? "text-success" : "text-info"}`}>
                                <p>{date}</p>
                            </div>
                            <div className="flex gap-1">
                                <Link href={repo}>
                                    <button className="btn bg-transparent p-1 border-0 hover:bg-gray-300 dark:hover:bg-gray-300 text-xl">
                                        <Icon icon="mdi:github" width="24" height="24" />
                                    </button>
                                </Link>
                                <Link href={demo === "#" ? {} : demo}>
                                    <button className="btn bg-transparent p-1 border-0 hover:bg-gray-300 dark:hover:bg-gray-300 text-xl disabled:hidden" disabled={demo === "#"}>
                                        <Icon icon="mdi:link" width="24" height="24" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <p className="prose">{description}</p>
                        <div className="divider mb-1">Tech Stack</div>
                        <div className="flex gap-2 mb-1 justify-center">{icons}</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectEntries;