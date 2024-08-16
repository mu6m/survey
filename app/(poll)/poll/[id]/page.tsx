import { Field, Radio } from "@/components/main/Items";
import { Pen, Trash } from "lucide-react";

export default function Poll() {
	return (
		<div className="w-[1024px] h-[700px] bg-white shadow-lg flex">
			<div className="w-2/6 bg-[url('/assets/bg.jpg')] bg-cover bg-center relative">
				<div className="absolute flex flex-col gap-4 bottom-16 right-10 text-white text-right z-20">
					<div>
						<h2 className="text-4xl font-bold mb-4">تسجيل الدخول</h2>
						<p className="text-sm ">شرح بسيط</p>
					</div>
					<div>
						<h2 className="text-lg font-bold mb-4">25% تم الاستكمال </h2>
						<div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
							<div
								className="bg-[#007b8d] h-2.5 rounded-full"
								style={{
									width: "45%",
									marginLeft: "auto",
									marginRight: "0",
								}}
							></div>
						</div>
					</div>
				</div>
				<div className="absolute inset-0 bg-black opacity-50 z-10"></div>
			</div>

			<div className="w-4/6 p-12 flex flex-col ">
				<Order />
				<Field />
			</div>
		</div>
	);
}

function Order() {
	return (
		<div className="flex items-center justify-between w-full max-w-md mx-auto">
			<div className="flex items-center">
				<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 10h16M4 14h16M4 18h16"
						/>
					</svg>
				</div>
				<span className="ml-2 text-sm text-gray-600">المعلومات الخاصة بك</span>
			</div>
			<div className="flex-grow border-t border-gray-300 mx-4"></div>
			<div className="flex items-center">
				<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<span className="ml-2 text-sm ">الأسئلة</span>
			</div>
			<div className="flex-grow border-t border-gray-300 mx-4"></div>
			<div className="flex items-center">
				<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
						/>
					</svg>
				</div>
				<span className="ml-2 text-sm text-gray-600">الموافقة</span>
			</div>
		</div>
	);
}
function UserData() {
	return <div></div>;
}

function Questions() {
	<div className="flex flex-col py-4 gap-4">
		<div className="border-b border-gray-200 gap-4 flex justify-between pb-4">
			<button className="text-teal-500 ml-4">
				<Pen />
			</button>
			<button className="text-red-500">
				<Trash />
			</button>
			<div className="ml-auto text-lg font-bold">السؤال</div>
		</div>
		<div
			className="flex items-center gap-6 space-x-4 space-x-reverse ml-10"
			dir="rtl"
		>
			<Radio />
		</div>
	</div>;
}

function Thanks() {
	return (
		<div>
			<h1 className="text-7xl font-bold ">👍</h1>
			<h1 className="text-4xl font-bold text-[#007b8d]">تم الانتهاء</h1>
		</div>
	);
}
