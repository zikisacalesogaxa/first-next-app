import Image from "next/image";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserDetailCard = (user: User) => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="font-bold text-5xl mb-10">User Details</h1>
      <Link href="/users">back to users</Link>
      <div className="card bg-base-100 w-96 border-1 rounded-lg mt-10">
        <div className="card-body">
          <h2 className="card-title">{user.name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
        <figure>
          <Image
            src={`https://placehold.co/500x300/png?text=${user.name}+image`}
            width={500}
            height={300}
            alt={user.name}
          />
        </figure>
      </div>
    </div>
  );
};

export default UserDetailCard;
