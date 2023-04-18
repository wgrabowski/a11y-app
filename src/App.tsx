import "./App.css";
import { Header } from "./shared/layout/header/Header";
import { Footer } from "./shared/layout/footer/Footer";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
	return (
		<>
			<Header />
			<main className="Page-content">
				<AppRoutes />
			</main>
			<Footer />
		</>
	);
};

export default App;
