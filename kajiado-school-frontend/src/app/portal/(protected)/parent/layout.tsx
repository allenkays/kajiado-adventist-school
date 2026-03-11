import { redirect } from "next/navigation";

export default async function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
