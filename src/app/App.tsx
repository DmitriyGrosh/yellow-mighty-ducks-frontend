import {FC} from "react";

import {RouterProvider} from "react-router-dom";
import {router} from "@/pages";

import "./styles/index.css"

export const App: FC = () => {
	return (
		<RouterProvider router={router} />
	);
};
