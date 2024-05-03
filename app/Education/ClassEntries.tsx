export const GPA: number = 3.64

export interface ClassElement {
    courseCode: string;
    courseName: string;
    instructor: string;
    graduate?: boolean;
}


export const CLASSES = [
    {
        courseCode: "CSE114",
        courseName: "Intro to Object-Oriented Programming",
        instructor: "Paul Fodor",
        completed: true,
    },
    {
        courseCode: "CSE214",
        courseName: "Data Structures",
        instructor: "Praveen Tripathi",
        completed: true,
    },
    {
        courseCode: "CSE216",
        courseName: "Programming Abstractions",
        instructor: "Ritwik Banerjee",
        completed: true,
    },
    {
        courseCode: "CSE220",
        courseName: "Systems Fundamentals I",
        instructor: "Kevin Mcdonnell",
        completed: true,
    },
    {
        courseCode: "CSE311",
        courseName: "Systems Administration",
        instructor: "Ahmad Esmaili",
        completed: true,
    },
    {
        courseCode: "CSE316",
        courseName: "Fundamentals of Software Development",
        instructor: "Joydeep Mitra",
        completed: true,
    },
    {
        courseCode: "CSE320",
        courseName: "Systems Fundamentals II",
        instructor: "Eugene Stark",
        completed: true,
    }, {
        courseCode: "CSE506",
        courseName: "Operating Systems",
        instructor: "Dongyoon Lee",
        completed: true,
    }, {
        courseCode: "CSE590",
        courseName: "Distributed and Decentralized Data Management",
        instructor: "Mohammed Amiri",
        completed: true,
    },
];

const ClassEntries = ({
    courseCode,
    courseName,
    instructor,
    graduate,
}: ClassElement) => {
    return (
        <tr className="prose">
            <td className={`${graduate ? "text-info" : "text-success"}`}>{courseCode}</td>
            <td>{courseName}</td>
            <td className="hidden md:block">{instructor}</td>
        </tr>
    );
};

export default ClassEntries;