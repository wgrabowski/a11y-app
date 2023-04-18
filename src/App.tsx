import { Header } from "./shared/layout/header/Header";
import { Footer } from "./shared/layout/footer/Footer";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
	return (
		<>
			<Header />
			<AppRoutes />
			<Footer />
		</>
	);
};

export default App;
