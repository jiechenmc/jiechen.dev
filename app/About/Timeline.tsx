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
            tools: "azure"
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
            tools: "HTML,CSS,nodejs,react,MongoDB"
        }, {
            date: "Fall 2023",
            title: "President",
            company: "Google Developer Student Clubs",
            body: "",
            tools: "Google Cloud,terraform,react,docker,nginx"
        },
        {
            date: "Summer 2023",
            title: "Software Engineering Co-Op",
            company: "Con Edison",
            body: "",
            tools: "c#,jQuery,.NET Core,SQLite"
        },
        {
            date: "Spring 2023",
            title: "Campus Residence IT Programmer",
            company: "Stony Brook University",
            body: "",
            tools: "python,c#,TypeScript,react,mysql"
        }, {
            date: "Fall 2022",
            title: "Vertically Integrated Projects Team Lead",
            company: "Stony Brook University",
            body: "",
            tools: "Amazon Web Services,Google Cloud,go,nodejs,nextjs,traefik,cloudflare,docker,kubernetes,MongoDB"
        },
        {
            date: "Summer 2022",
            title: "Site Reliability Engineering Fellowship",
            company: "Major League Hacking",
            body: "",
            tools: "python,docker,prometheus,grafana,NGINX,DigitalOcean,Github Actions"
        },
        {
            date: "Fall 2021",
            title: "Institutional Research Student Assistant",
            company: "Stony Brook University",
            body: "",
            tools: "python,nodejs,playwright"
        },]


    return <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
        {timelineItems.map((el: TimelineSchema, idx: number) => <TimelineItem key={el.title} {...el} end={idx % 2 !== 0} />)}
    </ul>;
}

export default Timeline;