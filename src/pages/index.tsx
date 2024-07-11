import {createBrowserRouter} from "react-router-dom";
import {Home} from "@/pages/home";
import {Shop} from "@/pages/shop";
import {Settings} from "@/pages/settings";
import {BottomNavigation} from "@/widgets/bottom-navigation";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <BottomNavigation />,
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
