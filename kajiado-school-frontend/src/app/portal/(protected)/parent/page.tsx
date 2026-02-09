import PortalLayout from "@/components/layouts/PortalLayout";

export default function ParentPortalPage() {
  return (
    <PortalLayout role="parent">
      <h1 className="text-3xl font-bold mb-4">
        Parent Dashboard
      </h1>
      <p>Welcome to the parent portal.</p>
    </PortalLayout>
  );
}
