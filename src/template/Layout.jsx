import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<>
			{currentPath === "/login" ? null : <header>Header</header>}
			{children}
		</>
	);
};

export default Layout;
