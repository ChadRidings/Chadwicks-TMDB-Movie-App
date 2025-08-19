import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";

const NavBar = () => {
    return (
        <nav className="py-2 px-6 bg-gray-100 dark:bg-primary-dark">
            <ul className="flex space-x-4 items-center">
                <Link href="/">
                    <Image
                        src="/images/chadwicks.png"
                        alt="Chadwick's Logo"
                        width={220}
                        height={50}
                        className=""
                        priority={true}
                        style={{ width: "125px", height: "auto" }}
                    />
                </Link>
                <li>
                    <a
                        href="/about"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-blue"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-blue"
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
