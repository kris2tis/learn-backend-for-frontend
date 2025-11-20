export async function POST(req) {
  const formData = await req.formData();
  const getEmail = formData.get("email");
  console.log(getEmail)
  const email = `${getEmail}@gmail.com`;
  return Response.json(email, { status: 200 });
}
