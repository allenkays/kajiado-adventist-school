import { redirect } from "next/navigation";
import { getAuth } from "../../proxy";

export default async function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getAuth("parent");

  if (!auth.isAuthenticated) {
    redirect("/portal/parent/login");
  }

  if (!auth.roleMatches) {
    redirect("/portal/login");
  }

  return <>{children}</>;
}
