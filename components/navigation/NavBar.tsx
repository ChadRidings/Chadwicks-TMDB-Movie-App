import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";

const NavBar = () => {
    return (
        <nav className="py-2 px-6 md:py-4 bg-gray-100 dark:bg-primary-dark">
            <ul className="flex space-x-4 items-center">
                <Link href="/">
                    <Image
                        src="/images/chadwicks.png"
                        alt="Chadwick's Logo"
                        width={288}
                        height={70}
                        className=""
                        priority={true}
                        style={{ width: "150px", height: "auto" }}
                    />
                </Link>
                <li>
                    <a
                        href="/about"
                        className="text-gray-600 font-bold dark:text-gray-300 hover:text-primary-blue"
                    >
                        ABOUT
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className="text-gray-600 font-bold dark:text-gray-300 hover:text-primary-blue"
                    >
                        CONTACT
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
