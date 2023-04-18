import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const markup = (
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// @ts-ignore
if (process.env.NODE_ENV !== "production") {
	import("react-axe").then((axe) => {
		axe.default(React, ReactDOM, 1000);
		ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
			markup
		);
	});
} else {
	ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
		markup
	);
}
