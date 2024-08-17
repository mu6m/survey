export function Order({ percentage }: any) {
	return (
		<div className="flex items-center justify-between w-full max-w-md mx-auto">
			<div className="flex items-center">
				<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 10h16M4 14h16M4 18h16"
						/>
					</svg>
				</div>
				<span
					className={`ml-2 text-sm font-bold text-${
						percentage == 25 ? "[#007b8d]" : "[#2f3146]"
					}`}
				>
					المعلومات الخاصة بك
				</span>
			</div>
			<div className="flex-grow border-t border-gray-300 mx-4"></div>
			<div className="flex items-center">
				<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<span
					className={`ml-2 text-sm font-bold text-${
						percentage == 50 ? "[#007b8d]" : "[#2f3146]"
					}-600`}
				>
					الأسئلة
				</span>
			</div>
			<div className="flex-grow border-t border-gray-300 mx-4"></div>
			<div className="flex items-center">
				<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
						/>
					</svg>
				</div>
				<span
					className={`ml-2 text-sm font-bold text-${
						percentage == 75 ? "[#007b8d]" : "[#2f3146]"
					}`}
				>
					الموافقة
				</span>
			</div>
		</div>
	);
}
