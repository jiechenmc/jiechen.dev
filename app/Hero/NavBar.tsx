import ThemeToggle from './ThemeToggle';
import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <div className="fixed text-sm flex justify-center w-full z-50 backdrop-blur">
            <div>
                <ul className="menu menu-horizontal">
                    <li>
                        <a href="#about">
                            <Icon icon="mdi:about-circle-outline" width="24" height="24" />
                            <p className="hidden md:block">About</p>
                        </a>
                    </li>
                    <li>
                        <a href="#education">
                            <Icon icon="mdi:book-education-outline" width="24" height="24" />
                            <p className="hidden md:block">Education</p>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <Icon icon="mdi:git" width="24" height="24" />
                            <p className="hidden md:block">Projects</p>
                        </a>
                    </li>
                    <li>
                        <a href="#techstack">
                            <Icon icon="mdi:puzzle" width="24" height="24" />
                            <p className="hidden md:block">Tech Stack</p>
                        </a>
                    </li>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;