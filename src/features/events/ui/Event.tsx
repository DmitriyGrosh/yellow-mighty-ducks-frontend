import {Avatar, Card} from "antd";
import { EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import {FC} from "react";

type Props = {
	avatar: string;
	title: string;
	description: string;
}

export const Event: FC<Props> = ({ avatar, title, description }) => {
	return (
		<Card
			style={{ width: 250 }}
			cover={
				<img
					alt="example"
					src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
				/>
			}
			actions={[
				<SettingOutlined key="setting" />,
				<EllipsisOutlined key="ellipsis" />,
			]}
		>
			<Card.Meta
				avatar={<Avatar src={avatar} />}
				title={title}
				description={description}
			/>
		</Card>
	);
}
