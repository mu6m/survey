"use client";

import { usePoll, StateEnum } from "@/hooks/usePoll";
import { Order } from "../_components/Order";
import { Thanks, UserData } from "../_components/Info";
import { Survey } from "../_components/Survey";
import useSWR from "swr";
import { backend } from "@/constants/config";
import { useParams } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

export default function Poll() {
	const methods = useForm({});
	const params = useParams<{ id: string }>();
	const fetcher = (url: string) =>
		fetch(url, { method: "GET" }).then((r) => r.json());
	const { data, isLoading } = useSWR(`${backend}/poll/${params.id}`, fetcher);
	const { setState, currentState }: any = usePoll();
	if (isLoading) {
		return <ReloadIcon className="h-4 w-4 animate-spin mx-auto my-60" />;
	}
	const states = [StateEnum.HELLO, StateEnum.SURVEY, StateEnum.THANKS];
	const renderComponent = () => {
		switch (currentState) {
			case StateEnum.HELLO:
				return <UserData />;

			case StateEnum.SURVEY:
				return <Survey data={data.data.questions} />;
			case StateEnum.THANKS:
				return <Thanks />;
			default:
				return <UserData />;
		}
	};
	function getPercentage() {
		return (states.indexOf(currentState) + 1) * 25;
	}
	const handleNextState = () => {
		const currentIndex = states.indexOf(currentState);
		const nextIndex = currentIndex + 1;
		if (nextIndex == states.length - 1) {
			methods.handleSubmit(async (post_data) => {
				for (let item of post_data.solve) {
					item.answerId = Number(item.answerId);
				}
				try {
					const { data } = await axios.post(`${backend}/solve`, post_data);
					if (data.success) {
						toast({
							title: "data is sent !",
						});
						setState(states[nextIndex]);
					}
				} catch {
					toast({
						variant: "destructive",
						title: "data is not sent",
					});
				}
			})();
		} else {
			if (nextIndex < states.length) {
				setState(states[nextIndex]);
			}
		}
	};

	return (
		<div className="w-[1024px] h-[700px] bg-white shadow-lg flex">
			<div className="w-2/6 bg-[url('/assets/bg.jpg')] bg-cover bg-center relative">
				<div className="absolute flex flex-col gap-4 bottom-16 right-10 text-white text-right z-20">
					<div>
						<h2 className="text-4xl font-bold mb-4">{data.data.title}</h2>
						<p className="text-sm ">{data.data.description}</p>
					</div>
					<div>
						<h2 className="text-lg font-bold mb-4">
							{getPercentage().toString()}% تم الاستكمال{" "}
						</h2>
						<div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
							<div
								className="bg-[#007b8d] h-2.5 rounded-full"
								style={{
									width: `${getPercentage().toString()}%`,
									marginLeft: "auto",
									marginRight: "0",
								}}
							></div>
						</div>
					</div>
				</div>
				<div className="absolute inset-0 bg-black opacity-50 z-10"></div>
			</div>

			<div className="w-4/6 pt-12 flex flex-col justify-between gap-2">
				<Order percentage={getPercentage()} />
				<FormProvider {...methods}>{renderComponent()}</FormProvider>
				<button
					onClick={handleNextState}
					className="bg-teal-500 w-full flex items-center justify-center p-5"
				>
					التالي
				</button>
			</div>
		</div>
	);
}
