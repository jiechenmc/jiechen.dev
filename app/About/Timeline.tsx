import TimelineItem from "./TimelineItem";

interface TimelineSchema {
    date: string,
    title: string,
    body: string,
    tools: string
}

const Timeline = () => {
    const timelineItems = [
        {
            date: "Summer 2024",
            title: "Cloud Infrastructure Engineer Intern @ Robert Half",
            body: "Leveraged Azure to deliver business solutions.",
            tools: "azure"
        },
        {
            date: "Summer 2023",
            title: "Software Engineering Co-Op @ Con Edison",
            body: "Learned about the electrical utility business and built C# applications.",
            tools: "c#,sqlite"
        }, {
            date: "Summer 2022",
            title: "SRE Fellowship @ MLH and Meta",
            body: "Conducted system load testing, built CI/CD pipelines, and set up system monitoring.",
            tools: "docker,prometheus,grafana,python,nginx"
        },]


    return <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
        {timelineItems.map((el: TimelineSchema, idx: number) => <TimelineItem key={el.title} {...el} end={idx % 2 !== 0} />)}
    </ul>;
}

export default Timeline;