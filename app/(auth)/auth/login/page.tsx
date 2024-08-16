"use client";

import { useToast } from "@/components/ui/use-toast";
import useSession from "@/hooks/useSession";
import { backend } from "@/constants/config";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { setCookie } from "typescript-cookie";

export default function Login() {
	const methods = useForm({});
	const setUser = useSession((state) => state.setUser);
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();

	return (
		<div className="w-[1024px] h-[700px] bg-white shadow-lg flex">
			<div className="w-1/4 bg-[url('/assets/bg.jpg')] bg-cover bg-center relative">
				<div className="absolute bottom-16 left-10 text-white text-right">
					<h2 className="text-3xl font-bold mb-4">تسجيل الدخول</h2>
					<p className="text-sm ">شرح بسيط</p>
				</div>
			</div>

			<div className="w-3/4 p-12 flex flex-col justify-center">
				<h1 className="text-4xl font-bold mb-8 text-right">أهلاً بك</h1>

				<FormProvider {...methods}>
					<form
						onSubmit={methods.handleSubmit(async (data) => {
							setLoading(true);
							try {
								const request = await axios.post(`${backend}/auth`, {
									username: data.user,
									password: data.pass,
								});
								if (request.status == 200) {
									console.log(request);
									setCookie("jwt", request.data.data.token);
									setUser({ username: data.user });
									window.location.href = "/user/";
								} else {
									throw Error("auth");
								}
							} catch {
								toast({
									variant: "destructive",
									title: "wrong username/password",
								});
							} finally {
								setLoading(false);
							}
						})}
					>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-gray-600 text-right"
							>
								اسم المستخدم او الإيميل
							</label>
							<input
								type="text"
								id="email"
								{...methods.register("user")}
								className="w-full px-4 py-3 border rounded-lg bg-gray-100 placeholder-gray-400 text-right focus:outline-none focus:border-gray-400"
								placeholder="youremail@guru.com"
							/>
						</div>

						<div className="mb-2 relative">
							<label
								htmlFor="password"
								className="block mb-2 text-gray-600 text-right"
							>
								كلمة المرور
							</label>
							<input
								type="password"
								id="password"
								{...methods.register("pass")}
								className="w-full px-4 py-3 border rounded-lg bg-gray-100 placeholder-gray-400 text-right focus:outline-none focus:border-gray-400"
								placeholder="أدخل كلمة المرور"
							/>
							<i className="fas fa-eye-slash absolute left-4 top-12 text-gray-400 cursor-pointer"></i>
						</div>

						<div className="text-right mb-6">
							<a href="#" className="text-sm text-gray-500">
								نسيت كلمة المرور ؟
							</a>
						</div>

						<button
							type="submit"
							className="w-full bg-teal-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-teal-700 transition duration-300"
							disabled={loading}
						>
							{loading ? "..." : "تسجيل دخول"}
						</button>
					</form>
				</FormProvider>

				<div className="mt-8 text-center">
					<p className="text-sm text-gray-500">
						ليس لديك حساب ؟
						<a href="#" className="text-teal-600 font-semibold">
							تواصل معنا
						</a>
					</p>
				</div>

				<div className="mt-16 flex gap-4 text-gray-400 text-xs">
					<a href="#" className="hover:text-gray-600">
						شروط الخصوصية
					</a>
					<a href="#" className="hover:text-gray-600">
						الدعم الفني
					</a>
				</div>
			</div>
		</div>
	);
}
