import {FC} from "react";
import {Flex} from "antd";
import {Event} from "@/features/events/ui/Event";

export const EventsList: FC = () => {
	const events = [
		{
			avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
			title: "Card title",
			description:"This is the description",
		},
		{
			avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
			title: "Card title",
			description:"This is the description",
		},
		{
			avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
			title: "Card title",
			description:"This is the description",
		},
		{
			avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
			title: "Card title",
			description:"This is the description",
		},
		{
			avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
			title: "Card title",
			description:"This is the description",
		}
	];

	return (
		<Flex wrap="wrap" className="gap-xs">
			{events.map((event) => (
				<Event {...event} />
			))}
		</Flex>
	);
}
