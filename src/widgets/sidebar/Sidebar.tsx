import React, {FC, useState} from "react";
import {Flex, Layout, Menu, MenuProps} from "antd";
import logo from "@/assets/logo.jpg";
import {Outlet, useNavigate} from "react-router-dom";
import {
	HomeOutlined, SettingOutlined, ShoppingOutlined,
} from "@ant-design/icons";

import "./Sidebar.scss"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	onClick?: () => void,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		onClick
	} as MenuItem;
}
export const Sidebar: FC = () => {
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(true);

	const handleRedirect = (key: string) => {
		navigate(`/${key}`);
	}

	const items: MenuItem[] = [
		getItem('Home', '1', <HomeOutlined />, () => handleRedirect('')),
		getItem('Shop', '2', <ShoppingOutlined />, () => handleRedirect('shop')),
		getItem('Settings', '3', <SettingOutlined />, () => handleRedirect('settings')),
	];

	return (
		<Layout hasSider>
			<Layout.Sider
				className="layout-sider"
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<Flex vertical gap={32}>
					<img className="layout-logo" src={logo} alt="logo" />
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
				</Flex>
			</Layout.Sider>
			<Layout style={{ marginLeft: 80 }}>
				<Layout.Content style={{ overflow: 'initial', padding: 8 }}>
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	);
};
