const users = [
  { name: "ali", age: 20 },
  { name: "hasan", age: 18 },
];

export async function GET() {
  return Response.json(users, { status: 200 });
}
