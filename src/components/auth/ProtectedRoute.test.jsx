import ProtectedRoute from "./ProtectedRoute";
import { render, screen } from "@testing-library/react";
import { AuthContextProvider } from "../../context/auth/AuthProvider";
import { BrowserRouter } from "react-router-dom";

describe("ProtectedRoute", () => {
	test("Renderizar el componente ProtectedRoute no autenticado", () => {
		render(
			<BrowserRouter>
				<AuthContextProvider value={{ user: null }}>
					<ProtectedRoute accessBy="non-authenticated">
						<h1>Protected</h1>
					</ProtectedRoute>
				</AuthContextProvider>
			</BrowserRouter>
		);
		screen.debug();
	});
});
