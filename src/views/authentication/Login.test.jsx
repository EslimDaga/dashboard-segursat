import Login from "./Login";
import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContextProvider } from "../../context/auth/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "../../context/theme/ThemeContext";

describe("Login", () => {
	test("Renderizar la vista Login", () => {
		render(
			<ThemeContext.Provider value={{ theme: "dark" }}>
				<BrowserRouter>
					<AuthContextProvider value={{ user: null }}>
						<Login />
					</AuthContextProvider>
				</BrowserRouter>
			</ThemeContext.Provider>
		);
		screen.debug();
	});
});
