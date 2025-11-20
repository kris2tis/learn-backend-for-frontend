import axios from "axios";

export default async function Home() {
  // const users = await axios("http://localhost:3000/api/users")
  //   .then(({ data }) => data)
  //   .catch((err) => err);

  return (
    <div>
      {/* {users.map((user, index) => (
        <div className="flex gap-x-2" key={user?.id || index}>
          <span>{index + 1} : </span>
          <span>{user.name}</span>
        </div>
      ))} */}
    </div>
  );
}
