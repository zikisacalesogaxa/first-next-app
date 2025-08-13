import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const UsersPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-5xl">Users</h1>
      <table className="table table-ordered">
        <thead>
          <tr>
            <th className="font-bold text-xl">Name</th>
            <th className="font-bold text-xl">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
