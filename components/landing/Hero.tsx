import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, AwardIcon, RocketIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="bg-background text-foreground py-20">
			<div className="container mx-auto px-4 md:px-6 flex flex-col gap-4 items-center justify-center text-center space-y-8">
				<div className="space-y-4">
					<h1 className="text-4xl font-bold">استطلاع الرأي</h1>
					<p className="text-muted-foreground text-lg max-w-2xl">
						تطبيق تجربة استطلاع رأي
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<a
						href="/auth/login"
						className={buttonVariants({
							size: "lg",
							className: "rounded-full",
						})}
					>
						سجل دخولك 👋
					</a>
					<a
						href="/user"
						className={buttonVariants({
							size: "lg",
							className: "rounded-full",
							variant: "secondary",
						})}
					>
						مراجعة الاستطلاعات
					</a>
				</div>
			</div>
		</section>
	);
}
