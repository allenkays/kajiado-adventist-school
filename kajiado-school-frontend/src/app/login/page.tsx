"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const role = await login(username, password);

      switch (role) {
        case "student":
          router.push("/portal/student");
          break;
        case "parent":
          router.push("/portal/parent");
          break;
        case "staff":
          router.push("/portal/staff");
          break;
        case "finance":
          router.push("/portal/finance");
          break;
        case "admin":
          router.push("/admin");
          break;
        default:
          router.push("/");
      }
    } catch {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        {error && <p className="text-red-600 mb-2">{error}</p>}

        <input
          className="w-full border p-2 mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-brown-700 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
