import { Helmet, HelmetProvider } from "react-helmet-async";

const Units = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Unidades - Segursat</title>
			</Helmet>
			<div>Unidades</div>
		</HelmetProvider>
	);
};

export default Units;
