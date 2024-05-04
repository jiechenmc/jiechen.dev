'use client'
import ViewResumeButton from "./ViewResumeButton";
import ViewGithubButton from "./ViewGithubButton";
import NavBar from "./NavBar";
import Image from "next/image";

const Hero = () => {
    return (
        <div id="home" >
            <NavBar />
            <div className="hero min-h-screen bg-base-200 justify-center text-center" >
                <div className="hero-content grid lg:flex-row justify-center p-0">
                    <Image src={"/hero.jpg"} priority className="max-w-sm rounded-lg shadow-2xl ml-auto mr-auto" width="384" height="380" alt="A funny meme about programemrs" />
                    <Image id="AnimatedIntroduction" className="w-full object-center text-center justify-center flex" src={"/typing-intro-dark.svg"} width="390" height="45" alt=" My interests are Software Engineering and Site Reliability Engineering!" />
                    <div className="prose">
                        <h3 className="text-success">SBU &#39;26 -- Accelerated B.S./M.S. of Computer Science</h3>
                        {/* <h1 className="text-success">GDSC Lead @ Google Developer Student Clubs</h1> */}
                        {/* <p className="text-content">Computer Aide Temporary @ Con Edison</p>
                        <p className="text-content">Campus Residence IT Technician and Programmer @ Stony Brook University</p>
                        <p className="text-content">Production Engineering Fellow @ Major League Hacking</p> */}
                    </div>
                    <div className="hero-content flex-col">
                        <div className="flex gap-2">
                            <ViewResumeButton />
                            <ViewGithubButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;