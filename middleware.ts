import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  console.log("✅ Middleware aktif"); // ini HARUS muncul di terminal

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");

  if (!token && !isAuthPage) {
    console.log("🔒 No token, redirecting to /auth/sign-in");
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico|auth).*)"],
};
