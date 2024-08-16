import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/app/globals.css";

const font = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
	title: "استطلاع",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	);
}
