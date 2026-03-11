// app/api/login/route.ts   (create this file if not already)

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Forward to your external backend (adjust URL/port as needed)
    const backendRes = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!backendRes.ok) {
      const errorData = await backendRes.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData?.detail || "Invalid credentials" },
        { status: backendRes.status }
      );
    }

    const data = await backendRes.json();

    // Expecting backend returns something like: { access_token: "...", role: "student" }
    const { access_token, role } = data;

    if (!access_token || !role) {
      return NextResponse.json({ error: "Missing token or role from backend" }, { status: 500 });
    }

    const normalizedRole = role.toLowerCase(); // student, parent, etc.

    // Create redirect response
    const redirectUrl = new URL(`/portal/${normalizedRole}`, request.url);

    const response = NextResponse.redirect(redirectUrl, 303); // 303 is safe for POST → GET

    // Set cookies on THIS response → browser stores them before following redirect
    response.cookies.set("access_token", access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days – adjust to match your token expiry
    });

    response.cookies.set("role", normalizedRole, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (err) {
    console.error("Login proxy error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}