import { useFormContext } from "react-hook-form";

export function UserData() {
	const methods = useFormContext();

	return (
		<form className="space-y-6 px-12" dir="rtl">
			<div className="grid grid-cols-2 gap-6">
				<div className="col-span-2">
					<input
						{...methods.register(`name`)}
						type="text"
						placeholder="الإسم"
						className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007b8d]"
					/>
				</div>
				<div className="col-span-2">
					<input
						{...methods.register(`email`)}
						type="email"
						placeholder="البريد الإلكتروني"
						className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007b8d]"
					/>
				</div>
				<div className="col-span-2">
					<label className="block text-gray-700 mb-2">الحالة الوظيفية</label>
					<div className="flex items-center space-x-4 rtl:space-x-reverse">
						<label className="flex items-center">
							<input
								type="radio"
								{...methods.register("employment_status")}
								value="employee"
								className="mr-2"
							/>
							موظف
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								{...methods.register("employment_status")}
								value="buessnessOwner"
								className="mr-2"
							/>
							صاحب عمل
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								{...methods.register("employment_status")}
								value="student"
								className="mr-2"
							/>
							طالب
						</label>
					</div>
				</div>
				<div className="col-span-2">
					<input
						{...methods.register(`teaching`)}
						type="text"
						placeholder="التعليم"
						className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007b8d]"
					/>
				</div>
				<div className="col-span-1">
					<input
						{...methods.register(`date_of_birth`)}
						type="date"
						placeholder="تاريخ ولادة"
						className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007b8d]"
					/>
				</div>
				<div className="col-span-2">
					<input
						{...methods.register(`address`)}
						type="text"
						placeholder="عنوان السكن"
						className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007b8d]"
					/>
				</div>
				<div className="col-span-2">
					<label className="block text-gray-700 mb-2">الجنس</label>
					<div className="flex items-center space-x-4 rtl:space-x-reverse">
						<label className="flex items-center">
							<input
								{...methods.register("gender")}
								type="radio"
								value="male"
								className="mr-2"
							/>
							ذكر
						</label>
						<label className="flex items-center">
							<input
								{...methods.register("gender")}
								type="radio"
								value="female"
								className="mr-2"
							/>
							أنثى
						</label>
					</div>
				</div>
			</div>
		</form>
	);
}

export function Thanks() {
	return (
		<div className="flex flex-col justify-center items-center my-40 gap-4">
			<h1 className="text-9xl font-bold ">👍</h1>
			<h1 className="text-4xl font-bold text-[#007b8d]">تم الانتهاء</h1>
		</div>
	);
}
