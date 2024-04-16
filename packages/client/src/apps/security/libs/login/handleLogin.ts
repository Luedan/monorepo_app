export async function handleLogin(values: { email: string; password: string }) {
  const request = await fetch("/api/security", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = await request.json();

  if (!data?.access_token) return null;

  return data;
}
