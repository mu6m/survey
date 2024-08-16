"use client";

import { Button } from "@/components/ui/button";
import { backend } from "@/constants/config";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { Bell, Link, Pen, Search, Trash } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";
import { ItemData } from "./_components/Dialog";

export default function Comp() {
	const params = useParams<{ id: string }>();
	const fetcher = (url: string) =>
		fetch(url, { method: "GET" }).then((r) => r.json());
	let { data, isLoading } = useSWR(`${backend}/solve/${params.id}`, fetcher);
	console.log(data);
	if (isLoading) {
		return <ReloadIcon className="h-4 w-4 animate-spin mx-auto my-60" />;
	}
	return (
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
							<h2 className="text-lg font-medium">اسم المدير</h2>
							<p className="text-sm text-gray-400">مرحبا بك</p>
						</div>
					</div>
				</header>

				<div className="bg-white rounded-xl shadow-sm p-6">
					<div className="flex space-x-4 mb-6">
						<a
							href="/user/question"
							className="bg-[#0694A2] text-white py-2 px-4 rounded-lg shadow-md"
						>
							إضافة
						</a>
						<button className="bg-gray-100 text-[#0694A2] py-2 px-4 rounded-lg shadow-md">
							تحرير إكسل
						</button>
					</div>
					<div className="max-h-[450px] overflow-y-auto">
						<table className="w-full text-right " dir="rtl">
							<thead>
								<tr className="text-gray-500">
									<th className="py-2">الاسم</th>
									<th className="py-2">عدد الأسئلة</th>
									<th className="py-2">النتائج</th>
									<th className="py-2">وصف بسيط</th>
									<th className="py-2">تفاصيل</th>
									<th className="py-2">الاجراء</th>
								</tr>
							</thead>
							<tbody>
								{data.data.answers.map((item: any) => (
									<tr key={item.id} className="border-b last:border-none">
										<td className="py-4 flex items-center space-x-4">
											{item.user.name == "" ? "لا يوجد اسم" : item.user.name}
										</td>
										<td className="py-4">{data.data.answers.length}</td>
										<td className="py-4 flex items-center gap-3">
											<span>{item.answer.points}%</span>
											<div className=" bg-green-500 w-3 h-3 rounded-sm"></div>
										</td>
										<td className="py-4">معلومات</td>
										<td>
											<ItemData user={item.user} />
										</td>
										<td className="py-4 flex gap-2 items-center ">
											<button className="text-teal-500">
												<Pen className="h-4" />
											</button>
											<button className="text-red-500">
												<Trash className="h-4" />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="text-center py-4 text-blue-500 cursor-pointer">
							عرض المزيد
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
