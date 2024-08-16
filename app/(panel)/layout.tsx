import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";

const font = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
	title: "استطلاع ادارة",
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
				<div className="w-[1024px] h-[700px] shadow-lg flex">
					<div className="w-1/6 bg-[url('/assets/bg.jpg')] bg-cover bg-center relative"></div>
					<div className="w-5/6">{children}</div>
				</div>
			</body>
		</html>
	);
}
