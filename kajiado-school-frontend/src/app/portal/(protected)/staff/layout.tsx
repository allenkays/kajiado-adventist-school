import { redirect } from "next/navigation";
import { getAuth } from "../../proxy";

export default async function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getAuth("staff");

  if (!auth.isAuthenticated) {
    redirect("/portal/staff/login");
  }

  if (!auth.roleMatches) {
    redirect("/portal/login");
  }

  return <>{children}</>;
}
