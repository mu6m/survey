import { backend } from "@/constants/config";
import axios from "axios";
import Form from "./Form";

export default async function Question({ params }: any) {
	const { data } = await axios.get(`${backend}/poll/${params.id}`);
	return <Form server_data={data.data} />;
}
