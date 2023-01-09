import { Helmet, HelmetProvider } from "react-helmet-async";

const Users = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Usuarios - Segursat</title>
			</Helmet>
			<div>Usuarios</div>
		</HelmetProvider>
	);
};

export default Users;
