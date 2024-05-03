import ClassEntries, { ClassElement, GPA, CLASSES } from "./ClassEntries";
import SBULogo from "../../assets/sbu.webp";
import Image from "next/image";

const Education = () => {
    return (
        <div id="education" className="">
            <h1 className="relative text-2xl text-base-content font-bold text-center my-4">
                Education
            </h1>

            <div className="flex justify-center mb-6 gap-2">
                <Image className="" src="/stonybrook.png" width="96" height="96" alt="Stony Brook University Logo" />
                <div className="whitespace-nowrap ">
                    <p className="font-bold w-36 ">Stony Brook University</p>
                    <p className="font-bold w-36 ">M.S. — Computer Science</p>
                    <small className="font-bold ">Expected Graduation: May 2026</small>
                    <br />
                    <small className="font-bold">GPA: {GPA}</small>
                </div>
            </div>

            <div className="flex justify-center ml-3">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-base-200 md:text-base-content">
                                    Course Code
                                </th>
                                <th>Course Name</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...CLASSES]?.reverse().map((project: ClassElement) => (
                                <ClassEntries
                                    key={crypto.randomUUID()}
                                    courseCode={project?.courseCode}
                                    courseName={project?.courseName}
                                    instructor={project?.instructor}
                                    graduate={parseInt(project?.courseCode.split("CSE")[1]) > 500}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Education;