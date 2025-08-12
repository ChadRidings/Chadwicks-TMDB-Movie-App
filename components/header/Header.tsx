import NavBar from "../navigation/NavBar";

const Header = () => {
    return (
        <header className="bg-gray-200 dark:bg-zinc-950 p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                NextJS App Boilerplate
            </h1>
            <NavBar />
        </header>
    );
};

export default Header;
