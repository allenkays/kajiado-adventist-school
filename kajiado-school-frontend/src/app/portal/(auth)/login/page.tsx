// portal/(auth)/login/page.tsx
import LoginForm from "@/components/common/LoginForm"; // adjust path

export default function PortalLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </main>
  );
}