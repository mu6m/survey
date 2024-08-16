import { Pen, Trash } from "lucide-react";

export function Radio() {
	return (
		<label className="flex items-center space-x-2 space-x-reverse">
			<input
				type="radio"
				name="question1"
				className="form-radio h-5 w-5 text-teal-500"
			/>
			<span>جواب</span>
		</label>
	);
}

export function Field() {
	return (
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
		</div>
	);
}
