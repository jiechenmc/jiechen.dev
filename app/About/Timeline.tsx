import TimelineItem from "./TimelineItem";

interface TimelineSchema {
    date: string,
    title: string,
    company: string,
    body: string,
    tools: string
}

const Timeline = () => {
    const timelineItems = [
        {
            date: "Summer 2024",
            title: "Cloud Infrastructure Engineer Intern",
            company: "Robert Half",
            body: "",
            tools: "Azure"
        },
        {
            date: "Spring 2024",
            title: "Systems Fundamentals I Teaching Assistant",
            company: "Stony Brook University",
            body: "",
            tools: "C"
        },
        {
            date: "Fall 2023",
            title: "Software Development Teaching Assistant",
            company: "Stony Brook University",
            body: "",
            tools: "HTML,CSS,Node.js,React,MongoDB"
        }, {
            date: "Fall 2023",
            title: "President",
            company: "Google Developer Student Clubs",
            body: "",
            tools: "Google Cloud,Terraform,React,Docker,NGINX"
        },
        {
            date: "Summer 2023",
            title: "Software Engineering Co-Op",
            company: "Con Edison",
            body: "",
            tools: "C#,jQuery,.NET Core,SQLite"
        },
        {
            date: "Spring 2023",
            title: "Campus Residence IT Programmer",
            company: "Stony Brook University",
            body: "",
            tools: "Python,C#,TypeScript,React,MySQL"
        }, {
            date: "Fall 2022",
            title: "Vertically Integrated Projects Team Lead",
            company: "Stony Brook University",
            body: "",
            tools: "Amazon Web Services,Google Cloud,go,Node.js,Next.js,Traefik,Cloudflare,Docker,Kubernetes,MongoDB"
        },
        {
            date: "Summer 2022",
            title: "Site Reliability Engineering Fellowship",
            company: "Major League Hacking",
            body: "",
            tools: "Python,Docker,Prometheus,Grafana,NGINX,DigitalOcean,Github Actions"
        },
        {
            date: "Fall 2021",
            title: "Institutional Research Student Assistant",
            company: "Stony Brook University",
            body: "",
            tools: "Python,Node.js,Playwright"
        },]


    return <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
        {timelineItems.map((el: TimelineSchema, idx: number) => <TimelineItem key={el.title} {...el} end={idx % 2 !== 0} />)}
    </ul>;
}

export default Timeline;