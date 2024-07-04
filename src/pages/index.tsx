import {createBrowserRouter} from "react-router-dom";
import {Sidebar} from "@/widgets/sidebar";
import {Home} from "@/pages/home";
import {Shop} from "@/pages/shop";
import {Settings} from "@/pages/settings";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Sidebar />,
		children: [
			{
				path: "",
				element: <Home />
			},
			{
				path: "shop",
				element: <Shop />
			},
			{
				path: "settings",
				element: <Settings />
			},
		]
	}
])
