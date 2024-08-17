"use client";

import { Pen, Trash } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export function Field({ edit, index, setItems }: any) {
	const methods = useFormContext();
	const [editAble, setEdit] = useState(edit || false);
	return (
		<div className="flex flex-col py-4 gap-4">
			<div className="border-b border-gray-200 gap-4 flex justify-between pb-4">
				<button
					className="text-[#007b8d] ml-4"
					onClick={() => {
						setEdit(!editAble);
					}}
				>
					<Pen />
				</button>
				<button
					className="text-red-500"
					onClick={() =>
						setItems((prevState: any) =>
							prevState.filter((_: any, i: number) => i !== index)
						)
					}
				>
					<Trash />
				</button>
				<input
					type="text"
					className="ml-auto text-lg font-bold disabled:bg-transparent"
					{...methods.register(`questions.${index}.text`)}
					disabled={!editAble}
					required
				/>
			</div>
			<div
				className="flex items-center gap-6 space-x-4 space-x-reverse ml-10"
				dir="rtl"
			>
				{[...Array(4)].map((_, optionIndex) => {
					return (
						<label
							key={optionIndex}
							className="flex items-center space-x-2 space-x-reverse"
						>
							<input
								{...methods.register(`questions.${index}.selectedOption`)}
								type="radio"
								id={`${index}.text.${optionIndex}`}
								value={methods.getValues(
									`questions.${index}.text.${optionIndex}`
								)}
								className="form-radio h-5 w-5 text-[#007b8d]"
							/>
							<div className="flex flex-col gap-4">
								<input
									type="text"
									defaultValue={`Option ${optionIndex + 1}`}
									{...methods.register(
										`questions.${index}.answers.${optionIndex}.text`
									)}
									className="border p-1 rounded max-w-32"
								/>
								<input
									type="number"
									defaultValue={0}
									{...methods.register(
										`questions.${index}.answers.${optionIndex}.points`,
										{
											valueAsNumber: true,
										}
									)}
									className="border p-1 rounded max-w-16"
								/>
							</div>
						</label>
					);
				})}
			</div>
		</div>
	);
}
