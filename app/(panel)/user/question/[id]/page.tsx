"use client";
import { backend } from "@/constants/config";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { Field } from "../_component/Items";

export default function Question() {
	const params = useParams<{ id: string }>();
	const fetcher = (url: string) =>
		fetch(url, { method: "GET" }).then((r) => r.json());
	let { data, isLoading, mutate } = useSWR(
		`${backend}/poll/${params.id}`,
		fetcher
	);
	if (isLoading) {
		return <ReloadIcon className="h-4 w-4 animate-spin mx-auto my-60" />;
	}
	return (
		<div className="w-[800px] mx-auto">
			{data.data.questions.map((item: any) => {
				return <Field text={item.text} answers={item.answers} />;
			})}
			<div className="flex justify-end mt-6">
				<button className="bg-teal-500 text-white py-2 px-4 rounded">
					إضافة سؤال جديد
				</button>
			</div>
		</div>
	);
}
