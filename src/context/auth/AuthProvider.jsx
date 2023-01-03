import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "../../api/axios";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		if (localStorage.getItem("tokens")) {
			let tokens = JSON.parse(localStorage.getItem("tokens"));
			return jwt_decode(tokens.access);
		}
		return null;
	});

	const navigate = useNavigate();

	const login = async payload => {
		const response = await axios.post("/token/obtain/", payload);
		localStorage.setItem("tokens", JSON.stringify(response.data));
		setUser({
			user: jwt_decode(response.data.access),
			successMessage: true,
		});
		navigate("/map");
	};

	const logout = async () => {
		localStorage.removeItem("tokens");
		setUser(null);
		navigate("/login");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
