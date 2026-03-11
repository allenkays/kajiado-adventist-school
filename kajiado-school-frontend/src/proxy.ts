import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("access_token")?.value;
  const role = request.cookies.get("role")?.value;

  console.log("PROXY PATH:", pathname);
  console.log("PROXY TOKEN:", token ? "present" : "missing");
  console.log("PROXY ROLE:", role);

  if (pathname.startsWith("/portal") && !pathname.includes("/login")) {

    if (!token) {
      return NextResponse.redirect(
        new URL("/portal/login", request.url)
      );
    }

    if (!role) {
      return NextResponse.redirect(
        new URL("/portal/login", request.url)
      );
    }

    const rolePortals = ["staff", "student", "finance", "parent"];
    const segments = pathname.split("/");
    const requestedPortal = segments[2];

    if (rolePortals.includes(requestedPortal) && requestedPortal !== role) {
      return NextResponse.redirect(
        new URL("/portal/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*"],
};