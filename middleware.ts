import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withAuth(async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAuth = await getToken({ req: request });
  const protectedPages = ["/profile"];
  const isAuthRoute = pathname.startsWith("/auth/signin");
  const isprotectedRoute = protectedPages.some((route) =>
    pathname.startsWith(route)
  );
  if (!isAuth && isprotectedRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (isAuth && isAuthRoute) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
},{callbacks:{
    async authorized(){
        return true
    }
}});

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile/:path*','/auth/:path*'],
};
