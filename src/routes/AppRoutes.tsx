import { Route, Routes } from "react-router-dom";
import { HomeView } from "../views/HomeView";
import { AboutUsView } from "../views/AboutUsView";
import { ClaimReportView } from "../views/ClaimReportView";
import { ContactView } from "../views/ContactView";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route index={true} path={"/"} element={<HomeView />} />
			<Route path={"/about"} element={<AboutUsView />} />
			<Route index={true} path={"/report"} element={<ClaimReportView />} />
			<Route index={true} path={"/contact"} element={<ContactView />} />
		</Routes>
	);
};
