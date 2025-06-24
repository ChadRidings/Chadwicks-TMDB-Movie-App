import Image from "next/image";
import type { UserType } from "../types/users";

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserType[] = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </main>
  );
};
