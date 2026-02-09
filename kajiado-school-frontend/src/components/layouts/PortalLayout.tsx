"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface PortalLayoutProps {
  children: ReactNode;
  role: "student" | "staff" | "parent" | "finance";
}

const sidebarLinks: Record<
  PortalLayoutProps["role"],
  { label: string; href: string }[]
> = {
  student: [
    { label: "Dashboard", href: "/portal/student" },
    { label: "Grades", href: "/portal/student/grades" },
    { label: "Assignments", href: "/portal/student/assignments" },
    { label: "Profile", href: "/portal/student/profile" },
  ],
  staff: [
    { label: "Dashboard", href: "/portal/staff" },
    { label: "Students", href: "/portal/staff/students" },
    { label: "Assignments", href: "/portal/staff/assignments" },
    { label: "Profile", href: "/portal/staff/profile" },
  ],
  parent: [
    { label: "Dashboard", href: "/portal/parent" },
    { label: "Child Records", href: "/portal/parent/child" },
    { label: "Profile", href: "/portal/parent/profile" },
  ],
  finance: [
    { label: "Dashboard", href: "/portal/finance" },
    { label: "Payments", href: "/portal/finance/payments" },
    { label: "Profile", href: "/portal/finance/profile" },
  ],
};

export default function PortalLayout({ children, role }: PortalLayoutProps) {
  const links = sidebarLinks[role];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r p-6">
        <h2 className="text-2xl font-bold mb-6 capitalize">
          {role} portal
        </h2>

        <nav className="flex flex-col space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded hover:bg-green-100 transition font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
