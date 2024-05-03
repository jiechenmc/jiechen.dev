'use client'

import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer footer-center items-center p-2 bg-base-300 text-base">
            <div className="grid grid-cols-2">
                <div>
                    <p>Jie Chen</p>
                    <p>CS @ Stony Brook University</p>
                </div>
                <div>
                    <Link href="https://github.com/jiechenmc">
                        <button className="btn dark:fill-white bg-transparent w-fit h-fit border-0 hover:bg-gray-300 dark:hover:bg-gray-30">
                            <Icon icon="mdi:github" width="24" height="24" />
                        </button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/jiechen-sbu/">
                        <button className="btn dark:fill-white bg-transparent w-fit h-fit border-0 hover:bg-gray-300 dark:hover:bg-gray-30">
                            <Icon icon="mdi:linkedin" width="24" height="24" />
                        </button>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;