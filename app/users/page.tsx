import React from "react";
import UserCard from "../components/UserCard/UserCard";

const UsersPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading delay
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-5xl mb-10">Users</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {users.map((user: { id: number; name: string; email: string; }) => (
          <UserCard key={user.id} id={user.id} name={user.name} email={user.email}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
