import axios from "axios";
import React from "react";

export default async function page() {
  const users = await axios
    .get("http://localhost:3000/api/users")
    .then(({ data }) => data)
    .then((err) => err);
  return (
    <div>
      {users.map((user, index) => (
        <span key={index}>{user.name}</span>
      ))}
    </div>
  );
}
