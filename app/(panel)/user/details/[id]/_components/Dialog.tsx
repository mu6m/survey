import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ItemData({ user }: any) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="py-4 text-blue-500 cursor-pointer">عرض</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>المعلومات</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right">Name</Label>
						<Input value={user.name} className="col-span-3" disabled={true} />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right">Email</Label>
						<Input value={user.email} className="col-span-3" disabled={true} />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right">Address</Label>
						<Input
							value={user.address}
							className="col-span-3"
							disabled={true}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant={"outline"}>
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
