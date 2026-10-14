


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";


export async function proxy(request: NextRequest) {

// Better Auth stores the session token in cookies under names like this:
  // "better-auth.session_token" (or "__Secure-better-auth.session_token" in production)
  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("__Secure-better-auth.session_token")?.value;

  if (!sessionToken) {
    const signInUrl = new URL("/signIn", request.url);
    // Optional: preserve where the user was trying to go
    signInUrl.searchParams.set(
      "callbackUrl",
      request.nextUrl.pathname + request.nextUrl.search
    );
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
    // const sessionCookie = getSessionCookie(request);

    // if (!sessionCookie) {
    //   return NextResponse.redirect(new URL("/signIn", request.url));
    // }
    // return NextResponse.next();


  //  try {
  //   const session = await auth.api.getSession({
  //     headers: request.headers, 
  //   });

  //   if (!session?.user) {
  //     const signInUrl = new URL("/signIn", request.url);
  //     signInUrl.searchParams.set(
  //       "callbackUrl",
  //       request.nextUrl.pathname + request.nextUrl.search
  //     );
  //     return NextResponse.redirect(signInUrl);
  //   }

  //   return NextResponse.next();
  // }
  //  catch (error) {
  //   console.error("PROXY AUTH ERROR:", error);
  //   return NextResponse.redirect(new URL("/signIn", request.url));
  // }
  

}




export const config = {
  matcher: ["/product/:path*"],
  

};