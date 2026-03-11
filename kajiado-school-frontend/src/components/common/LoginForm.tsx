"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");
    setError("");
    setLoading(true);

    try {
      console.log("Sending request to /api/login/");
      const res = await fetch("/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include" //— not needed for same-origin
      });

      console.log("Response status:", res.status);
      const data = await res.json().catch(() => ({}));


      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      // Success → server sent Set-Cookie + redirect → browser handles it
      console.log("Login OK — waiting for server redirect...");
      // You can show a spinner here if you want, but no need for router
      window.location.href = "/portal";
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      setError("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <form
      className="max-w-md mx-auto bg-white p-6 rounded shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold mb-4">Portal Login</h2>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <input
        className="w-full border p-2 mb-3"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-4"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-700 text-white py-2 rounded disabled:opacity-60"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}