"use client";
import { toast } from "@/components/ui/use-toast";
import { backend } from "@/constants/config";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Field } from "../_component/Items";

export default function Form({ server_data }: any) {
	const methods = useForm({
		defaultValues: server_data,
	});
	const [items, setItems]: any = useState(
		Array(server_data.questions?.length || 0).fill("")
	);
	const [loading, setLoading]: any = useState(false);

	return (
		<div className="w-[800px] mx-auto ">
			<form
				onSubmit={methods.handleSubmit(async (data: any) => {
					setLoading(true);
					data.questions.length = items.length;
					try {
						const request = await axios.put(
							`${backend}/poll/${server_data.id}`,
							{
								title: data.title,
								description: data.title,
								questions: data.questions,
							}
						);
						console.log(request);
						if (!request.data.success) {
							throw new Error("server error");
						}
						toast({
							title: "data is updated !",
						});
					} catch {
						toast({
							variant: "destructive",
							title: "data is not saved",
						});
					} finally {
						setLoading(false);
					}
				})}
				className="max-h-[500px] overflow-y-auto"
			>
				<div className="flex flex-col mb-10 gap-4">
					<label className="ml-auto ">عنوان</label>
					<input
						type="text"
						className="ml-auto text-lg font-bold  "
						{...methods.register(`title`)}
						required
					/>
				</div>
				<FormProvider {...methods}>
					{items.map((_: any, index: number) => {
						return (
							<Field
								key={index}
								edit={true}
								index={index}
								setItems={setItems}
							/>
						);
					})}
				</FormProvider>

				{items.length > 0 && (
					<div className="flex justify-end mt-6">
						<button
							type="submit"
							className="bg-[#007b8d] text-white py-2 px-4 rounded"
							disabled={loading}
						>
							حفظ الاسئلة
						</button>
					</div>
				)}
				<div className="flex justify-end mt-6">
					<button
						type="button"
						onClick={() => setItems((prevState: any) => [...prevState, ""])}
						className="bg-[#007b8d] text-white py-2 px-4 rounded"
						disabled={loading}
					>
						إضافة سؤال جديد
					</button>
				</div>
			</form>
		</div>
	);
}
