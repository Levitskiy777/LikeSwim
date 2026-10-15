import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lang = pathname.startsWith("/ru")
    ? "ru"
    : pathname.startsWith("/he")
    ? "he"
    : "en";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-lang", lang);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
