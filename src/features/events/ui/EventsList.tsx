import {FC} from "react";
import {Event} from "@/features/events/ui/Event";

export const EventsList: FC = () => {
	const events = [
		{
			avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
			title: "Card title",
			description:"This is the description",
			organization: "Telegram"
		},
		{
			avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
			title: "Card title",
			description:"This is the description",
			organization: "Telegram"
		},
		{
			avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
			title: "Card title",
			description:"This is the description",
			organization: "Telegram"
		},
		{
			avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
			title: "Card title",
			description:"This is the description",
			organization: "Telegram"
		},
		{
			avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
			title: "Card title",
			description:"This is the description",
			organization: "Telegram"
		}
	];

	return (
		<div className="flex wrap gap-xs flex-ctr-ctr">
			{events.map((event) => (
				<Event {...event} />
			))}
		</div>
	);
}
