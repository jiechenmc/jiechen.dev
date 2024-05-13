'use client'
import ViewResumeButton from "./ViewResumeButton";
import ViewGithubButton from "./ViewGithubButton";
import NavBar from "./NavBar";
import Image from "next/image";
import ViewBlogButton from "./ViewBlogButton";
import Link from "next/link";

const Hero = () => {
    return (
        <div id="home" >
            <NavBar />
            <div className="hero min-h-screen bg-base-200 justify-center text-center" >
                <div className="hero-content grid lg:flex-row justify-center p-0">
                    <Image src={"/hero.jpg"} priority className="max-w-sm rounded-lg shadow-2xl ml-auto mr-auto" width="384" height="380" alt="A funny meme about programemrs" />
                    <Image id="AnimatedIntroduction" className="w-full object-center text-center justify-center flex" src={"/typing-intro-dark.svg"} width="390" height="45" alt=" My interests are Software Engineering and Site Reliability Engineering!" />
                    <div className="prose">
                        <h3 className="text-success">SBU &#39;26 — Accelerated B.S./M.S. of Computer Science</h3>
                    </div>
                    <div className="hero-content flex-col">
                        <div className="flex gap-2">
                            <ViewResumeButton />
                            <ViewGithubButton />
                            <ViewBlogButton />
                        </div>
                        <div role="alert" className="alert shadow-lg border-2 border-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <h3 className="font-bold">New Blog Post!</h3>
                                <div className="text-xs">Go Concurrency with Goroutines</div>
                            </div>
                            <Link href="https://blog.jiechen.dev/Concurrency/Go/Goroutines">
                                <button className="btn btn-sm text-error border-2 border-error hover:border-success hover:text-success">See</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;