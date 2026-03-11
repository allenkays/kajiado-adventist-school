import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function PortalRedirect() {
  const role = (await cookies()).get("role")?.value;

  if (!role) {
    redirect("/portal/login");
  }

  redirect(`/portal/${role}`);
}