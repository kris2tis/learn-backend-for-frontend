"use client";

import axios from "axios";

export default function page() {
  const handleOnSubmit = (e) => {
    axios.post("/api/send-email", e).then((res) => console.log(res)).catch((err) => console.log(err))
  };
  return (
    <form action={handleOnSubmit}>
      <input className="border-white" name="email" />
      <button>ارسال فرم</button>
    </form>
  );
}
