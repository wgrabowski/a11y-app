import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route index={true} path={"/"} element={<span>lol</span>} />
		</Routes>
	);
};
