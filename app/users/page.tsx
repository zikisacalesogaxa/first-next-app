import React from "react";
import UserCard from "../components/UserCard/UserCard";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
