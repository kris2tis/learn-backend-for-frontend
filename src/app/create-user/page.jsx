"use client";

import axios from "axios";

export default function page() {
  return (
    <form
      className="flex flex-col gap-y-3 max-w-lg"
      action={async () => {
        const data = await axios
          .post("http://localhost:3000/api/create-user")
          .then((res) => res)
          .catch((err) => err);
        console.log(data);
      }}
    >
      <button className="border border-white p-2 ">ساخت کاربر</button>
    </form>
  );
}
