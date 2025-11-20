"use client";

import axios from "axios";

export default function page() {
  const handleOnSubmit = async (e) => {
    const data = await axios
      .post("/api/send-email", e)
      .then(({ data }) => data)
      .catch((err) => console.log(err));
  
  };
  return (
    <form action={handleOnSubmit}>
      <input className="border-white" name="email" />
      <button>ارسال فرم</button>
    </form>
  );
}
