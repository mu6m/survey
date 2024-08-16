import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Bell, Search } from "lucide-react";
import useSession from "@/hooks/useSession";

const font = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
	title: "استطلاع ادارة",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const admin_user = useSession.getState();
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
					<div className="w-5/6">
						<div className="max-h-60 bg-[#F7F8FA] flex">
							<div className="w-full px-10 py-6">
								<header className="flex justify-between items-center mb-6">
									<div className="relative w-2/3">
										<input
											type="text"
											placeholder="البحث"
											className="w-full py-2 pl-4 pr-10 text-sm rounded-full shadow-sm focus:outline-none text-right"
										/>
										<div className="absolute inset-y-0 left-2 flex items-center pr-3 pointer-events-none">
											<Search className="text-gray-400" />
										</div>
									</div>
									<div className="flex items-center space-x-4">
										<div className="relative border rounded-full border-solid p-2">
											<Bell />
											<span className="flex items-center justify-center text-[10px] absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white">
												10
											</span>
										</div>
										<div className="text-right">
											<h2 className="text-lg font-medium">
												{admin_user?.user?.username || "admin"}
											</h2>
											<p className="text-sm text-gray-400">مرحبا بك</p>
										</div>
									</div>
								</header>

								{children}
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
