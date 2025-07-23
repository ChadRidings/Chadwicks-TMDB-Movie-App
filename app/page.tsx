import type { UserType } from "../types/users";
import Users from "../components/users/Users";
import ThemeToggle from "../components/theme/ThemeToggle";

const Page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserType[] = await response.json();

  return (
    <>
      <ThemeToggle />
      <div className="flex w-full max-w-[1440px] mx-auto text-gray-600 dark:bg-gray-800 dark:text-gray-200">
        <Users users={users} />
      </div>
    </>
  );
};

export default Page;
