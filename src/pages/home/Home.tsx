import {FC} from "react";
import {EventsList} from "@/features/events";
import {Headline} from "@telegram-apps/telegram-ui";

export const Home: FC = () => {
	return (
		<div className="flex-column gap-xs">
			<Headline>Events</Headline>
			<EventsList />
		</div>
	);
};
