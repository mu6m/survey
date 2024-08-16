import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
	const cookie = cookies().get("jwt");
	//i really want to check for jwt tokens but i don't have the secret
	// const token = await verifyAccessToken(cookie?.value);
	// if (token === false || !token) {
	if (!cookie?.value) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}
}

export const config = {
	matcher: ["/user/:path*"],
};
