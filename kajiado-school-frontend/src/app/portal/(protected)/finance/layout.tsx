import { redirect } from "next/navigation";
import { getAuth } from "../../proxy";

export default async function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getAuth("Finance");

  if (!auth.isAuthenticated) {
    redirect("/portal/finance/login");
  }

  if (!auth.roleMatches) {
    redirect("/portal/login");
  }

  return <>{children}</>;
}
