import { cookies } from "next/headers";

export async function getAuth(expectedRole?: string) {
  const token = (await cookies()).get("access_token")?.value;
  const role = (await cookies()).get("role")?.value;

  return {
    isAuthenticated: Boolean(token),
    role,
    roleMatches: expectedRole ? role === expectedRole : true,
  };
}
