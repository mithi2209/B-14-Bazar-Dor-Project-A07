

import { auth } from "./lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export async function proxy(request: NextRequest) {

  // .........method-1..........

  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    console.log("PROXY:", session?.user?.email ?? "no session");

    if (!session?.user) {
      return NextResponse.redirect(new URL("/signIn", request.url));
    }

    return NextResponse.next();
  } 
  catch (error) {
    console.error("PROXY ERROR:", error);
    return NextResponse.redirect(new URL("/signIn", request.url));
  }

}


export const config = {
  matcher: ["/product/:path*"],
  
 


};