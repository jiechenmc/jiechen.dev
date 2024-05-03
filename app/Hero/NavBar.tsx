import ThemeToggle from './ThemeToggle';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="fixed text-sm flex justify-center w-full z-50 backdrop-blur">
            <div>
                <ul className="menu menu-horizontal">
                    <li>
                        <Link href="#about">
                            <Icon icon="mdi:about-circle-outline" width="24" height="24" />
                            <p className="hidden md:block">About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#education">
                            <Icon icon="mdi:book-education-outline" width="24" height="24" />
                            <p className="hidden md:block">Education</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects">
                            <Icon icon="mdi:git" width="24" height="24" />
                            <p className="hidden md:block">Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#summary">
                            <Icon icon="mdi:puzzle" width="24" height="24" />
                            <p className="hidden md:block">summary</p>
                        </Link>
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