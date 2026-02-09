import { jwtDecode } from "jwt-decode";

interface TokenPayload {
  role: string;
  exp: number;
}

export async function login(username: string, password: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  const data = await res.json();

  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);

  const decoded = jwtDecode<TokenPayload>(data.access);
  localStorage.setItem("role", decoded.role);

  return decoded.role;
}
