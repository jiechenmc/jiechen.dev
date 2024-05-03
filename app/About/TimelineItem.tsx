'use client'

import getIconElement from "../hooks/getIconElement"

interface Props {
    date: string,
    title: string,
    company: string,
    body: string,
    tools: string
    end?: boolean
}

const TimelineItem = ({ date, title, company, body, tools, end }: Props) => {
    const icons = tools.split(",").map((e) => getIconElement(e));
    return <li>
        <div className="timeline-middle prose">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
        </div>
        <div className={`${!end === true ? "timeline-start" : "timeline-end"} md:text-end mb-10 min-w-[368px] `}>
            <time className="font-mono italic">{date}</time>
            <div className="text-xl font-black">{title}</div>
            <div className="flex justify-between">
                <small className="mr-10">Tools:</small> <strong className="text-info px-2">{company}</strong>
            </div>
            <div className="flex justify-end gap-2 p-2 border-4 border-ridge border-info bg-base-content">{icons}</div>
        </div>
        <hr />
    </li >;
}

export default TimelineItem;