import Toggle from "./ThemeToggle";
import { render, screen } from "@testing-library/react";
import { ThemeContext } from "../../context/theme/ThemeContext";

describe("ThemeToggle", () => {
	test("Renderizar el componente ThemeToggle", () => {
		render(
			//Value in the theme context only dark or light
			<ThemeContext.Provider value={{ theme: "dark" }}>
				<Toggle />
			</ThemeContext.Provider>
		);
		screen.debug();
	});
});
