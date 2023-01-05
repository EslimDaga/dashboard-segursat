import { useLocation } from "react-router-dom";

import Header from "../components/app/Header";

const Layout = ({ children }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<>
			{currentPath === "/login" ? null : <Header />}
			{children}
		</>
	);
};

export default Layout;
