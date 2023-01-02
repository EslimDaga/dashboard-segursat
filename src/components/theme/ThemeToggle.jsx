import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../context/theme/ThemeContext";

const Toggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div
			className="transition duration-500 ease-in-out rounded-full p-2 self-center cursor-pointer"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? (
				<FaMoon
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className="w-5 h-5 text-white-primary dark:text-dark-mode-primary text-2xl"
				/>
			) : (
				<FaSun
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className="w-5 h-5 text-white-primary dark:text-dark-mode-primary text-2xl"
				/>
			)}
		</div>
	);
};

export default Toggle;
