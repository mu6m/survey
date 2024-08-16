"use client";

import { Button } from "@/components/ui/button";
import { backend } from "@/constants/config";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { Bell, Link, Search } from "lucide-react";
import React, { useState } from "react";
import useSWR from "swr";

export default function Comp() {
	const fetcher = (url: string) =>
		fetch(url, { method: "GET" }).then((r) => r.json());
	const { data, isLoading } = useSWR(`${backend}/poll`, fetcher);
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

				<div className="grid grid-cols-3 gap-4 mb-6" dir="rtl">
					<div className="bg-[#E0E7FF] rounded-xl p-6 text-[#353535] flex flex-col justify-between">
						<div className="flex justify-between items-center">
							<h3 className="text-xl font-semibold">عدد المشاركين</h3>
							<i className="fas fa-users text-lg"></i>
						</div>
						<div>
							<p className="mt-4">23344</p>
							<span className="text-sm mt-2">التاريخ</span>
						</div>
					</div>
					<div className="bg-[#353535] rounded-xl p-6 text-white flex flex-col justify-between">
						<div className="flex justify-between items-center">
							<h3 className="text-xl font-semibold">
								عدد الاستطلاعات المنتهية
							</h3>
							<i className="fas fa-clipboard-list text-lg"></i>
						</div>
						<div>
							<p className="mt-4">23344</p>
							<span className="text-sm mt-2">التاريخ</span>
						</div>
					</div>

					<div className="bg-[#0694A2] rounded-xl p-6 text-white flex flex-col justify-between">
						<div className="flex justify-between items-center">
							<h3 className="text-xl font-semibold">نسبة النتائج</h3>
							<i className="fas fa-chart-line text-lg"></i>
						</div>
						<div>
							<p className="mt-4">زيادة أسبوعية 10%</p>
							<span className="text-sm mt-2">التاريخ</span>
						</div>
					</div>
				</div>

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
					<div className="max-h-[270px] overflow-y-auto">
						<table className="w-full text-right " dir="rtl">
							<thead>
								<tr className="text-gray-500">
									<th className="py-2">الاسم</th>
									<th className="py-2">عدد الأسئلة</th>
									<th className="py-2">النتائج</th>
									<th className="py-2">وصف بسيط</th>
									<th className="py-2">تفاصيل</th>
								</tr>
							</thead>
							<tbody>
								{data.data.map((item: any) => (
									<tr key={item.id} className="border-b last:border-none">
										<td className="py-4 flex items-center space-x-4">
											{item.title}
										</td>
										<td className="py-4">{item.questions.length}</td>
										<td className="py-4 flex items-center gap-3">
											<span>21,33%</span>
											<div className=" bg-green-500 w-3 h-3 rounded-sm"></div>
										</td>
										<td className="py-4">{item.description}</td>
										<td className="py-4 text-blue-500 cursor-pointer">
											<a href={`/user/details/${item.id}`}>عرض</a>
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
