"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({ role }: { role: string }) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      credentials: "include", // ✅ REQUIRED
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Login failed");
      return;
    }

    router.replace(`/portal/${role}`);
  };

  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4 capitalize">{role} Login</h2>

      {error && <p className="text-red-600">{error}</p>}

      <input
        className="w-full border p-2 mb-3"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full border p-2 mb-4"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-green-700 text-white py-2 rounded">
        Login
      </button>
    </form>
  );
}
