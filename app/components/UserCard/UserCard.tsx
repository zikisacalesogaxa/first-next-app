import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserCard = (user: User) => {
  return (
    <div key={user.id} className="card card-border bg-base-100 w-96 border-1 rounded-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{user.name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <Link href={`/users/details/${user.id}`} className="rounded-sm text-white border-0 btn-sm btn btn-primary bg-blue-500 hover:bg-blue-700">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
