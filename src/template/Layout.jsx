import { useLocation } from "react-router-dom";

import Header from "../components/app/Header";

const Layout = ({ children }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<>
			{currentPath === "/login" ? (
				children
			) : (
				<main className="bg-white-secondary dark:bg-dark-mode-secondary h-screen flex flex-col">
					<Header />
					{children}
				</main>
			)}
		</>
	);
};

export default Layout;
