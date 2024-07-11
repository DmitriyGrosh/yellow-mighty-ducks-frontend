import {FC} from "react";
import {Avatar, Card} from "@telegram-apps/telegram-ui";
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";

type Props = {
	avatar: string;
	title: string;
	description: string;
	organization: string;
}

export const Event: FC<Props> = ({ avatar, title, description, organization }) => {
	return (
		<Card
			// actions={[
			// 	<SettingOutlined key="setting" />,
			// 	<EllipsisOutlined key="ellipsis" />,
			// ]}
		>
			<>

				<CardChip>
					<div className="flex flex-ctr-ctr gap-xxs">
						<Avatar
							size={28}
							src={avatar}
						/>
						{organization}
					</div>
				</CardChip>
				<img
					alt="example"
					src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
					style={{
						display: 'block',
						height: 308,
						objectFit: 'cover',
						width: 254
					}}
				/>
				<CardCell
					readOnly
					subtitle={description}
				>
					{title}
				</CardCell>
			</>
		</Card>
	);
}
