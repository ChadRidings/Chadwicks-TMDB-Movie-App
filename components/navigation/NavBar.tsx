import ThemeToggle from "../theme/ThemeToggle";

const NavBar = () => {
  return (
    
    <nav className="mt-2">
        <ul className="flex space-x-4">
            <li>
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:underline">
                    Home
                </a>
            </li>
            <li>
                <a href="/about" className="text-gray-600 dark:text-gray-300 hover:underline">
                    About
                </a>
            </li>
            <li>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:underline">
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
