import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./views/authentication/Login";
import { ThemeProvider } from "./context/theme/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth/AuthProvider";
import "./assets/css/main.css";
import Layout from "./template/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<AuthContextProvider>
					<Layout>
						<App />
					</Layout>
				</AuthContextProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
