export async function POST(req) {
  const formData = await req.formData();
  const getEmail = formData.get("email");
 
  const email = `${getEmail}@gmail.com`;
  return Response.json(email, { status: 200 });
}
