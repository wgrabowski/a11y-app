import { Route, Routes } from "react-router-dom";
import { HomeView } from "../views/HomeView";
import { AboutUsView } from "../views/AboutUsView";
import { ClaimReportView } from "../views/ClaimReportView";
import { ContactView } from "../views/ContactView";
import { OtherView } from "../views/OtherView";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route index={true} path={"/"} element={<HomeView />} />
			<Route path={"/page/:slug"} element={<OtherView />} />
			<Route path={"/report"} element={<ClaimReportView />} />
		</Routes>
	);
};
