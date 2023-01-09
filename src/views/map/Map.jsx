import { Helmet, HelmetProvider } from "react-helmet-async";

const Map = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Mapa - Segursat</title>
			</Helmet>
			<div>Hello World</div>
		</HelmetProvider>
	);
};

export default Map;
