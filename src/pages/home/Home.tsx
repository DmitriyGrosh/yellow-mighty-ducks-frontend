import {FC} from "react";
import {Flex, Typography} from "antd";
import {EventsList} from "@/features/events";

export const Home: FC = () => {
	return (
		<Flex vertical className="gap-xs">
			<Typography.Title>Events</Typography.Title>
			<EventsList />
		</Flex>
	);
};
