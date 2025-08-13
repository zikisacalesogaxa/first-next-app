import UserDetailCard from "@/app/components/UserDetailCard/UserDetailCard";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
  const user: User = await res.json();

  return (
    <UserDetailCard id={user.id} name={user.name} email={user.email}></UserDetailCard>
  );
}
