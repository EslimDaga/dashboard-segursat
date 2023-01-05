import AuthForm from "./AuthForm";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeContext } from "../../context/theme/ThemeContext";

describe("AuthForm", () => {
	const formik = (
		<AuthForm
			formik={{
				values: {
					username: "",
					password: "",
				},
				errors: {
					username: "",
					password: "",
				},
				touched: {
					username: false,
					password: false,
				},
				handleChange: () => {},
				handleBlur: () => {},
				handleSubmit: () => {},
			}}
			passwordShow={false}
			togglePasswordShow={() => {}}
		/>
	);

	test("Renderizar el componente AuthForm", () => {
		render(
			<ThemeContext.Provider value={{ theme: "dark" }}>
				{formik}
			</ThemeContext.Provider>
		);
		screen.debug();
	});

	test("Revisar el texto del formulario", () => {
		render(
			<ThemeContext.Provider value={{ theme: "dark" }}>
				{formik}
			</ThemeContext.Provider>
		);
		const title = screen.getByText("Bienvenido de Vuelta");
		const subtitle = screen.getByText("Que bueno verte otra vez 😃");
		const username_label = screen.getByLabelText(
			"Usuario o Correo Electronico"
		);
		const password_label = screen.getByLabelText("Contraseña");
		const submit_label = screen.getByText(/Iniciar Sesión/i);
		const button = screen.getByRole("button", { name: /Iniciar Sesión/i });

		screen.debug(title);
		screen.debug(subtitle);
		screen.debug(username_label);
		screen.debug(password_label);
		screen.debug(submit_label);

		fireEvent.change(username_label, { target: { value: "test" } });
		fireEvent.change(password_label, { target: { value: "test" } });
		fireEvent.click(button);
	});
});
