import axios from "axios";

export default async function page({ params }) {
  const { id } = await params;
  const data = await axios
    .post("http://localhost:3000/api/getPostById", { id })
    .then(({ data }) => data)
    .catch((err) => err);

  if (!data) return <span>پستی با این آیدی یافت نشد</span>;
  return (
    <div className="flex flex-col gap-y-3 p-2 ">
      <h1>صفحه پست ها</h1>
      <span>{data.title}</span>
      <span className="text-justify">{data.content}</span>
    </div>
  );
}
