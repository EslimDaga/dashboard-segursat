import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/theme/ThemeContext";
import Login from "./views/authentication/Login";
import "./assets/css/main.css";

const router = createBrowserRouter([
	{
		path: "login",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</ThemeProvider>
	</React.StrictMode>
);
