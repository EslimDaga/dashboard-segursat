import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AuthContext from "./context/auth/AuthProvider";
import Login from "./views/authentication/Login";
import Map from "./views/map/Map";

const navigation = [
	{
		id: 1,
		component: <Login />,
		href: "/login",
		accessBy: "non-authenticated",
	},
	{
		id: 2,
		component: <Map />,
		href: "/map",
		accessBy: "authenticated",
	},
];

const App = () => {
	const { user } = useContext(AuthContext);
	return (
		<Routes>
			{user ? (
				<Route path="/" element={<Navigate to="/map" replace />} />
			) : (
				<Route path="/" element={<Navigate to="/login" replace />} />
			)}

			{navigation.map(item => (
				<Route
					key={item.id}
					path={item.href}
					element={
						<ProtectedRoute accessBy={item.accessBy}>
							{item.component}
						</ProtectedRoute>
					}
				></Route>
			))}
		</Routes>
	);
};

export default App;
