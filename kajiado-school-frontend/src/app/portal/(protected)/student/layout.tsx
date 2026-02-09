import { redirect } from "next/navigation";
import { getAuth } from "../../proxy";

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getAuth("student");

  if (!auth.isAuthenticated) {
    redirect("/portal/student/login");
  }

  if (!auth.roleMatches) {
    redirect("/portal/login");
  }

  return <>{children}</>;
}
