"use client";

import { Button } from "@/components/ui/button";
import { backend } from "@/constants/config";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { Pen, Trash } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";
import { ItemData } from "./_components/Dialog";

export default function Comp() {
	const params = useParams<{ id: string }>();
	const fetcher = (url: string) =>
		fetch(url, { method: "GET" }).then((r) => r.json());
	let { data, isLoading, mutate } = useSWR(
		`${backend}/solve/${params.id}`,
		fetcher
	);
	if (isLoading) {
		return <ReloadIcon className="h-4 w-4 animate-spin mx-auto my-60" />;
	}
	return (
		<div className="bg-white rounded-xl shadow-sm p-6">
			<div className="flex space-x-4 mb-6">
				<a
					href="/user/question"
					className="bg-[#0694A2] text-white py-2 px-4 rounded-lg shadow-md"
				>
					إضافة
				</a>
				<button
					className="bg-gray-100 text-[#0694A2] py-2 px-4 rounded-lg shadow-md"
					onClick={() => {
						const headers = ["id", "name", "email", "address"];

						const csvRows = [
							headers.join(","),
							...data.data.answers.map(
								(item: any) =>
									`${item.user.id},"${item.user.name}","${item.user.email}","${item.user.address}"`
							),
						];

						const csvString = csvRows.join("\n");
						const blob = new Blob([csvString], {
							type: "text/csv;charset=utf-8;",
						});

						const link = document.createElement("a");
						if (link.download !== undefined) {
							const url = URL.createObjectURL(blob);
							link.setAttribute("href", url);
							link.setAttribute("download", "survey_data.csv");
							link.style.visibility = "hidden";
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}
					}}
				>
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
									<a
										href={`/user/question/${params.id}`}
										className="text-[#007b8d]"
									>
										<Pen className="h-4" />
									</a>
									<button
										className="text-red-500"
										onClick={async () => {
											await axios.delete(`${backend}/poll/${params.id}`);
											await mutate();
										}}
									>
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
	);
}
