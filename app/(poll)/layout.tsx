import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";

const font = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
	title: "تسجيل استطلاع",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={
					(font.className,
					"h-screen flex items-center justify-center bg-gray-100")
				}
			>
				<Toaster />
				{children}
			</body>
		</html>
	);
}
