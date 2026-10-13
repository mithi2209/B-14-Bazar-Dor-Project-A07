
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {


  // .........method-2 (to stay specific detail page......)

  const redirectToSignIn = () => {

      const signInUrl = new URL("/signIn", request.url);
      signInUrl.searchParams.set(
        "callbackURL",
        request.nextUrl.pathname + request.nextUrl.search
      );
      return NextResponse.redirect(signInUrl);
  };

  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    console.log("PROXY:", session?.user?.email ?? "no session");

    if (!session?.user) {
      return redirectToSignIn();
    }

    return NextResponse.next();

  } 
  catch (error) {
    console.error("PROXY ERROR:", error);
    return NextResponse.redirect(new URL("/", request.url));
  }


  // .........method-1..........

  // try {
  //   const session = await auth.api.getSession({
  //     headers: request.headers,
  //   });

  //   console.log("PROXY:", session?.user?.email ?? "no session");

  //   if (!session?.user) {
  //     return NextResponse.redirect(new URL("/signIn", request.url));
  //   }

  //   return NextResponse.next();
  // } catch (error) {
  //   console.error("PROXY ERROR:", error);
  //   return NextResponse.redirect(new URL("/signIn", request.url));
  // }
}

export const config = {
  matcher: ["/product/:path*"],
};