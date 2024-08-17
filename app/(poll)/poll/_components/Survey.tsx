import { useFormContext } from "react-hook-form";

export function Survey({ data }: any) {
	const methods = useFormContext();

	return (
		<form className="flex flex-col p-8 gap-4">
			{data.map((item: any, index: number) => {
				return (
					<>
						<div className="border-b border-gray-200 gap-4 flex justify-between pb-4">
							<div className="ml-auto text-lg font-bold">{item.text}</div>
							<input
								type="text"
								value={item.id}
								{...methods.register(`solve.${index}.questionId`, {
									valueAsNumber: true,
								})}
								hidden={true}
							/>
						</div>
						<div
							className="flex items-center gap-6 space-x-4 space-x-reverse ml-10"
							dir="rtl"
						>
							{item.answers.map((radio: any) => {
								return (
									<label className="flex items-center" key={radio.id}>
										<input
											type="radio"
											{...methods.register(`solve.${index}.answerId`, {
												valueAsNumber: true,
											})}
											value={radio.id}
											className="mr-2"
										/>
										{radio.text}
									</label>
								);
							})}
						</div>
					</>
				);
			})}
		</form>
	);
}
