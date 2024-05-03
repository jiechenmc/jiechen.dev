'use client'

import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

const ThemeToggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    useEffect(() => {
        const lightTextColor = "1f2937";
        const darkTextColor = "a6adba";

        // let banner: HTMLImageElement = document.getElementById(
        //     "GithubStats"
        // ) as HTMLImageElement;

        // let typewriter: HTMLImageElement = document.getElementById(
        //     "AnimatedIntroduction"
        // ) as HTMLImageElement;

        const statsLight = `https://github-readme-stats.vercel.app/api/top-langs/?username=jiechenmc&layout=compact&theme=light&hide_border=true&text_color=${lightTextColor}&title_color=${lightTextColor}&hide_title=true&exclude_repo=notes`;
        const statsDark = `https://github-readme-stats.vercel.app/api/top-langs/?username=jiechenmc&layout=compact&theme=dark&hide_border=true&bg_color=2a303c&text_color=${darkTextColor}&title_color=${darkTextColor}&hide_title=true&exclude_repo=notes`;

        const typewriterLight = `https://readme-typing-svg.demolab.com?font=Fira+Code&duration=1000&pause=1000&color=${lightTextColor}&center=true&vCenter=true&width=435&lines=Hello+I'm+Jie!;My+interests+are%3A;Software+Engineering🖥️...;Site+Reliability+Engineering💾...;And DevOpS✅!`;
        const typewriterDark = `https://readme-typing-svg.demolab.com?font=Fira+Code&duration=1000&pause=1000&color=${darkTextColor}&center=true&vCenter=true&width=435&lines=Hello+I'm+Jie!;My+interests+are%3A;Software+Engineering🖥️...;Site+Reliability+Engineering💾...;And DevOpS✅!`;

        if (isDarkTheme) {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            document.documentElement.dataset.theme = "light";
            // if (typewriter) {
            //     banner.src = statsLight;
            //     typewriter.src = typewriterLight;
            // }
        } else {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            document.documentElement.dataset.theme = "dark";
            // if (typewriter) {
            //     banner.src = statsDark;

            //     // This will prevents overwrite on initial load
            //     if (!typewriter.src.includes("dark")) {
            //         typewriter.src = typewriterDark;
            //     }
            // }
        }
    }, [isDarkTheme]);

    return (
        <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} />
            {/* <input type="checkbox" value="synthwave" className="toggle theme-controller" /> */}
            <Icon icon="circum:light" className="swap-on fill-black" width="24" height="24" />
            <Icon icon="circum:dark" className="swap-off fill-white" width="24" height="24" />
        </label>
    );
};

export default ThemeToggle;