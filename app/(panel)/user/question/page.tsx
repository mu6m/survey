import { Field } from "@/components/main/Items";

export default function Question() {
	return (
		<div className="w-[800px] mx-auto">
			<Field />
			<div className="flex justify-end mt-6">
				<button className="bg-teal-500 text-white py-2 px-4 rounded">
					إضافة سؤال جديد
				</button>
			</div>
		</div>
	);
}
