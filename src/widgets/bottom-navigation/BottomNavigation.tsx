import {FC, useEffect, useState} from "react";
import {FixedLayout, Tabbar} from "@telegram-apps/telegram-ui";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {HomeOutlined, SettingOutlined, ShoppingOutlined} from "@ant-design/icons";

export const BottomNavigation: FC = () => {
	const navigate = useNavigate();
	const [currentTab, setCurrentTab] = useState('');
	const location = useLocation();

	const tabs = [
		{
			id: '',
			text: 'Home',
			Icon: () => <HomeOutlined />
		},
		{
			id: 'shop',
			text: 'Shop',
			Icon: () => <ShoppingOutlined />
		},
		{
			id: 'settings',
			text: 'Settings',
			Icon: () => <SettingOutlined />
		},
	]

	const handleRedirect = (key: string) => {
		setCurrentTab(key);
		navigate(`/${key}`);
	}

	useEffect(() => {
		const pathnameArray = location.pathname.split("/");
		const routeName = pathnameArray[pathnameArray.length - 1];

		setCurrentTab(routeName);
	}, [location]);

	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<Outlet />
			<FixedLayout style={{
				padding: 16
			}}>
				<Tabbar>
					{tabs.map(({
							id,
							text,
							Icon
						}) => <Tabbar.Item key={id} text={text} selected={id === currentTab} onClick={() => handleRedirect(id)}>
						<Icon />
					</Tabbar.Item>)}
				</Tabbar>;
			</FixedLayout>
		</div>
	);
};
