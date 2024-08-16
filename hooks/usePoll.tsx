import { create } from "zustand";

const StateEnum = {
	HELLO: "hello",
	SURVEY: "survey",
	THANKS: "thanks",
};

const usePoll = create((set) => ({
	currentState: StateEnum.HELLO,
	setState: (newState: string) => set({ currentState: newState }),
}));
export { usePoll, StateEnum };
