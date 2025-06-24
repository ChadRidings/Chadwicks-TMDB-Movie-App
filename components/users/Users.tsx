import type { UserType } from "../../types/users";
import UserCard from "./UserCard";

const Users = ({ users }: { users: UserType[] }) => {
  return (
    <div className="flex flex-col items-start p-5 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-5 text-teal-500">User Details</h1>

      {users.map((user: UserType) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
