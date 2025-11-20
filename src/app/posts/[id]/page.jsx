import axios from "axios";

export default async function page({ params }) {
  const { id } = await params;
  const data = await axios
    .post(
      "https://learn-backend-for-frontend-9wdh.vercel.app/api/getPostById",
      { id }
    )
    .then(({ data }) => data)
    .catch((err) => err);

  return data?.title ? (
    <div className="flex flex-col gap-y-3 p-2 ">
      <h1>صفحه پست ها</h1>

      <span>{data.title}</span>
      <span className="text-justify">{data.content}</span>
    </div>
  ) : (
    <span>پستی یافت نشد</span>
  );
}
